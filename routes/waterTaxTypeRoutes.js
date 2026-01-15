import express from "express";
import WaterTaxType from "../models/waterTaxType.js";

const router = express.Router();

// GET all water tax types
router.get("/water-tax-type", async (req, res) => {
  try {
    const data = await WaterTaxType.find();
    res.json(data);   // ✅ IMPORTANT
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
