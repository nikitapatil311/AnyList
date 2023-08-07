import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [bill, setBill] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleClick = () => {
    createOrder({
      customer,
      phoneNumber,
      // name,
      price,
      // quantity,
      // bill,
      // total,

      // method: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CASH PAYMENT.</h1>

        <div className={styles.item}>
          <label className={styles.label}>Customer Name</label>
          <input
            placeholder="enter your name"
            type="text"
            className={styles.input}
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="enter ph.no"
            className={styles.input}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* <div className={styles.item}>
          <label className={styles.label}>Product Name</label>
          <input
            placeholder="enter product name"
            type="text"
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
        </div> */}

        <div className={styles.item}>
          <label className={styles.label}>Price</label>
          <input
            placeholder="Enter Price"
            type="text"
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* <div className={styles.item}>
          <label className={styles.label}>Quantity</label>
          <input
            placeholder="enter product name"
            type="text"
            className={styles.input}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div> */}

        {/* <div className={styles.item}>
          <label className={styles.label}>Bill</label>
          <input
            placeholder=" Bill..."
            type="text"
            className={styles.input}
            value={total}
            onChange={(e) => setBill(e.target.value)}
          />
        </div> */}

        <button className={styles.button} onClick={handleClick}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
