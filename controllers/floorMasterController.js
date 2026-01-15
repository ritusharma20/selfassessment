// import FloorMaster from '../models/FloorMaster.js';

// // Get all options
// export const getAllOptions = async (req, res) => {
//   try {
//     const options = await FloorMaster.find({});
//     res.status(200).json(options);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get options by category
// export const getOptionsByCategory = async (req, res) => {
//   const { category } = req.params;
//   try {
//     const options = await FloorMaster.find({ category });
//     res.status(200).json(options);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Insert multiple options
// export const insertManyOptions = async (req, res) => {
//   const options = req.body;
//   try {
//     const inserted = await FloorMaster.insertMany(options);
//     res.status(201).json(inserted);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };






import FloorMaster from '../models/FloorMaster.js';

// Get all options grouped by category
export const getGroupedOptions = async (req, res) => {
  try {
    const options = await FloorMaster.find({});

    // Group by category
    const grouped = options.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push({ value: item.value, label: item.label });
      return acc;
    }, {});

    res.status(200).json(grouped);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

