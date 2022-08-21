import React from "react";
import CheckoutStep from "./CheckoutStep";
import CheckoutStepBar from "./CheckoutStepBar";
export default function CheckoutSteps({ activeTab, toggleActive }) {
  return (
    <div className="checkout-step-container pt-8 mb-10">
      <div className="checkout-step-item-container container flex justify-between mx-auto ">
        {activeTab.map((tab, index) => (
          <CheckoutStep
            key={index}
            active={tab.active}
            value={tab.name}
            toggle={toggleActive}
          />
        ))}
      </div>
      <div className="checkout-step-bar pt-3 flex flex-row justify-between">
        {activeTab.map((tab, index) => (
          <CheckoutStepBar key={index} active={tab.active} />
        ))}
      </div>
      <div className="checkout-step-bar-rule"></div>
    </div>
  );
}
