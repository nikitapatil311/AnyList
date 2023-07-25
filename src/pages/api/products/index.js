import dbConnect from "../../../../db/connect";
import Product from "../../../../db/models/Product";

// import Cors from "cors";
// import initMiddleware from "../../../../lib/init-middleware";

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can pass options here, but for simplicity, we'll allow all origins
//   Cors({ origin: true, methods: ["GET", "POST"] })
// );

// export default async function handler(req, res) {
//   const { method } = req;

//   // Enable CORS for all requests
//   await cors(req, res);

export default async function handler(req, res) {
  const { method, cookies } = req;
  const token = cookies.token;

  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
//}
