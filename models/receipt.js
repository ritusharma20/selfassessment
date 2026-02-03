import mongoose from "mongoose";

const receiptSchema = new mongoose.Schema({
  receiptNo: String,
  sasNo: String,
  applicantName: String,
  mobile: String,
  propertyAddress: String,

  propertyTax: Number,
  swmTax: Number,
  totalTax: Number,

  paymentDate: Date,
  orderNo: String,
  transactionRef: String
}, { timestamps: true });

export default mongoose.model("Receipt", receiptSchema);