import React from "react";
export default function CheckoutStepBar({ active }) {
  return (
    <div
      className={`checkout-step-bar-item ${active ? "bg-yellow2" : ""} `}
    ></div>
  );
}
