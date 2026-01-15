import express from "express";
import upload from "../middlewares/upload.js";
import { uploadProperty } from "../controllers/documentUpload.js";

const router = express.Router();

router.post(
  "/",

  // 🔴 MULTER ERROR HANDLE YAHAN
  (req, res, next) => {
    upload.fields([
      { name: "registryPaper", maxCount: 1 },
      { name: "electricityBill", maxCount: 1 },
      { name: "buildingPhoto", maxCount: 1 }
    ])(req, res, (err) => {
      if (err) {
        console.error("MULTER ERROR 👉", err.message);
        return res.status(413).json({
          success: false,
          message: err.message
        });
      }
      next();
    });
  },

  uploadProperty
);

export default router;
//  import express from "express";
// import upload from "../middlewares/upload.js";
// import { uploadProperty } from "../controllers/documentUpload.js";

// const router = express.Router();

// router.post(
//   "/",
//   upload.fields([
//     { name: "registryPaper", maxCount: 1 },
//     { name: "electricityBill", maxCount: 1 },
//     { name: "buildingPhoto", maxCount: 1 }
//   ]),
//   uploadProperty
// );

// export default router;
