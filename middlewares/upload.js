// import multer from "multer";
// import path from "path";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {

//     if (file.fieldname === "registryPaper") {
//       cb(null, "uploads/registry");
//     } 
//     else if (file.fieldname === "electricityBill") {
//       cb(null, "uploads//electricity");
//     } 
//     else if (file.fieldname === "buildingPhoto") {
//       cb(null, "uploads/building");
//     } 
//     else if (file.fieldname === "owner_document") {
//       cb(null, "uploads/ownerdetails");
//     } 
//     else {
//       cb(null, "uploads/others");
//     }
//   },

//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024 // 5 MB
//   },
//   fileFilter: (req, file, cb) => {

//     if (
//       file.mimetype === "application/pdf" ||
//       file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/png"
//     ) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only PDF / JPG / PNG allowed"));
//     }
//   }
// });

// export default upload;







// AUTO CREAYE FOLDER OR UPR M KHUD S FOLFDER BNAO TVI BO KAAM KRGA
import fs from "fs";
import path from "path";
import multer from "multer";

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    let uploadPath = "";

    if (file.fieldname === "registryPaper") {
      uploadPath = "uploads/documents/registry";
    }
    else if (file.fieldname === "electricityBill") {
      uploadPath = "uploads/documents/electricity";
    }
    else if (file.fieldname === "buildingPhoto") {
      uploadPath = "uploads/documents/building";
    }
    else if (file.fieldname === "owner_document") {
      uploadPath = "uploads/documents/owner";
    }

    ensureDir(uploadPath); // ✅ auto create folder
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

export default multer({ storage });
