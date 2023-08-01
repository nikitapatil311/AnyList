// pages/api/getProductByBarcode.js

import dbConnect from "../../../db/connect"; // Replace with your MongoDB connection setup
import Product from "../../../models/Product"; // Replace with your Mongoose ProductModel

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { barcode } = req.query;

  try {
    await dbConnect(); // Connect to your MongoDB database

    const product = await Product.findOne({ barcode }); // Find the product with the given barcode

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    return res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching product details:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching product details." });
  }
}
