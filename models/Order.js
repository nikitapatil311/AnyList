// importing
import mongoose from "mongoose";

//the places db schema

const orderSchema = new mongoose.Schema({
  customer: { type: String },
  image: { type: String },
  price: { type: Number },
  name: { type: String },
  quantity: { type: Number },
  total: { type: Number },
  method: { type: Number },
  phoneNumber: { type: Number },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
