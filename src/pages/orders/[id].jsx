import styles from "../../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
  };
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
              <span className={styles.name}>{order.name}</span>
            </td>
            <td>
              <span className={styles.price}> {order.price}</span>
            </td>
            <td>
              <span className={styles.quantity}> {order.quantity}</span>
            </td>
            <td>
              <span className={styles.total}> {order.total}</span>
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

      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.row}></div>

        <div className={styles.row}>
          <div className={styles.statusClass}>
            <Image src="/assests/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon} />
            <Image
              className={styles.checkedIcon}
              src="/assests/checked.png"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>

        <div className={styles.right}></div>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal:</b>
            {order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0 EUR
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>
            {order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
