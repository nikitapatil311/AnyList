import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String },
    info: { type: String, required: true },
    quantity: { type: Number },
    barcode: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
