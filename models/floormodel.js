// import mongoose from "mongoose";

// const floorSchema = new mongoose.Schema(
//   {
//     applicationNo: { type: String, required: true },
//     floorNo: { type: String, required: true },
//     typeOfUse: { type: String, required: true },
//     usageFactor: { type: String, required: true },
//     occupancyType: { type: String, required: true },
//     constructionType: { type: String, required: true },
//     builtUpArea: { type: Number, required: true },
//     assessmentFromYear: { type: String, required: true },
//     assessmentUptoYear: { type: String, required: true }
//   },
//   {
//     timestamps: true,
//     collection: "floor" // exact collection name
//   }
// );

// const Floor = mongoose.model("Floor", floorSchema);
// export default Floor;


import mongoose from "mongoose";

const floorSchema = new mongoose.Schema({
    label: { type: String, required: true }, // Floor name, e.g., "Basement 1"
    value: { type: Number, required: true }, // Floor number/value, e.g., -2
    order: { type: Number, required: true }  // Sorting order
}, { timestamps: true });

const Floor = mongoose.model("floor", floorSchema);

export default Floor;
