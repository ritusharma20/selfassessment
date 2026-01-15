import mongoose from "mongoose";

const roadSchema = new mongoose.Schema({
  road_name: {
    type: String,
    required: true
  },
  circle_id: {
    type: Number,
    default: 0
  }
});

const Road = mongoose.model("Road", roadSchema, "roads");

export default Road;
