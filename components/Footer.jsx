import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Home</div>
      <div className={styles.item}>Scan</div>
      <div className={styles.item}>Cart</div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            priority
            src="/assests/cart.png"
            alt=""
            width={30}
            height={30}
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
