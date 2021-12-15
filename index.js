import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

import datas from "./src/datas.js";
import Routes from "./src/routes.js";

const routes = new Routes(app, datas);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serveur lancé sur le port ${port}`);
});
