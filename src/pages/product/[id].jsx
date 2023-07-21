import styles from "../../../styles/Product.module.css";
import Image from "next/image";
// import { useDispatch } from "react-redux"; use for scanner
// import { useState } from "react";

const Product = () => {
  const grocery = {
    id: 1,
    img: "/assests/brocoli.png",
    name: "Brocolli",
    price: 2.99,
    currency: "EUR",
    description: "/ kg",
  };
  //   const [quantity, setQuantity] = useState(1);

  //   const handleClick = () => {
  //     dispatch(addProduct({ ...pizza, extras, price, quantity }));
  //   };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={grocery.img}
            width={600}
            height={600}
            // layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{grocery.name}</h1>
        <span className={styles.price}>
          {grocery.price} {grocery.currency} {grocery.description}
        </span>
      </div>

      {/* add cart functionality to scanned button */}

      {/* <div className={styles.add}>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          defaultValue={1}
          className={styles.quantity}
        />
        <button className={styles.button} onClick={handleClick}>
          Add to Cart
        </button>
      </div> */}
    </div>
  );
};

export default Product;
