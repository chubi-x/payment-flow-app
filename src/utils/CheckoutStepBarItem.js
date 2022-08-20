import React from "react";
export default function CheckoutStepBarItem(props) {
  return (
    <div
      className={`checkout-step-bar-item ${props.active ? "bg-yellow2" : ""} `}
    ></div>
  );
}
