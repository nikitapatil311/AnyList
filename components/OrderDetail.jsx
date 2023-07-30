// import styles from "../styles/OrderDetail.module.css";
// import { useState } from "react";

// const OrderDetail = ({ total, createOrder }) => {
//   const [customer, setCustomer] = useState("");

//   const handleClick = () => {
//     createOrder({ customer, total, method: 0 });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <h1 className={styles.title}>CASH PAYMENT.</h1>
//         <div className={styles.item}>
//           <label className={styles.label}>Name</label>
//           <input
//             placeholder="enter your name"
//             type="text"
//             className={styles.input}
//             onChange={(e) => setCustomer(e.target.value)}
//           />
//         </div>
//         <div className={styles.item}>
//           <label className={styles.label}>Phone Number</label>
//           <input
//             type="text"
//             placeholder="enter ph.no"
//             className={styles.input}
//           />
//         </div>

//         <button className={styles.button} onClick={handleClick}>
//           Purchase
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderDetail;

import React from "react";
import Image from "next/image";

const OrderDetail = ({ order }) => {
  return (
    <div>
      <h2>Order ID: {order._id}</h2>
      {order.products.map((product) => (
        <div key={product._id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
            />
            <div>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ${product.price * product.quantity}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <h3>Total Amount: ${order.total.toFixed(2)}</h3>
    </div>
  );
};

export default OrderDetail;
