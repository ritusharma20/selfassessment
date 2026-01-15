// import Floor from "../models/floor.js";

// // ✅ ADD FLOOR
// export const addFloor = async (req, res) => {
//   try {
//     const floor = await Floor.create(req.body);
//     res.status(201).json(floor);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ GET FLOORS BY APPLICATION NO
// export const getFloorsByApplication = async (req, res) => {
//   try {
//     const floors = await Floor.find({
//       applicationNo: req.params.applicationNo
//     });

//     res.json(floors);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ DELETE FLOOR
// export const deleteFloor = async (req, res) => {
//   try {
//     await Floor.findByIdAndDelete(req.params.id);
//     res.json({ message: "Floor deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





// import Floor from "../models/FloorModel.js";

// // Controller to get all floors
// export const getAllFloors = async (req, res) => {
//   try {
//     const floors = await Floor.find();
//     res.json(floors);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

import Floor from "../models/floormodel.js";

// 🔹 Sare floors fetch karne ka function
export const getAllFloors = async (req, res) => {
    try {
        const floors = await Floor.find().sort({ order: 1 }); // order ke hisab se sort
        res.status(200).json(floors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


