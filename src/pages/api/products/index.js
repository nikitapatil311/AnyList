// import dbConnect from "../../../../db/connect";
// import Product from "../../../../models/Product";

// export default async function handler(req, res) {
//   const {
//     method,
//     // cookies
//   } = req;
//   //const token = cookies.token;

//   await dbConnect();

//   if (method === "GET") {
//     try {
//       const products = await Product.find();
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   if (method === "POST") {
//     // if (!token || token !== process.env.TOKEN) {
//     //   return res.status(401).json("Not authenticated!");
//     // }
//     console.log("Request body:", req.body);

//     try {
//       // Make sure the "name" field is provided in the request body
//       if (!req.body.name) {
//         return res.status(400).json("Name field is required.");
//       }

//       const product = await Product.create(req.body);
//       res.status(201).json(product);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }

import dbConnect from "../../../../db/connect";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    // Handle HTTP GET request to fetch product by barcode
    const { barcode } = req.query;

    try {
      const product = await Product.findOne({ barcode });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json(product); // Return the matched product
    } catch (error) {
      console.error("Error fetching product details:", error);
      return res.status(500).json({ error: "Failed to fetch product details" });
    }
  } else if (method === "POST") {
    // Handle HTTP POST request to add a new product
    try {
      const { image, name, price, currency, info, quantity, barcode } =
        req.body;

      // Make sure the "name" field is provided in the request body
      if (!name) {
        return res.status(400).json("Name field is required.");
      }

      // Check if a product with the same barcode already exists
      const existingProduct = await Product.findOne({ barcode });
      if (existingProduct) {
        return res
          .status(409)
          .json({ error: "Product with this barcode already exists" });
      }

      // Create a new product instance
      const product = new Product({
        image,
        name,
        price,
        currency,
        info,
        quantity,
        barcode,
      });

      // Save the new product to the database
      await product.save();

      res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
      res.status(500).json({ error: "Error adding product" });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
