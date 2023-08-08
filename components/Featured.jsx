import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
import { useState } from "react";
import Link from "next/link";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    // "/assests/grocery10.png",
    // "https://images.unsplash.com/photo-1593759608329-a8247d4f5e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    //"https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=1800&t=st=1691497298~exp=1691497898~hmac=63f61d34822643da9bfc347dd45df42526675cf8ea35bbea063ad2016cf2b190",
    // "/assests/grocery1.1.png",
    "https://img.freepik.com/free-photo/full-paper-bag-seasonal-vegetable_329181-19423.jpg?size=626&ext=jpg&ga=GA1.2.1730053495.1690395381&semt=ais",
    "https://images.unsplash.com/photo-1589723933517-a08e544063cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    // "/assests/grocery6.1.png",
    "https://img.freepik.com/premium-photo/food-donations-food-delivery-box-oil-canned-food-tomatoes-pasta-package-granulated-sugar-bread-egg_512097-106.jpg?size=626&ext=jpg&ga=GA1.2.1730053495.1690395381&semt=ais",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => handleArrow("l")}
        >
          <Image
            priority
            src="/assests/arrowl.png"
            alt=" "
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
              <Image
                src={img}
                alt=""
                priority
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => handleArrow("r")}
        >
          <Image
            priority
            src="/assests/arrowr.png"
            alt=" "
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
