import express from "express";
import Ward from "../models/ward.js";

const router = express.Router();

router.get("/:circle_id", async (req, res) => {
  try {
    const circleId = Number(req.params.circle_id);

    const wards = await Ward.find({ circle_id: circleId });

    res.json(wards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
