import dbConnect from "../../../../db/connect";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    // cookies
  } = req;
  //const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    // if (!token || token !== process.env.TOKEN) {
    //   return res.status(401).json("Not authenticated!");
    // }
    console.log("Request body:", req.body);

    try {
      // Make sure the "name" field is provided in the request body
      if (!req.body.name) {
        return res.status(400).json("Name field is required.");
      }

      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
