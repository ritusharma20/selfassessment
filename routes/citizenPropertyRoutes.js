import express from "express";
import { getPropertyByApplicationNo, getLatestProperty } from "../controllers/citizenPropertyController.js";

const router = express.Router();

// Existing route (still works if needed)
router.get("/property-details", getPropertyByApplicationNo);

// New route for latest property (no query parameter needed)
router.get("/property-details/latest", getLatestProperty);

export default router;
