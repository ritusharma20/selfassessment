
import express from "express";
import upload from "../middlewares/upload.js";
import { saveProperty } from "../controllers/propertyController.js";
import { getPropertyByApplicationNo } from "../controllers/propertyController.js";

const router = express.Router();

router.post(
  "/property-details",
  upload.fields([
    { name: "registryPaper", maxCount: 1 },
    { name: "electricityBill", maxCount: 1 },
    { name: "buildingPhoto", maxCount: 1 },
    { name: "owner_document", maxCount: 10 }
  ]),
  saveProperty
);
router.get("/property", getPropertyByApplicationNo);



router.get("/property", getPropertyByApplicationNo);
export default router;
