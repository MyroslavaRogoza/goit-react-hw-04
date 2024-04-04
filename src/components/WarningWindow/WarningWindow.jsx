import { Toaster } from "react-hot-toast";
import React from "react";

const WarningWindow = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={10}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        error: {
          duration: 2000,
          style: {
            background: "#1355bf",
            color: "#fff",
            fontSize: "12px",
          },
        },
      }}
    />
  );
};

export default WarningWindow;
