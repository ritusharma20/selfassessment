import mongoose from "mongoose";

const ownershipTypeSchema = new mongoose.Schema({
  value: Number,
  label: String
});

const OwnershipType = mongoose.model(
  "OwnershipType",
  ownershipTypeSchema,
  "ownership_type"   // collection name
);

export default OwnershipType;
