import express from "express";
import { generateReceipt } from "../controllers/receiptcontroller.js";

const router = express.Router();

router.post("/receipt/generate", generateReceipt);

export default router;