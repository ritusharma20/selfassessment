import express from "express";
import { calculateVacantLandTax } from "../controllers/vacantlandtaxcontroller.js";

const router = express.Router();

router.get(
  "/vacantlandtax/latest/:applicationNo",
  calculateVacantLandTax
);

export default router;
