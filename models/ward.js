import mongoose from "mongoose";

const wardSchema = new mongoose.Schema({
  circle_id: {
    type: Number,
    required: true
  },
  ward_no: {
    type: String,
    required: true
  }
});

const Ward = mongoose.model(
  "Ward",
  wardSchema,
  "ward"   // collection name
);

export default Ward;
