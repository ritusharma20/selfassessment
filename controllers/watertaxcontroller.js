// controllers/waterTaxController.js
import WaterTax from "../models/waterTaxType.js";

export const getWaterTaxByApplicationNo = async (req, res) => {
  try {
    const { applicationNo } = req.params;

    const tax = await WaterTax.findOne({ Application_No: applicationNo });

    if (!tax) {
      return res.json({ success: false, message: "Water tax not found" });
    }

    res.json({ success: true, data: tax });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
