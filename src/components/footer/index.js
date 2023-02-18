import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-white bg-dark"
        // style={{ backgroundColor: "#21081a" }}
      >
        <div
          className="text-center p-3 py-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &#169; 2020 Copyright: <span className="text-info">PSR Bank</span>
        </div>
      </footer>
    </>
  );
}
