import express from "express";
import Rainwater from "../models/rainwater.js";

const router = express.Router();

router.get("/rainwater", async (req, res) => {
  try {
    const data = await Rainwater.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
