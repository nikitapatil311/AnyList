import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
import { useState } from "react";
import Link from "next/link";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1589723933517-a08e544063cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://img.freepik.com/free-photo/flat-lay-vegetables-fruits-arrangement_23-2149271170.jpg?w=1800&t=st=1691501934~exp=1691502534~hmac=e4b1e8e42c4a4a2127aa502ad89224a3aed145a9a9cd596dfaf397c33c6d3952",
    "https://img.freepik.com/free-photo/variety-baked-breads-frame-with-copy-space_23-2148361616.jpg?w=1800&t=st=1691502019~exp=1691502619~hmac=1552fb2b2724b24db63039c957df83fc505e1ef130731c8c984a1223f1f32c1f",
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
            alt="arrowleft icon "
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
                alt="arrow icon"
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
            alt="arrowright icon "
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
