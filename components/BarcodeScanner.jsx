import React, { useEffect, useRef } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: video,
          constraints: {
            facingMode: "environment", // Use the back camera for mobile devices
          },
        },
        decoder: {
          readers: ["ean_reader"], // Support EAN barcodes, you can add more types here
        },
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      const code = data.codeResult.code;
      onScan(code); // Pass the scanned barcode to the parent component
    });

    return () => {
      Quagga.stop();
    };
  }, [onScan]);

  return <video ref={videoRef} style={{ width: "100%", height: "auto" }} />;
};

export default BarcodeScanner;
