import { getDbConnection } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;
    const db = getDbConnection("auth-db");
    // check is user already exists
    const user = await db.collection("users").findOne({ email });
    if (user) {
      res.status(409);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const privateInfo = {
      favoriteFood: "",
      favoriteSports: "",
      bio: "",
    };

    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
      privateInfo,
      isVerified: false,
    });
    const { insertId } = result;

    jwt.sign(
      {
        id: insertId,
        email,
        privateInfo,
        isVerified: false,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).json({ token });
      }
    );
  },
};
