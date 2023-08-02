import styles from "../styles/GroceryCard.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/cartSlice";

const GroceryCard = ({ grocery }) => {
  const [quantity, setQuantity] = useState(1);

  const [showNotification, setShowNotification] = useState(false); // State to manage the pop-up notification

  const dispatch = useDispatch();

  // Step 2: Implement Handlers
  // const handleIncrement = () => {
  //   setNumber(number + 1);
  // };

  // const handleDecrement = () => {
  //   setNumber(number - 1);
  // };
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
            alt=""
            width={300}
            height={300}
            className={styles.imageCard}
          />
        </Link>
        <h1 className={styles.title}>{grocery.name}</h1>
        <span className={styles.price}>
          {grocery.price} {grocery.currency}
        </span>
        <p className={styles.desc}>{grocery.info}</p>
        <div className={styles.buttonsContainer}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          {/* <div>
            <button onClick={handleDecrement}>-</button>
            <span>{number}</span>
            <button onClick={handleIncrement}>+</button>
          </div> */}
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
        {/* <div>
          <Link href="/cart" passHref>
            <button className={styles.button}>View Cart</button>
          </Link>
        </div> */}
        {/* Conditional rendering for the pop-up notification */}
        {showNotification && (
          <div
            //className="absolute top-0 right-0 mt-12 mr-2 p-4 bg-white border border-gray-300 shadow-lg rounded"
            className={styles.notification}
          >
            🎊{grocery.name}🎉 added to cart!🛍️
          </div>
        )}
      </div>
    </>
  );
};

export default GroceryCard;
