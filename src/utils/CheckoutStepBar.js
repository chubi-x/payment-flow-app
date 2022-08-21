import React from "react";
export default function CheckoutStepBar(props) {
  return (
    <div
      className={`checkout-step-bar-item ${
        props.active ? "bg-yellow2 active-tab " : ""
      } `}
    ></div>
  );
}
