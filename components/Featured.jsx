import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/assests/featured.png",
    "/assests/featured2.png",
    "/assests/featured3.png",
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
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/assests/arrowl.png"
          alt=" "
          height={20}
          width={20}
          // layout="fill"
          // objectFit="contain"
        />
      </div>
      {/* <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/assests/arrowr.png"
          alt=" "
          height={20}
          width={20}
          // layout="fill"
          // objectFit="contain"
        />
      </div> */}
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              priority
              src={img}
              alt=""
              height={500}
              width={800}
              // layout="fill" objectFit="cover"
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
          src="/assests/arrowr.png"
          alt=" "
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
