import Property from "../models/Property.js";
import Ward from "../models/ward.js";
import Circle from "../models/circle.js";
import PropertyType from "../models/propertyType.js";
import OwnershipType from "../models/ownershipType.js";
import Road from "../models/road.js";
import WaterConnection from "../models/waterConnection.js";
import WaterTaxType from "../models/waterTaxType.js";

/* =====================================================
   🔹 GET PROPERTY BY APPLICATION NO
===================================================== */
export const getPropertyByApplicationNo = async (req, res) => {
  try {
    const { applicationNo } = req.query;

    if (!applicationNo) {
      return res.json({ success: false, message: "applicationNo missing" });
    }

    const property = await Property.findOne({
      Application_No: applicationNo
    }).lean();

    if (!property) {
      return res.json({ success: false, message: "Property not found" });
    }

    /* ---------- CIRCLE NAME ---------- */
    const ward = await Ward.findOne({ ward_no: property.ward }).lean();
    let circleName = "";
    if (ward) {
      const circle = await Circle.findOne({ circle_id: ward.circle_id }).lean();
      circleName = circle ? circle.circleName : "";
    }
    property.circleName = circleName;

    /* ---------- PROPERTY TYPE NAME ---------- */
    if (property.propertyType) {
      const ptValue = Number(property.propertyType);
      const pt = await PropertyType.findOne({ value: ptValue }).lean();
      property.propertyTypeName = pt ? pt.label : "";
    } else {
      property.propertyTypeName = "";
    }

    /* ---------- OWNERSHIP ---------- */
    let ownershipLabel = "";
    if (property.ownershipType !== undefined && property.ownershipType !== null && property.ownershipType !== "") {
      const ownValue = Number(property.ownershipType);
      const ot = await OwnershipType.findOne({ value: ownValue }).lean();
      ownershipLabel = ot ? ot.label : "";
    }
    property.ownershipName = ownershipLabel;

    /* ---------- ROAD NAME + CATEGORY ---------- */
    let roadName = "";
    let roadCategory = "";
    if (property.road_name) { // ✅ Use road_name (contains the ID)
      const road = await Road.findById(property.road_name).lean();
      roadName = road ? road.road_name : "";
      roadCategory = road ? road.road_category || "" : "";
    }
    property.road_name = roadName;
    property.roadCategory = roadCategory;

    /* ---------- WATER CONNECTION ---------- */
    if (property.waterConnection) {
      const wcValue = Number(property.waterConnection);
      const wc = await WaterConnection.findOne({ value: wcValue }).lean();
      property.waterConnectionLabel = wc ? wc.label : "";
    } else {
      property.waterConnectionLabel = "";
    }

    /* ---------- WATER TAX TYPE ---------- */
    if (property.waterTaxType !== undefined && property.waterTaxType !== null && property.waterTaxType !== "" && !isNaN(Number(property.waterTaxType))) {
      const wtValue = Number(property.waterTaxType);
      const wt = await WaterTaxType.findOne({ value: wtValue }).lean();
      property.waterTaxTypeLabel = wt ? wt.label : "";
    } else {
      property.waterTaxTypeLabel = "";
    }

    return res.json({ success: true, data: property });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

/* =====================================================
   🔹 GET LATEST PROPERTY
===================================================== */
export const getLatestProperty = async (req, res) => {
  try {
    const property = await Property.findOne().sort({ createdAt: -1 }).lean();

    if (!property) {
      return res.json({ success: false, message: "No property found" });
    }

    /* ---------- CIRCLE ---------- */
    const ward = await Ward.findOne({ ward_no: property.ward }).lean();
    let circleName = "";
    if (ward) {
      const circle = await Circle.findOne({ circle_id: ward.circle_id }).lean();
      circleName = circle ? circle.circleName : "";
    }
    property.circleName = circleName;

    /* ---------- PROPERTY TYPE ---------- */
    if (property.propertyType) {
      const ptValue = Number(property.propertyType);
      const pt = await PropertyType.findOne({ value: ptValue }).lean();
      property.propertyTypeName = pt ? pt.label : "";
    } else {
      property.propertyTypeName = "";
    }

    /* ---------- OWNERSHIP ---------- */
    let ownershipLabel = "";
    if (property.ownershipType !== undefined && property.ownershipType !== null && property.ownershipType !== "") {
      const ownValue = Number(property.ownershipType);
      const ot = await OwnershipType.findOne({ value: ownValue }).lean();
      ownershipLabel = ot ? ot.label : "";
    }
    property.ownershipName = ownershipLabel;

    /* ---------- ROAD ---------- */
    let roadName = "";
    let roadCategory = "";
    if (property.road_name) { // ✅ corrected here
      const road = await Road.findById(property.road_name).lean();
      roadName = road ? road.road_name : "";
      roadCategory = road ? road.road_category || "" : "";
    }
    property.road_name = roadName;
    property.roadCategory = roadCategory;

    /* ---------- WATER CONNECTION ---------- */
    if (property.waterConnection) {
      const wcValue = Number(property.waterConnection);
      const wc = await WaterConnection.findOne({ value: wcValue }).lean();
      property.waterConnectionLabel = wc ? wc.label : "";
    } else {
      property.waterConnectionLabel = "";
    }

    /* ---------- WATER TAX TYPE ---------- */
    if (property.waterTaxType !== undefined && property.waterTaxType !== null && property.waterTaxType !== "" && !isNaN(Number(property.waterTaxType))) {
      const wtValue = Number(property.waterTaxType);
      const wt = await WaterTaxType.findOne({ value: wtValue }).lean();
      property.waterTaxTypeLabel = wt ? wt.label : "";
    } else {
      property.waterTaxTypeLabel = "";
    }

    return res.json({ success: true, data: property });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};
