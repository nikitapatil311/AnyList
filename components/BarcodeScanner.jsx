import React, { useEffect, useState } from "react";
import startBarcodeScanner from "../src/pages/scan";
import Quagga from "quagga";

const BarcodeScanner = () => {
  const [scannedProduct, setScannedProduct] = useState(null);

  useEffect(() => {
    startBarcodeScanner((product) => {
      setScannedProduct(product);
    });

    return () => {
      // Stop the barcode scanner when the component unmounts
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      {/* Add a div with id="barcode-scanner" */}
      <div id="barcode-scanner"></div>
      {scannedProduct ? (
        <div>
          <h2>Scanned Product:</h2>
          <p>Name: {scannedProduct.name}</p>
          <p>Price: ${scannedProduct.price.toFixed(2)}</p>
          {/* Add more product details as needed */}
          <button>Add to Cart</button>
          <h2>Cart:</h2>
          {/* Display cart items */}
        </div>
      ) : null}
    </div>
  );
};

export default BarcodeScanner;
