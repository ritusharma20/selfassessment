import mongoose from "mongoose";

const waterTaxTypeSchema = new mongoose.Schema({
  value: Number,
  label: String
});

const WaterTaxType = mongoose.model(
  "WaterTaxType",
  waterTaxTypeSchema,
  "water_tax_type"   // collection name
);

export default WaterTaxType;
