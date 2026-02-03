
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
// import vacantlandroutes from "./routes/vacantlandroutes.js";


/* ===================== CONFIG ===================== */
dotenv.config();
const app = express();

/* ===== Fix __dirname (ES Module) ===== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===================== MIDDLEWARES (ORDER FIXED) ===================== */
app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));

/* static upload folder */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===================== MONGODB CONNECT ===================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected to pmc"))
  .catch((err) => console.error("MongoDB Error:", err));

/* ===================== ROUTES ===================== */

// circles
import circleRoutes from "./routes/circleroutes.js";
app.use("/api/circles", circleRoutes);

// wards
import wardRoutes from "./routes/wardRoutes.js";
app.use("/api/wards", wardRoutes);

// roads
import roadRoutes from "./routes/roadRoutes.js";
app.use("/api", roadRoutes);

// rainwater
import rainwaterRoutes from "./routes/rainwaterRoutes.js";
app.use("/api", rainwaterRoutes);

// water connection
import waterConnectionRoutes from "./routes/waterConnectionRoutes.js";
app.use("/api", waterConnectionRoutes);

// water tax type
import waterTaxTypeRoutes from "./routes/waterTaxTypeRoutes.js";
app.use("/api", waterTaxTypeRoutes);
// FLOOR ROUTES
// app.use("/api/floor", floorRoutes);

// ownership type
import ownershipTypeRoutes from "./routes/ownershipTypeRoutes.js";
app.use("/api", ownershipTypeRoutes);

// property types
import propertyTypeRoutes from "./routes/propertyTypeRoutes.js";
app.use("/api/property-types", propertyTypeRoutes);


// property submit / fetch
import propertyRoutes from "./routes/propertyRoutes.js";
app.use("/api", propertyRoutes);

// document upload
import documentUpload from "./routes/documentUpload.js";
app.use("/api/property", documentUpload);


import floorMasterRoutes from './routes/floorMasterRoutes.js';
app.use('/api/floor-master', floorMasterRoutes);

import citizenPropertyRoutes from "./routes/citizenPropertyRoutes.js";

app.use("/api", citizenPropertyRoutes);
import vacantLandTaxRoute from "./routes/vacantlandroutes.js";

app.use("/api", vacantLandTaxRoute);


import receiptroutes from "./routes/receiptroutes.js";

app.use("/api", receiptroutes); 

/* ===================== SERVER ===================== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});