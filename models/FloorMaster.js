import mongoose from 'mongoose';

const floorMasterSchema = new mongoose.Schema({
  category: { type: String, required: true },
  value: { type: String, required: true },
  label: { type: String, required: true }
}, { timestamps: true });

const FloorMaster = mongoose.model('FloorMaster', floorMasterSchema, 'floor_master'); // <-- collection name is floor_master

export default FloorMaster;
