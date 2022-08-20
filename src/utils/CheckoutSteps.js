import React from "react";
import CheckoutStepItem from "./CheckoutStepItem";
import CheckoutStepBarItem from "./CheckoutStepBarItem";
export default function CheckoutFlowTab() {
  return (
    <div className="checkout-step-container pt-8">
      <div className="checkout-step-item-container container flex justify-between mx-auto ">
        <CheckoutStepItem value={"Personal Info"} active={true} />
        <CheckoutStepItem value={"Billing Info"} />
        <CheckoutStepItem value={"Confirm Payment"} />
      </div>
      <div className="checkout-step-bar pt-3 flex flex-row justify-between">
        <CheckoutStepBarItem active={true} />
        <CheckoutStepBarItem />
        <CheckoutStepBarItem />
      </div>
      <div className="checkout-step-bar-rule"></div>
    </div>
  );
}
