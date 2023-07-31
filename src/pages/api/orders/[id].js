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
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import OrderDetail from "../../../../components/OrderDetail";

// const OrderPage = ({ orderId }) => {
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const res = await axios.get(`/api/orders/${orderId}`);
//         setOrder(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchOrder();
//   }, [orderId]);

//   return (
//     <div>
//       <h1>Order Details</h1>
//       {order ? <OrderDetail order={order} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   return {
//     props: {
//       orderId: id,
//     },
//   };
// }

// export default OrderPage;

// pages/orders/[id].js
import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../../styles/Order.module.css";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
  };
  return (
    <div className={styles.container}>
      {/* ... */}
      <div className={styles.right}>
        <div className={styles.wrapper}>
          {/* ... */}
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Payment Method:</b>
            {order.method === 0 ? "Cash" : "Online Payment"}
          </div>
          <button className={styles.button}>
            <Link href="/orders">Order History</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
