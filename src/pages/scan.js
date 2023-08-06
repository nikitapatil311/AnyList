import React, { useState } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import debounce from "lodash.debounce";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ScanPage = () => {
  const [scannedBarcode, setScannedBarcode] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    const router = require("next/router"); // Dynamically import next/router here
    // Now you can use router.push or router.replace here
  }, []);
  if (!session) {
    router.replace("/login");
    return null;
  }

  // Function to handle barcode detection with debouncing
  const handleBarcodeDetected = debounce((result) => {
    // The barcode data is available in the `result` object
    const barcodeData = result.codeResult.code;
    console.log("Barcode detected:", barcodeData);

    // Update the state with the scanned barcode data
    setScannedBarcode(barcodeData);
  }, 1000); // Adjust the debounce delay as per your requirement

  return (
    <div>
      <h1>Scan Page</h1>
      <BarcodeScanner onDetected={handleBarcodeDetected} />

      {scannedBarcode && (
        <div>
          <p>Scanned Barcode: {scannedBarcode}</p>
          {/* You can now use the scannedBarcode state wherever you want to display the data */}
        </div>
      )}
    </div>
  );
};

export default ScanPage;
