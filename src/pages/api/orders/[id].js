// import dbConnect from "../../../../db/connect";
// import Order from "../../../../models/Order";

// const handler = async (req, res) => {
//   const {
//     method,
//     query: { id },
//   } = req;

//   await dbConnect();

//   if (method === "GET") {
//     try {
//       const order = await Order.findById(id);
//       res.status(200).json(order);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   if (method === "PUT") {
//     try {
//       const order = await Order.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });
//       res.status(200).json(order);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
//   if (method === "DELETE") {
//   }
// };

// export default handler;
import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetail from "../../components/OrderDetail";

const OrderPage = ({ orderId }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`/api/orders/${orderId}`);
        setOrder(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrder();
  }, [orderId]);

  return (
    <div>
      <h1>Order Details</h1>
      {order ? <OrderDetail order={order} /> : <p>Loading...</p>}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      orderId: id,
    },
  };
}

export default OrderPage;
