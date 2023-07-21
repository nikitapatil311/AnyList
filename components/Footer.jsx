import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image priority src="/assests/home.png" alt="" width={30} height={30} />
      </div>
      <div className={styles.item}>
        {" "}
        <Image
          priority
          src="/assests/scanner.png"
          alt=""
          width={30}
          height={30}
        />
      </div>

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
