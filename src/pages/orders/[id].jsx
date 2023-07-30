import styles from "../../../styles/Order.module.css";
import Image from "next/legacy/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>

              <th>Bill</th>
            </tr>

            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.name}>{order.name}</span>
              </td>
              <td>
                <span className={styles.address}>{order.price}</span>
              </td>
              <td>
                <span className={styles.total}>${order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
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
