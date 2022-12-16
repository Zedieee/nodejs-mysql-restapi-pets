import { Router } from "express";
import {
  getPets,
  updatePet,
  createPet,
  deletePet,
    getPet,
} from "../controllers/pets.controller.js";

const router = Router();

router.get("/pets", getPets);

router.get("/pets/:id", getPet);

router.post("/pets", createPet);

router.patch("/pets/:id", updatePet);

router.delete("/pets/:id", deletePet);

export default router;
