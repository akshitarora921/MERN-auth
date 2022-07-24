import express from "express";
import { initializeDbConnection } from "./db.js";
import { routes } from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.get("/", (req, res) => {
  res.send("hello world!");
});
initializeDbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
