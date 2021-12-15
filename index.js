import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// const allowedOrigins = [
//   "http://localhost:5000",
//   "http://localhost:5001",
//   "http://localhost:5002",
//   "http://localhost:8080",
//   "http://localhost:8081",
//   "http://localhost:3000",
//   "http://localhost:3001",
// ];

// const options = {
//   origin: allowedOrigins,
// };

//app.use(cors(options));

import datas from "./src/datas.js";
import Routes from "./src/routes.js";

const routes = new Routes(app, datas);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`serveur lancé sur le port ${port}`);
});
