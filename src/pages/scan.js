import React, { useState } from "react";
import BarcodeScanner from "../../components/BarcodeScanner";
import debounce from "lodash.debounce";

const ScanPage = () => {
  const [scannedBarcode, setScannedBarcode] = useState(null);

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
