
// import Property from "../models/Property.js";

// /* 🔥 APPLICATION NO GENERATOR */
// const generateApplicationNo = async (ward) => {
//   const count = await Property.countDocuments({ ward });
//   return `PMC/${ward}/${String(count + 1).padStart(5, "0")}`;
// };

// /* =========================
//    SAVE PROPERTY (FULL DATA)
// ========================= */
// export const saveProperty = async (req, res) => {
//   try {
//     console.log("BODY:", req.body);
//     console.log("FILES:", req.files);

//     const ward = req.body.ddlWard;
//     if (!ward) {
//       return res.status(400).json({ success: false, message: "Ward required" });
//     }

//     const applicationNo = await generateApplicationNo(ward);

//     /* 🔹 OWNERS */
//     const ownerNames = Array.isArray(req.body.owner_name)
//       ? req.body.owner_name
//       : [req.body.owner_name];

//     const owners = ownerNames.map((_, i) => ({
//       name: Array.isArray(req.body.owner_name)
//         ? req.body.owner_name[i]
//         : req.body.owner_name,

//       gender: Array.isArray(req.body.gender)
//         ? req.body.gender[i]
//         : req.body.gender,

//       guardianName: Array.isArray(req.body.guardian_name)
//         ? req.body.guardian_name[i]
//         : req.body.guardian_name,

//       relation: Array.isArray(req.body.relation)
//         ? req.body.relation[i]
//         : req.body.relation,

//       aadharNo: Array.isArray(req.body.aadhar_no)
//         ? req.body.aadhar_no[i]
//         : req.body.aadhar_no,

//       electricityCANo: Array.isArray(req.body.electricity_ca)
//         ? req.body.electricity_ca[i]
//         : req.body.electricity_ca,

//       identityDocument:
//         req.files?.owner_document?.[i]?.path ||
//         req.files?.["owner_document[]"]?.[i]?.path ||
//         ""
//     }));

//     /* 🔹 PROPERTY SAVE */
//     const property = new Property({
//       Application_No: applicationNo,

//       // ✅ FIXED
//       assessmentYear: req.body.txtAY,
//       circle: req.body.ddlCircle,
//       ward: req.body.ddlWard,
//       propertyType: req.body.ddlPType,
//       road: req.body.road_name,

//       plotArea: req.body.txtPLArea,
// builtUpArea: req.body.txtBuiltUpArea,
// acquisitionDate: req.body.txtADate,

//       rainWater: req.body.ddlWCFacility,
//       waterConnection: req.body.ddlWaterCFacility,
//       waterTaxType: req.body.ddlWaterTaxType,

//       propertyAddress: req.body.address_p,
//       propertyPin: req.body.pin_p,
//       correspondenceAddress: req.body.address_c,
//       correspondencePin: req.body.pin_c,

//       mobile: req.body.mobile_no,
//       email: req.body.email_id,

//       ownershipType: req.body.ddlOT,
//       owners,

//       documents: {
//         registryPaper: req.files?.registryPaper?.[0]?.path || "",
//         electricityBill: req.files?.electricityBill?.[0]?.path || "",
//         buildingPhoto: req.files?.buildingPhoto?.[0]?.path || ""
//       }
//     });

//     await property.save();

//     res.status(201).json({
//       success: true,
//       Application_No: applicationNo
//     });

//   } catch (err) {
//     console.error("SAVE PROPERTY ERROR:", err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// /* =========================
//    GET PROPERTY BY APP NO
// ========================= */
// export const getPropertyByApplicationNo = async (req, res) => {
//   try {
//     const { applicationNo } = req.query;

//     const property = await Property.findOne({ Application_No: applicationNo });

//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     res.json(property);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



import Property from "../models/Property.js";

/* 🔥 APPLICATION NO GENERATOR */
const generateApplicationNo = async (ward) => {
  const count = await Property.countDocuments({ ward });
  return `PMC/${ward}/${String(count + 1).padStart(5, "0")}`;
};

/* =========================
   SAVE PROPERTY (FULL DATA)
========================= */
export const saveProperty = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const ward = req.body.ddlWard;
    if (!ward) {
      return res.status(400).json({ success: false, message: "Ward required" });
    }

    const applicationNo = await generateApplicationNo(ward);

    /* 🔹 OWNERS */
    const ownerNames = Array.isArray(req.body.owner_name)
      ? req.body.owner_name
      : [req.body.owner_name];

    const owners = ownerNames.map((_, i) => ({
      name: Array.isArray(req.body.owner_name)
        ? req.body.owner_name[i]
        : req.body.owner_name,

      gender: Array.isArray(req.body.gender)
        ? req.body.gender[i]
        : req.body.gender,

      guardianName: Array.isArray(req.body.guardian_name)
        ? req.body.guardian_name[i]
        : req.body.guardian_name,

      relation: Array.isArray(req.body.relation)
        ? req.body.relation[i]
        : req.body.relation,

      aadharNo: Array.isArray(req.body.aadhar_no)
        ? req.body.aadhar_no[i]
        : req.body.aadhar_no,

      electricityCANo: Array.isArray(req.body.electricity_ca)
        ? req.body.electricity_ca[i]
        : req.body.electricity_ca,

      identityDocument:
        req.files?.owner_document?.[i]?.path ||
        req.files?.["owner_document[]"]?.[i]?.path ||
        ""
    }));

    /* 🔹 FLOORS */
    const floorNos = Array.isArray(req.body.floorNo)
      ? req.body.floorNo
      : [req.body.floorNo];

    const floors = floorNos.map((_, i) => ({
      floorNo: Array.isArray(req.body.floorNo) ? req.body.floorNo[i] : req.body.floorNo,
      floorName: Array.isArray(req.body.floorName) ? req.body.floorName[i] : req.body.floorName,
      typeOfUse: Array.isArray(req.body.typeOfUse) ? req.body.typeOfUse[i] : req.body.typeOfUse,
      usageFactor: Array.isArray(req.body.usageFactor) ? req.body.usageFactor[i] : req.body.usageFactor,
      occupancyType: Array.isArray(req.body.occupancyType) ? req.body.occupancyType[i] : req.body.occupancyType,
      builtUpArea: Array.isArray(req.body.floorBuiltUpArea)
        ? req.body.floorBuiltUpArea[i]
        : req.body.floorBuiltUpArea,
      carpetArea: Array.isArray(req.body.carpetArea) ? req.body.carpetArea[i] : req.body.carpetArea,
      coveredArea: Array.isArray(req.body.coveredArea) ? req.body.coveredArea[i] : req.body.coveredArea,
      constructionType: Array.isArray(req.body.constructionType)
        ? req.body.constructionType[i]
        : req.body.constructionType,
      buildingAge: Array.isArray(req.body.buildingAge) ? req.body.buildingAge[i] : req.body.buildingAge,
      completionYear: Array.isArray(req.body.completionYear) ? req.body.completionYear[i] : req.body.completionYear,
      assessmentFromYear: Array.isArray(req.body.assessmentFromYear)
        ? req.body.assessmentFromYear[i]
        : req.body.assessmentFromYear,
      assessmentUptoYear: Array.isArray(req.body.assessmentUptoYear)
        ? req.body.assessmentUptoYear[i]
        : req.body.assessmentUptoYear,
      remark: Array.isArray(req.body.floorRemark) ? req.body.floorRemark[i] : req.body.floorRemark
    }));

    /* 🔹 PROPERTY SAVE */
    const property = new Property({
      Application_No: applicationNo,

      assessmentYear: req.body.txtAY,
      circle: req.body.ddlCircle,
      ward: req.body.ddlWard,
      propertyType: req.body.ddlPType,
      road_name: req.body.road_name,

      plotArea: req.body.txtPLArea,
      builtUpArea: req.body.txtBuiltUpArea,
      acquisitionDate: req.body.txtADate,

      rainWater: req.body.ddlWCFacility,
      waterConnection: req.body.ddlWaterCFacility,
      waterTaxType: req.body.ddlWaterTaxType,

      propertyAddress: req.body.address_p,
      propertyPin: req.body.pin_p,
      correspondenceAddress: req.body.address_c,
      correspondencePin: req.body.pin_c,

      mobile: req.body.mobile_no,
      email: req.body.email_id,

      ownershipType: req.body.ddlOT,
      owners,

      // floors, // ✅ add floors array here



      
      documents: {
        registryPaper: req.files?.registryPaper?.[0]?.path || "",
        electricityBill: req.files?.electricityBill?.[0]?.path || "",
        buildingPhoto: req.files?.buildingPhoto?.[0]?.path || ""
      }
    });

    await property.save();

    res.status(201).json({
      success: true,
      Application_No: applicationNo
    });

  } catch (err) {
    console.error("SAVE PROPERTY ERROR:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

/* =========================
   GET PROPERTY BY APP NO
========================= */
export const getPropertyByApplicationNo = async (req, res) => {
  try {
    const { applicationNo } = req.query;

    const property = await Property.findOne({ Application_No: applicationNo });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

