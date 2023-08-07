import styles from "../../../styles/Order.module.css";
import Image from "next/legacy/image";
import axios from "axios";
import Link from "next/link";

const Order = ({ order }) => {
  const method = order.method;

  const statusClass = (index) => {
    if (index - method < 1) return styles.done;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>customer Name</th>
              {/* <th>Product name</th> */}
              <th>phone number</th>
              <th>Price</th>

              {/* <th>quantity</th> */}

              {/* <th>Bill</th> */}

              {/* <th>method</th> */}
            </tr>

            <tr className={styles.tr}>
              {/* <td>
                <Image
                  src={order.image}
                  width={30}
                  height={30}
                  alt=""
                  className={styles.id}
                >
                  {order.image}
                </Image>
              </td> */}
              <td>
                <span className={styles.customer}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.phoneNumber}>{order.phoneNumber}</span>
              </td>
              <td>
                {/* <td>
                <span className={styles.name}>{order.name}</span>
              </td> */}

                <td>
                  <span className={styles.price}>{order.price}</span>
                </td>
                {/* <td>
                <span className={styles.quantity}>{order.quantity}</span>
              </td> */}

                <span className={styles.total}>{order.total}</span>
              </td>

              {/* <td>
                <span className={styles.method}>{order.method}</span>
              </td> */}
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/assests/paid.png" width={30} height={30} alt="" />
            <div>
              <span>Cash Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/assests/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.right}>
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
              <Link href="/" passHref>
                <button className={styles.button}>PAID </button>

                {/* <button className={styles.button}>Shop more 🛒</button> */}
              </Link>
              <p className={styles.purchase1}>
                Thank you for purchasing from us!🤍 As a token of our
                appreciation, here is 20% off your next order 🤑. See you again
                soon!👋{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const baseURL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const response = await axios.get(`${baseURL}/api/orders/${params.id}`);
  return {
    props: { order: response.data },
  };
};

export default Order;
