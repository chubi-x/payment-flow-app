import React from "react";
export default function CheckoutStepItem(props) {
  return (
    <div className="checkout-step-item cursor-pointer">
      <h2
        className={`${
          props.active ? "text-yellow2" : ""
        } text-base text-center`}
      >
        {props.value}
      </h2>
    </div>
  );
}
