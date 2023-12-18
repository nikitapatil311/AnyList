import styles from "../styles/GroceryCard.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/cartSlice";
import React from "react";

const GroceryCard = ({ grocery }) => {
  const [quantity, setQuantity] = useState(1);

  const [showNotification, setShowNotification] = useState(false); // State to manage the pop-up notification

  const dispatch = useDispatch();
  const handleClick = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (parsedQuantity > 0) {
      const { price } = grocery;
      dispatch(addProduct({ ...grocery, price, quantity: parsedQuantity }));
      setShowNotification(true); // Set the state to show the notification
      setTimeout(() => {
        setShowNotification(false); // Hide the notification after a certain time (optional)
      }, 3000);
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Link href={`/product/${grocery._id}`} passHref>
          <Image
            src={grocery.image}
            alt="grocery image"
            width={300}
            height={300}
            className={styles.imageCard}
          />
        </Link>
        <h4 className={styles.title}>{grocery.name}</h4>
        <span className={styles.price}>
          {grocery.price}
          {grocery.currency}
        </span>
        <p className={styles.desc}>{grocery.info}</p>
        <div className={styles.buttonsContainer}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
            aria-label="input number"
          />
          <button
            aria-label="add to cart button"
            className={styles.button}
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
        {showNotification && (
          <div className={styles.notification}>
            🎊{grocery.name}🎉 added to cart!🛍️
          </div>
        )}
      </div>
    </>
  );
};

export default GroceryCard;
