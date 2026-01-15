import express from "express";
import PropertyType from "../models/propertyType.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await PropertyType.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
