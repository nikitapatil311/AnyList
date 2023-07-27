// pages/scan.js
import React, { useState } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import axios from "axios";
import Image from "next/image";

const ScanPage = () => {
  const dispatch = useDispatch();
  const [scannedCode, setScannedCode] = useState(null);
  const [scannedProducts, setScannedProducts] = useState([]);

  const handleScan = async (code) => {
    setScannedCode(code);
    try {
      // Make an API call to fetch product data based on the scanned barcode
      const response = await axios.get(`/api/products/${code}`);

      if (response.status === 200) {
        const productData = response.data; // Assuming the response data contains product details
        setScannedProducts((prevScannedProducts) => [
          ...prevScannedProducts,
          productData,
        ]);
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

      {/* Display scanned products */}
      <div>
        <h2>Scanned Products</h2>
        {scannedProducts.map((product) => (
          <div key={product._id}>
            <Image src={product.Image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: {product.price * product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScanPage;
