// pages/scan.js
import React, { useState } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import axios from "axios";

const ScanPage = () => {
  const dispatch = useDispatch();
  const [scannedCode, setScannedCode] = useState(null);

  const handleScan = async (code) => {
    setScannedCode(code);
    try {
      // Make an API call to fetch product data based on the scanned barcode
      const response = await axios.get(`/api/products/${code}`);

      if (response.status === 200) {
        const productData = response.data; // Assuming the response data contains product details
        dispatch(addProduct(productData));
      } else {
        console.log("Failed to fetch product data.");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <p>Scan the barcode of the products to purchase</p>
      {scannedCode ? (
        <p>Scanned barcode: {scannedCode}</p>
      ) : (
        <BarcodeScanner onScan={handleScan} />
      )}
    </div>
  );
};

export default ScanPage;
