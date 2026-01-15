import Circle from "../models/circle.js";

export const getAllCircles = async (req, res) => {
  try {
    const circles = await Circle.find().sort({ id: 1 });
    res.json(circles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
