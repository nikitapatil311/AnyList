// pages/ScanPage.jsx

import React, { useState, useEffect } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import axios from "axios";
import Image from "next/legacy/image";

const ScanPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [scannedProduct, setScannedProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the backend or API
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleScan = (barcode) => {
    const product = productsData.find((p) => p.barcode === barcode);
    setScannedProduct(product);
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <BarcodeScanner onScan={handleScan} />

      {scannedProduct && (
        <div>
          <h2>{scannedProduct.name}</h2>
          <p>Price: {scannedProduct.price}</p>
          <Image src={scannedProduct.image} alt={scannedProduct.name} />
        </div>
      )}
    </div>
  );
};

export default ScanPage;
