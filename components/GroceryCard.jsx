import styles from "../styles/GroceryCard.module.css";
import Image from "next/image";
import Link from "next/link";

const GroceryCard = ({ grocery }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${grocery._id}`} passHref>
        <Image src={grocery.image} alt="" width={400} height={500} />
      </Link>
      <h1 className={styles.title}>{grocery.name}</h1>
      <span className={styles.price}>
        {grocery.price} {grocery.currency}
      </span>
      <p className={styles.desc}>{grocery.desc}</p>
    </div>
  );
};

export default GroceryCard;
