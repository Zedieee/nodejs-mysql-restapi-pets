import express from "express";
import petsRoutes from "./routes/pets.routes.js";
import indexRoutes from "./routes/index.routes.js";
import './config.js'
import apicache from "apicache";
import cors from 'cors'

const app = express();

const cache = apicache.middleware;
app.use(express.json());
const corss = cors();
app.use(corss);
app.use(cache("60 minutes"));
app.use(indexRoutes);
app.use("/api", petsRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encontró el endpoint",
  });

});

export default app;