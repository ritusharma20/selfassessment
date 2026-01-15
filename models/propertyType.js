import mongoose from "mongoose";

const propertyTypeSchema = new mongoose.Schema(
  {
    id: Number,
    propertyType: {
      type: String,
      alias: "property_type"   // DB field → code field
    }
  },
  {
    collection: "property_type"
  }
);

const PropertyType = mongoose.model("PropertyType", propertyTypeSchema);

export default PropertyType;
