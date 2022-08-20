import React from "react";
import CheckoutStep from "./CheckoutStep";
import CheckoutStepBar from "./CheckoutStepBar";
export default function CheckoutSteps() {
  return (
    <div className="checkout-step-container pt-8 mb-10">
      <div className="checkout-step-item-container container flex justify-between mx-auto ">
        <CheckoutStep value={"Personal Info"} active={true} />
        <CheckoutStep value={"Billing Info"} />
        <CheckoutStep value={"Confirm Payment"} />
      </div>
      <div className="checkout-step-bar pt-3 flex flex-row justify-between">
        <CheckoutStepBar active={true} />
        <CheckoutStepBar />
        <CheckoutStepBar />
      </div>
      <div className="checkout-step-bar-rule"></div>
    </div>
  );
}
