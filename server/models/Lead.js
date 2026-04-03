import { Schema, model } from "mongoose";

const leadSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    enum: ["Amazon", "Flipkart", "Shopify", "WordPress"],
    required: true,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    enum: ["New", "Contacted", "Converted", "Rejacected"],
    default: "New",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("Lead", leadSchema);