import mongoose from "mongoose";

const vacantLandTaxSchema = new mongoose.Schema({
  applicationNo: {
    type: String,
    required: true
  },

  plotArea: {
    type: Number,
    required: true
  },

  acquisitionDate: {
    type: Date,
    required: true
  },

  ratePerSqFt: {
    type: Number,
    default: 3.57
  },

  vacantLandTax: Number,
  percentagePenalty: Number,
  fixedPenalty: Number,
  totalPayable: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("VacantLandTax", vacantLandTaxSchema);
