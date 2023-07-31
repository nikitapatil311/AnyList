// import { useState } from "react";
// import styles from "../styles/Add.module.css";
// import axios from "axios";
// import { useRouter } from "next/router";

// const Add = ({ setClose }) => {
//
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState(null);
//   const [info, setInfo] = useState(null);
//   const [prices, setPrices] = useState([]);

//   const changePrice = (e, index) => {
//     const currentPrices = prices;
//     currentPrices[index] = e.target.value;
//     setPrices(currentPrices);
//   };

//   const handleCreate = async () => {
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "uploads");
//     try {
//       const uploadRes = await axios.post(
//         "https://api.cloudinary.com/v1_1/dsbyq4sj1/image/upload",
//         data
//       );

//       const { url } = uploadRes.data;
//       const newProduct = {
//         name,
//         info,
//         prices,

//         Image: url,
//       };

//       await axios.post("http://localhost:3000/api/products", newProduct);
//       setClose(true);

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <span onClick={() => setClose(true)} className={styles.close}>
//           X
//         </span>
//         <h1>Add a new Grocery</h1>
//         <div className={styles.item}>
//           <label className={styles.label}>Choose an image</label>
//           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         </div>
//         <div className={styles.item}>
//           <label className={styles.label}> Name</label>
//           <input
//             className={styles.input}
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className={styles.item}>
//           <label className={styles.label}>Info</label>
//           <textarea
//             rows={4}
//             type="text"
//             onChange={(e) => setInfo(e.target.value)}
//           />
//         </div>
//         <div className={styles.item}>
//           <label className={styles.label}>Prices</label>
//           <div className={styles.priceContainer}>
//             <input
//               className={`${styles.input} ${styles.inputSm}`}
//               type="number"
//               placeholder="Price"
//               name="price"
//               onChange={(e) => changePrice(e, 0)}
//             />
//           </div>
//           <div></div>
//         </div>
//         <button className={styles.addButton} onClick={handleCreate}>
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Add;

import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState("");

  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = [...price];
    currentPrices[index] = +e.target.value;
    setPrice(currentPrices);
  };

  const handleCreate = async () => {
    if (!file || !name || !info || price.length === 0) {
      console.log("Please fill out all the required fields.");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    data.append("api_key", "474874492862899");

    //data.append("signature", "_Kp4KZQuJkIG9C8iHAC_pYLWZtE");

    data.append("timestamp", Math.round(new Date().getTime() / 1000));

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/ddbosdu4g/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        image: url,
        name,
        price,
        info,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Grocery</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}> Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Info</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={(e) => changePrice(e, 0)}
            />
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
