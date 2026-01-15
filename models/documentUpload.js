import mongoose from "mongoose";

const documentUploadSchema = new mongoose.Schema(
  {
    registryPaper: {
      type: String,
      required: true
    },
    electricityBill: {
      type: String,
      required: true
    },
    buildingPhoto: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("DocumentUpload", documentUploadSchema);
