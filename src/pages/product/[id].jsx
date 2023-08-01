import styles from "../../../styles/Product.module.css";
import Image from "next/legacy/image";
import { useState } from "react";
import axios from "axios";
import { addProduct } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Product = ({ grocery }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (parsedQuantity > 0) {
      const { price } = grocery;
      dispatch(addProduct({ ...grocery, price, quantity: parsedQuantity }));
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={grocery.image} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{grocery.name}</h1>
        <span className={styles.price}>
          {grocery.price} {grocery.currency}
        </span>
        <div className={styles.right}>{grocery.info}</div>
      </div>

      {/* add cart functionality to scanned button */}

      <div className={styles.add}>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          defaultValue={1}
          className={styles.quantity}
        />
        <button className={styles.button} onClick={handleClick}>
          Add to Cart
        </button>

        <Link href="/cart" passHref>
          <button className={styles.button}>View Cart</button>
        </Link>

        <Link href="/" passHref>
          <button className={styles.button}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      grocery: res.data,
    },
  };
};

export default Product;
