import express from "express";
import Road from "../models/road.js";

const router = express.Router();

router.get("/roads", async (req, res) => {
  try {
    const roads = await Road.find({ circle_id: 0 }); // ✅ FIXED
    res.json(roads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
