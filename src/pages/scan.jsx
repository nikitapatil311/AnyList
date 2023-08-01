// components/Scan.js

import Quagga from "quagga";
import BarcodeScanner from "../../components/BarcodeScanner";

const getProductDetailsByBarcode = async (barcode) => {
  // Replace this with your actual product database logic
  // or API call to fetch product details.
  // For demonstration purposes, we'll assume the product details are fetched from the MongoDB database.
  // You may need to update the logic according to your actual database setup.
  try {
    const response = await fetch(`/api/getProductByBarcode?barcode=${barcode}`);
    if (response.ok) {
      const data = await response.json();
      return data.product;
    } else {
      console.error("Error fetching product details:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};

const startBarcodeScanner = (onScanSuccess) => {
  if (typeof window === "undefined") {
    // Do nothing if running on the server-side
    return;
  }
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: "#barcode-scanner",
      },
      decoder: {
        readers: ["ean_reader"],
      },
    },
    (err) => {
      if (err) {
        console.error("Error initializing barcode scanner:", err);
        return;
      }
      Quagga.onDetected((result) => {
        const code = result.codeResult.code;
        getProductDetailsByBarcode(code).then((product) => {
          onScanSuccess(product);
        });
      });
      Quagga.start();
    }
  );
};

export default startBarcodeScanner;
