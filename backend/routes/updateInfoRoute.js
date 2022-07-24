import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { getDbConnection } from "../db.js";
export const updateInfoRoute = {
  path: "/api/users/:userId",
  method: "put",
  handler: async (req, res) => {
    const { authorization } = req.headers;
    const { userId } = req.params;
    const updates = (({ favoriteFood, favoriteSports, bio }) => ({
      favoriteFood,
      favoriteSports,
      bio,
    }))(req.body);
    if (!authorization)
      return res.status(401).json({ message: "no authorization headers send" });
    console.log(updates);

    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "unable to verify token" });
      }
      const { id } = decoded;
      console.log(id, userId);
      if (userId !== id) {
        return res
          .status(403)
          .json({ message: "user cannot update other users data" });
      }
      const db = await getDbConnection("auth-db");
      const result = await db
        .collection("users")
        .findOneAndUpdate(
          { _id: ObjectId(id) },
          { $set: { privateInfo: updates } },
          { returnOriginal: false }
        );

      const { id: _id, email, isVerified, privateInfo } = result.value;
      console.log(email, isVerified);
      jwt.sign(
        { id, email, isVerified, privateInfo },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        },
        async (err, token) => {
          if (err) return res.status(500).json({ error: err });
          return res.status(200).json({ message: "successfully updated user" });
        }
      );
    });
  },
};
