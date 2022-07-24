import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getDbConnection } from "../db.js";

export const loginRoute = {
  path: "/api/login",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;
    const db = await getDbConnection("auth-db");
    const user = await db.collection("users").findOne({ email });

    if (!user) return res.status(401);

    const { _id: id, isVerified, passwordHash, privateInfo } = user;
    console.log(password, passwordHash);
    const isCorrect = await bcrypt.compare(password, passwordHash);
    console.log(isCorrect);
    if (!isCorrect) {
      res.status(401).send("incorrect password");
    }

    jwt.sign(
      { id, isVerified, privateInfo, email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        return res.status(200).json({ token });
      }
    );
  },
};
