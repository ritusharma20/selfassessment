import express from "express";
import { getAllCircles } from "../controllers/circleController.js";

const router = express.Router();

router.get("/", getAllCircles);

export default router;
