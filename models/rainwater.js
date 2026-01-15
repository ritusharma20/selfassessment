import mongoose from "mongoose";

const rainwaterSchema = new mongoose.Schema({
  value: String,
  label: String
});

const Rainwater = mongoose.model(
  "Rainwater",
  rainwaterSchema,
  "rainwater_options"   // collection name
);

export default Rainwater;
