import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");

  const handleClick = () => {
    createOrder({ customer, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CASH PAYMENT.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            placeholder="enter your name"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="enter ph.no"
            className={styles.input}
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
