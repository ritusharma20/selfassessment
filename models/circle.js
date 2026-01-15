import mongoose from "mongoose";

const circleSchema = new mongoose.Schema(
  {
    circle_id: Number,
    circleName: String
  },
  { collection: "circle_name" }
);

export default mongoose.model("Circle", circleSchema);
