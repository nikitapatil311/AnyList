import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href="/" passHref>
          <Image
            priority
            src="/assests/home.png"
            alt=""
            width={30}
            height={30}
          />
        </Link>
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

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              priority
              src="/assests/cart.png"
              alt=""
              width={30}
              height={30}
            />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
