import styles from "../styles/GroceryCard.module.css";
import Image from "next/image";

const GroceryCard = () => {
  return (
    <div className="styles.container">
      <Image src="/assests/brocoli.png" alt="" width={400} height={500} />
      <h1 className={styles.title}>Brocolli</h1>
      <span className={styles.price}>2.3 EUR/ 1kg</span>
    </div>
  );
};

export default GroceryCard;
