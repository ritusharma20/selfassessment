import DocumentUpload from "../models/documentUpload.js";

// export const uploadProperty = async (req, res) => {
//   try {
//     console.log("FILES:", req.files);

//     const doc = new DocumentUpload({
//       registryPaper: req.files.registryPaper?.[0]?.path,
//       electricityBill: req.files.electricityBill?.[0]?.path,
//       buildingPhoto: req.files.buildingPhoto?.[0]?.path
//     });

//     await doc.save();   // 🔥 THIS IS MUST

//     console.log("SAVED IN DB");

//     res.json({ success: true });

//   } catch (err) {
//     console.error("SAVE ERROR:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };
export const uploadProperty = async (req, res) => {
  try {
    console.log("FILES 👉", req.files);

    if (
      !req.files ||
      !req.files.registryPaper ||
      !req.files.electricityBill ||
      !req.files.buildingPhoto
    ) {
      return res.status(400).json({
        success: false,
        message: "All documents are required"
      });
    }

    const doc = new DocumentUpload({
      registryPaper: req.files.registryPaper[0].path,
      electricityBill: req.files.electricityBill[0].path,
      buildingPhoto: req.files.buildingPhoto[0].path
    });

    await doc.save();
console.log("saved db");
    return res.status(200).json({
      success: true,
      message: "Documents uploaded & saved",
      data: doc
    });

  } catch (error) {
    console.error("UPLOAD ERROR 👉", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
