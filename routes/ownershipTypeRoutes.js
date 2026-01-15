import express from "express";
import OwnershipType from "../models/ownershipType.js";

const router = express.Router();

// GET ownership types
router.get("/ownership-types", async (req, res) => {
  try {
    const data = await OwnershipType.find();
    res.json(data);   // ❗ IMPORTANT
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
