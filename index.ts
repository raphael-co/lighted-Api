import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { AuthentificationRoute } from "./src/routes/AuthentificationRoute";
import Client from './src/models/Client';

config(); //process.env
const app = express();

app.use(cors(
    {
      origin: true,
      credentials: true,
    }))
  
  app.use((req, res, next)=>
  {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      next()
  })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', AuthentificationRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server run to http://localhost:${process.env.PORT}`);
})