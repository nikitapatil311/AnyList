// import styles from "../../styles/Cart.module.css";
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer,
// } from "@paypal/react-paypal-js";

// import axios from "axios";
// import { useRouter } from "next/router";
// import { reset } from "../../redux/cartSlice";
// import OrderDetail from "../../components/OrderDetail";
// import React from "react"; // Added useState import

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const [cash, setCash] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [scannedProducts, setScannedProducts] = useState([]);
//   const [productId, setProductId] = useState("");

//   const handleProductIdChange = (event) => {
//     setProductId(event.target.value);
//   };
//   const amount = cart.total;
//   const currency = "EUR";
//   const style = { layout: "vertical" };
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const createOrder = async (data) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/orders", data);
//       if (res.status === 201) {
//         dispatch(reset());
//         router.push(`/orders/${res.data._id}`);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleScan = async (productId) => {
//     try {
//       // Fetch product details based on the productId (implement this part)
//       const productDetails = await fetchProductDetails(productId);
//       setScannedProducts((prevScannedProducts) => [
//         ...prevScannedProducts,
//         productDetails,
//       ]);
//       setProductId(""); // Reset the productId input field after scanning
//     } catch (err) {
//       console.error("Error fetching product details:", err);
//     }
//   };

//   const fetchProductDetails = async (productId) => {
//     // Implement your product fetching logic here based on the productId
//     // Return the product details as an object
//     // For example:
//     return {
//       name: "Product A",
//       price: 10,
//       quantity: 2,
//       Image: "/path/to/image",
//     };
//   };

//   const handleCheckout = () => {
//     setOpen(true);
//   };

//   // Custom component to wrap the PayPalButtons and handle currency changes
//   const ButtonWrapper = ({ currency, showSpinner }) => {
//     // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//     // This is the main reason to wrap the PayPalButtons in a new component
//     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//     useEffect(() => {
//       dispatch({
//         type: "resetOptions",
//         value: {
//           ...options,
//           currency: currency,
//         },
//       });
//     }, [currency, showSpinner, options, dispatch]);
//     //currency, showSpinner
//     return (
//       <>
//         {showSpinner && isPending && <div className="spinner" />}
//         <PayPalButtons
//           style={style}
//           disabled={false}
//           forceReRender={[amount, currency, style]}
//           fundingSource={undefined}
//           createOrder={(data, actions) => {
//             return actions.order
//               .create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       currency_code: currency,
//                       value: amount,
//                     },
//                   },
//                 ],
//               })
//               .then((orderId) => {
//                 // Your code here after create the order
//                 return orderId;
//               });
//           }}
//           onApprove={function (data, actions) {
//             return actions.order.capture().then(function (details) {
//               const shipping = details.purchase_units[0].shipping;
//               createOrder({
//                 customer: shipping.name.full_name,

//                 total: cart.total,
//                 method: 1,
//               });
//             });
//           }}
//         />
//       </>
//     );
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.left}>
//           <table className={styles.table}>
//             <tbody>
//               <tr className={styles.trTitle}>
//                 <th>Product</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//               </tr>
//             </tbody>
//             <tbody>
//               {cart.products.map((product) => (
//                 <tr className={styles.tr} key={product._id}>
//                   <td>
//                     <div className={styles.imgContainer}>
//                       <Image
//                         src={product.Image}
//                         layout="fill"
//                         alt=""
//                         objectFit="cover"
//                       />
//                     </div>
//                   </td>
//                   <td>
//                     <span className={styles.name}>{product.name}</span>
//                   </td>
//                   <td>
//                     <span className={styles.price}> {product.price}</span>
//                   </td>
//                   <td>
//                     <span className={styles.quantity}> {product.quantity}</span>
//                   </td>
//                   <td>
//                     <span className={styles.total}>
//                       {" "}
//                       {product.price * product.quantity}
//                     </span>
//                   </td>
//                 </tr>
//               ))}

//               {scannedProducts.map((scannedProduct) => (
//                 <tr className={styles.tr} key={scannedProduct.productId}>
//                   <td>
//                     <div className={styles.imgContainer}>
//                       <Image
//                         src={scannedProduct.Image}
//                         layout="fill"
//                         alt=""
//                         objectFit="cover"
//                       />
//                     </div>
//                   </td>
//                   <td>
//                     <span className={styles.name}>{scannedProduct.name}</span>
//                   </td>
//                   <td>
//                     <span className={styles.price}>{scannedProduct.price}</span>
//                   </td>
//                   <td>
//                     <span className={styles.quantity}>
//                       {scannedProduct.quantity}
//                     </span>
//                   </td>
//                   <td>
//                     <span className={styles.total}>
//                       {scannedProduct.price * scannedProduct.quantity}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className={styles.right}>
//           <div className={styles.wrapper}>
//             <h2 className={styles.title}>CART TOTAL</h2>
//             <div className={styles.totalText}>
//               <b className={styles.totalTextTitle}>SubTotal:</b>
//               {cart.total}
//             </div>
//             <div className={styles.totalText}>
//               <b className={styles.totalTextTitle}>Discount:</b>0 EUR
//             </div>
//             <div className={styles.totalText}>
//               <b className={styles.totalTextTitle}>Total:</b>
//               {cart.total}
//             </div>
//             {open ? (
//               <div className={styles.paymentMethods}>
//                 <button
//                   className={styles.payButton}
//                   onClick={() => setCash(true)}
//                 >
//                   PAY CASH
//                 </button>
//                 <PayPalScriptProvider
//                   options={{
//                     "client-id":
//                       "AYINZcUmluM0JfS6Die9js1z5tfELQJ7nIRnruikMUJpbG_oBmttZWeS11a_uIppMOnrKb3eRiY1BcXn",
//                     components: "buttons",
//                     currency: "EUR",
//                     "disable-funding": "credit,card,p24",
//                   }}
//                 >
//                   <ButtonWrapper currency={currency} showSpinner={false} />
//                 </PayPalScriptProvider>
//               </div>
//             ) : (
//               <button onClick={() => setOpen(true)} className={styles.button}>
//                 CHECKOUT NOW
//               </button>
//             )}
//           </div>
//         </div>
//         {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
//       </div>
//       <div>
//         <button onClick={handleScan} className={styles.scanButton}>
//           SCAN
//         </button>
//       </div>
//     </>
//   );
// };

// export default Cart;
// components/Cart.js
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/legacy/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";

import { addProduct, reset } from "../../redux/cartSlice";
import OrderDetail from "../../components/OrderDetail";
import styles from "../../styles/Cart.module.css";
import Link from "next/link";

import { useSession, signIn } from "next-auth/react";

const Cart = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  const cart = useSelector((state) => state.cart);
  const [cash, setCash] = useState(false);
  const [open, setOpen] = useState(false);
  const [scannedProducts, setScannedProducts] = useState([]);
  const [productId, setProductId] = useState("");

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const amount = cart.total;
  const currency = "EUR";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    const baseURL = "https://any-list.vercel.app" || "http://localhost:3000";
    try {
      const response = await axios.post(`${baseURL}/api/orders`, data);
      if (response.status === 201) {
        dispatch(reset());
        router.push(`/orders/${response.data._id}`);
      }
    } catch (err) {
      console.log("err", err.message);
    }
  };

  const handleScan = async (productId) => {
    try {
      // Fetch product details based on the productId (implement this part)
      const productDetails = await fetchProductDetails(productId);
      setScannedProducts((prevScannedProducts) => [
        ...prevScannedProducts,
        productDetails,
      ]);
      setProductId(""); // Reset the productId input field after scanning
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  };

  const fetchProductDetails = async (productId) => {
    // Implement your product fetching logic here based on the productId
    // Return the product details as an object
    // For example:
    return {
      name: "Product A",
      price: 10,
      quantity: 2,
      Image: "/path/to/image",
    };
  };

  const handleDeleteProduct = (productId) => {
    // Filter out the selected product from the cart
    const updatedCart = cart.products.filter(
      (product) => product._id !== productId
    );

    // Dispatch an action to update the cart state with the new product list
    dispatch(reset());

    // Now add the products back to the cart using 'addProduct' action
    updatedCart.forEach((product) => {
      dispatch(addProduct(product));
    });
  };

  const handleCheckout = () => {
    setOpen(true);
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    return (
      <>
        {showSpinner && <div className={styles.spinner} />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <>
      {session ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.trTitle}>
                  <div>
                    {" "}
                    <th>Product</th>
                  </div>
                  <div>
                    <th>Name</th>
                  </div>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>

                  <th>Delete</th>
                </tr>
              </tbody>
              <tbody>
                {cart.products.map((prod) => (
                  <tr className={styles.tr} key={prod._id}>
                    <td>
                      <div className={styles.imgContainer}>
                        <Link href={`/product/${prod._id}`}>
                          <Image
                            src={prod.image}
                            layout="fill"
                            alt=""
                            objectFit="cover"
                          />
                        </Link>
                      </div>
                    </td>
                    <div>
                      <td>
                        <span className={styles.name}>{prod.name}</span>
                      </td>
                    </div>
                    <td>
                      <span className={styles.price}> {prod.price}</span>
                    </td>
                    <td>
                      <span className={styles.quantity}> {prod.quantity}</span>
                    </td>
                    <td>
                      <span className={styles.total}>
                        {" "}
                        {prod.price * prod.quantity}
                      </span>
                    </td>
                    {/* <td>
                      <button className={styles.button}>
                        {" "}
                        <Link
                          className={styles.btnlink}
                          href={`/product/${prod._id}`}
                        >
                          Edit
                        </Link>
                      </button>
                     
                    </td> */}
                    <td>
                      {/* Delete button, handleDeleteProduct function to be defined */}
                      <button
                        className={styles.button}
                        onClick={() => handleDeleteProduct(prod._id)}
                      >
                        <AiTwotoneDelete height={60} width={60} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>SubTotal:</b>
                {cart.total}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>0 EUR
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>
                {cart.total}
              </div>
              {open ? (
                <div className={styles.paymentMethods}>
                  <button
                    className={styles.payButton}
                    onClick={() => setCash(true)}
                  >
                    PAY CASH
                  </button>
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AYINZcUmluM0JfS6Die9js1z5tfELQJ7nIRnruikMUJpbG_oBmttZWeS11a_uIppMOnrKb3eRiY1BcXn",
                      components: "buttons",
                      currency: "EUR",
                      "disable-funding": "credit,card,p24",
                    }}
                  >
                    <ButtonWrapper currency={currency} showSpinner={false} />
                  </PayPalScriptProvider>
                </div>
              ) : (
                <button onClick={() => setOpen(true)} className={styles.button}>
                  CHECKOUT NOW
                </button>
              )}
            </div>
          </div>
          {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
        </div>
      ) : (
        <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto mt-8">
          <p className="text-xl font-semibold mb-2">
            Please sign in to continue shopping.
          </p>

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}

      <Link href="/" passHref>
        <button className={styles.homeButton}>Back to 🏠</button>
      </Link>
    </>
  );
};

export default Cart;
