// import mongoose from "mongoose";

// const propertySchema = new mongoose.Schema(
//   {
//     // 🔹 AUTO APPLICATION NO
//     Application_No: {
//       type: String,
//       required: true,
//       unique: true
//     },

//     // 🔹 PROPERTY DETAILS
// assessmentYear: [{ type: String, required: true }],
//     circle: String,
//     ward: String,
//     propertyType: String,

//     plotArea: String,
//     builtUpArea: String,
//     acquisitionDate: String,

//     // 🔹 WATER
//     rainWater: String,
//     waterConnection: String,
//     waterTaxType: String,

// floors: [
//     {
//       floorNo: String,
//       typeOfUse: String,
//       occupancyType: String,
//       builtUpArea: String,
//       // 🔹 FLOOR BASIC
//   // floorNo: String,                 // Ground / First / Second
//   // floorName: String,               // Optional (G+1 etc.)

//   // 🔹 USAGE DETAILS
//   // typeOfUse: String,               // Residential / Commercial / Mixed
//   usageFactor: String,             // Self / Rented
//   // occupancyType: String,           // Owner / Tenant

//   // 🔹 AREA DETAILS
//   builtUpArea: String,             // BBV (Built Up Area)
//   // carpetArea: String,              // Optional
//   // coveredArea: String,             // Optional

//   // 🔹 CONSTRUCTION
//   constructionType: String,        // RCC / ACC / Tin / Asbestos
//   buildingAge: String,             // In years
//   completionYear: String,          // Year of completion

//   // 🔹 ASSESSMENT
//   assessmentFromYear: String,      // 2023-2024
//   assessmentUptoYear: String,      // 2025-2026

//     }
//   ],

//     // 🔹 ADDRESS
//     propertyAddress: String,
//     propertyPin: String,
//     correspondenceAddress: String,
//     correspondencePin: String,

//     mobile: String,
//     email: String,

//     // 🔹 OWNERSHIP
//     ownershipType: String,

//     owners: [
//       {
//         name: String,
//         gender: String,
//         guardianName: String,
//         relation: String,
//         aadharNo: String,
//         electricityCANo: String,
//         identityDocument: String
//       }
//     ],

//     // 🔹 DOCUMENTS
//     documents: {
//       registryPaper: String,
//       electricityBill: String,
//       buildingPhoto: String
//     }
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Property", propertySchema);


import mongoose from "mongoose";

/* 🔹 FLOOR SCHEMA */
const floorSchema = new mongoose.Schema({
  floorNo: String,                 // Ground / First / Second
  
  // USAGE DETAILS
  typeOfUse: String,               // Residential / Commercial / Mixed
  usageFactor: String,             // Self / Rented
  occupancyType: String,           // Owner / Tenant

  // AREA DETAILS
  builtUpArea: String,             // BBV

  // CONSTRUCTION
  constructionType: String,        // RCC / ACC / Tin / Asbestos
  // ASSESSMENT
  assessmentFromYear: String,      // e.g., 2023-2024
  assessmentUptoYear: String,      // e.g., 2025-2026
});

/* 🔹 PROPERTY SCHEMA */
const propertySchema = new mongoose.Schema(
  {
    // AUTO APPLICATION NO
    Application_No: {
      type: String,
      required: true,
      unique: true
    },

    // PROPERTY DETAILS
    assessmentYear: [{ type: String, required: true }],
    circle: String,
    ward: String,
    propertyType: String,
    road_name:String,
    plotArea: String,
    builtUpArea: String,
    acquisitionDate: String,

    // WATER
    rainWater: String,
    waterConnection: String,
    waterTaxType: String,

    // ✅ FLOORS ARRAY
    floors: [floorSchema],

    // ADDRESS
    propertyAddress: String,
    propertyPin: String,
    correspondenceAddress: String,
    correspondencePin: String,

    mobile: String,
    email: String,

    // OWNERSHIP
    ownershipType: String,
    owners: [
      {
        name: String,
        gender: String,
        guardianName: String,
        relation: String,
        aadharNo: String,
        electricityCANo: String,
        identityDocument: String
      }
    ],

    // DOCUMENTS
    documents: {
      registryPaper: String,
      electricityBill: String,
      buildingPhoto: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
