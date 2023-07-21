import styles from "../../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/assests/brocoli.png"
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Brocolli</span>
            </td>
            <td>
              <span className={styles.price}> 2 EUR</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> 4.00 EUR</span>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/assests/brocoli.png"
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Brocolli</span>
            </td>
            <td>
              <span className={styles.price}> 2 EUR</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> 4.00 EUR</span>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/assests/brocoli.png"
                  height={100}
                  width={100}
                  alt=""
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Brocolli</span>
            </td>
            <td>
              <span className={styles.price}> 2 EUR</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> 4.00 EUR</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal:</b>2 EUR
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0 EUR
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>4 EUR
          </div>
          <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
