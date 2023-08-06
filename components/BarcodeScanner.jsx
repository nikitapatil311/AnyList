import React, { useRef, useEffect, useState } from "react";
import Quagga from "quagga";
import debounce from "lodash/debounce";
import Image from "next/image";
import Link from "next/link";

const BarcodeScanner = () => {
  const videoRef = useRef(null);
  const [scannedBarcode, setScannedBarcode] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

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
        </div>
      )}
      {scannedBarcode && !productDetails && (
        <p>No product details found for this barcode.</p>
      )}
      <Link href="/" passHref>
        <button>🔙 </button>
      </Link>
    </div>
  );
};

export default BarcodeScanner;
