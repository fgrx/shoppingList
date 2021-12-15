import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

import datas from "./src/datas.js";
import Routes from "./src/routes.js";

const routes = new Routes(app, datas);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serveur lancé sur le port ${port}`);
});
