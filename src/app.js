import express from "express";
import petsRoutes from "./routes/pets.routes.js";
import indexRoutes from "./routes/index.routes.js";
import './config.js'


const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", petsRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encontró el endpoint",
  });

});

export default app;