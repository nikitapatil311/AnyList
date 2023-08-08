import React, { useRef, useEffect, useState } from "react";
import Quagga from "quagga";
import debounce from "lodash/debounce";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux"; // Assuming you have Redux set up
import { addProduct } from "../redux/cartSlice";

const BarcodeScanner = () => {
  const videoRef = useRef(null);
  const [scannedBarcode, setScannedBarcode] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current,
          constraints: {
            facingMode: "environment",
          },
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      function (err) {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        Quagga.start();
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  const handleBarcodeDetected = debounce((result) => {
    const barcodeData = result.codeResult.code;
    console.log("Barcode detected:", barcodeData);

    // Update the state with the scanned barcode data
    setScannedBarcode(barcodeData);

    // Fetch product details from the database based on the scanned barcode
    fetch(`/api/products?barcode=${barcodeData}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Product details:", data); // Add this line to see the response from the backend

        // Check if the data is not an error message and contains the product details
        if (!data.error && data._id) {
          // Set the product details to the state with the matched product
          setProductDetails(data);
        } else {
          // If no product is found for the scanned barcode, set productDetails to null
          setProductDetails(null);
        }
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, 1000);

  Quagga.onDetected(handleBarcodeDetected);

  const handleClick = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (parsedQuantity > 0 && productDetails) {
      const { price } = productDetails;
      dispatch(
        addProduct({ ...productDetails, price, quantity: parsedQuantity })
      );
      setShowNotification(true); // Set the state to show the notification
      setTimeout(() => {
        setShowNotification(false); // Hide the notification after a certain time (optional)
      }, 3000);
    } else {
      alert("Please enter a valid quantity or scan a valid barcode.");
    }
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%", height: "auto" }} />
      {scannedBarcode && productDetails && (
        <div>
          <h2>Scanned Barcode: {scannedBarcode}</h2>
          <div>
            <h3>Product Details:</h3>
            <Image src={productDetails.image} alt="" width={300} height={300} />
            <div key={productDetails._id}>
              <p>Name: {productDetails.name}</p>
              <p>Price: {productDetails.price}</p>
              <p>Info: {productDetails.info}</p>
              {/* Add more product details as needed */}
            </div>
          </div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />

          {/* Add to Cart button */}
          <button
            className="bg-orange-500 hover:bg-#FF9F45-600 text-white font-semibold px-4 py-2 rounded"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      )}
      {scannedBarcode && !productDetails && (
        <p>No product details found for this barcode.</p>
      )}
      <Link href="/" passHref>
        <button className="bg-orange-500 hover:bg-#FC4F4F-600 text-white font-semibold px-6 py-4 rounded">
          ⬅ Back
        </button>
      </Link>
    </div>
  );
};

export default BarcodeScanner;
