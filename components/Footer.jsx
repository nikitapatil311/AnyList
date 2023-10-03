import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  const quantity = useSelector((state) => state.cart.products.length);
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
        <Link href="/scan" passHref>
          <Image
            priority
            src="/assests/scanner.png"
            alt=""
            width={38}
            height={38}
          />
        </Link>
      </div>

      <div className={styles.item}>
        <Link href="/cart" passHref>
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
        </Link>
      </div>

      <nav className="flex items-center justify-between bg-gray-800 p-4">
        <Link href="/login" passHref>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  height={40}
                  width={40}
                  className="rounded-full"
                />

                <p className="text-white font-semibold">
                  <br /> {session.user.name}
                </p>
              </div>
            ) : (
              <BiSolidUserCircle
                className={styles.profile}
                height={60}
                width={60}
              />
            )}
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
