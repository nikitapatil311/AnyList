// importing
import mongoose, { Schema } from "mongoose";

//the places db schema

const orderSchema = new Schema({
  image: { type: String, required: true },
  price: { type: Number, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  total: { type: Number, required: true },
  method: { type: Number, required: true },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
