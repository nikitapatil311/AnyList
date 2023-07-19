import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  info: { type: String, required: true },
  quantity: { type: Number },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
