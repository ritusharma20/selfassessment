// import mongoose from "mongoose";

// const vacantLandTaxSchema = new mongoose.Schema({
//   applicationNo: {
//     type: String,
//     required: true
//   },

//   plotArea: {
//     type: Number,
//     required: true
//   },

//   acquisitionDate: {
//     type: Date,
//     required: true
//   },

//   ratePerSqFt: {
//     type: Number,
//     default: 3.57
//   },

//   vacantLandTax: Number,
//   percentagePenalty: Number,
//   fixedPenalty: Number,
//   totalPayable: Number,

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// export default mongoose.model("VacantLandTax", vacantLandTaxSchema);


// import mongoose from "mongoose";

// const vacantLandTaxSchema = new mongoose.Schema({
//   applicationNo: { type: String, required: true },
//   plotArea: { type: Number, required: true },
//   acquisitionDate: { type: Date, required: true },
//   ratePerSqFt: { type: Number, default: 3.57 },

//   // Tax fields
//   vacantLandTax: { type: Number, default: 0 },
//   waterTax: { type: Number, default: 0 },
//   swmTax: { type: Number, default: 0 },
//   otherCharges: { type: Number, default: 0 },
//   percentagePenalty: { type: Number, default: 0 },
//   fixedPenalty: { type: Number, default: 0 },
//   rebate: { type: Number, default: 0 },
//   totalPayable: { type: Number, default: 0 },

//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model("VacantLandTax", vacantLandTaxSchema);


import mongoose from "mongoose";

const vacantLandTaxSchema = new mongoose.Schema({
  applicationNo: { type: String, required: true },
  plotArea: { type: Number, required: true },
  acquisitionDate: { type: Date, required: true },
  ratePerSqFt: { type: Number, default: 3.57 },

  // TAX FIELDS
  completedYears: { type: Number, default: 0 },
  annualTax: { type: Number, default: 0 },
  vacantLandTax: { type: Number, default: 0 },
  waterTax: { type: Number, default: 0 },
  swmTax: { type: Number, default: 0 },
  otherCharges: { type: Number, default: 0 },
  rebate: { type: Number, default: 0 },
  fixedPenalty: { type: Number, default: 0 },
  percentagePenalty: { type: Number, default: 0 },
  totalPayable: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("VacantLandTax", vacantLandTaxSchema);
