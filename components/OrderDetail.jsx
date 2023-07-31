import React, { useState } from "react";
import { createOrder } from "../src/pages/cart"; // Import your API function for creating orders
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total }) => {
  const [customer, setCustomer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null); // Add state for handling errors

  const handleClick = async () => {
    try {
      // Make the API request to create the order
      await createOrder({ customer, total, phoneNumber, method: 0 });
      // Reset form and error state after successful order creation
      setCustomer("");
      setPhoneNumber("");
      setError(null);
    } catch (error) {
      setError("Failed to create the order. Please try again later."); // Set the error message based on the caught error
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CASH PAYMENT.</h1>
        {error && <div className={styles.error}>{error}</div>}{" "}
        {/* Display error message if there is an error */}
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
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
        <button className={styles.button} onClick={handleClick}>
          Purchase
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
