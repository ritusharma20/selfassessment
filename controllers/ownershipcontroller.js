import OwnershipType from "../models/ownershipType.js";

// 🔹 GET Ownership Types
export const getOwnershipTypes = async (req, res) => {
  try {
    const types = await OwnershipType.find().lean();

    // DB fields ko value/label format me convert karo
    const formatted = types.map(t => ({
      value: t.value,
      label: t.label
    }));


    res.json(formatted);       // frontend me value/label milega

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
