import express from "express";
import WaterConnection from "../models/waterConnection.js";

const router = express.Router();

router.get("/water-connection", async (req, res) => {
  try {
    const data = await WaterConnection.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
