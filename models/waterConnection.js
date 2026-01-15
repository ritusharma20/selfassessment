import mongoose from "mongoose";
import Ward from "./ward.js"; // ✔ sirf use karo

const waterConnectionSchema = new mongoose.Schema({
  ward_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ward"
  }
});

const WaterConnection =
  mongoose.models.WaterConnection ||
  mongoose.model("WaterConnection", waterConnectionSchema, "water_connection_facility");

export default WaterConnection;
