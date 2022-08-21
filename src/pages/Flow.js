import React, { useState } from "react";
import PersonalInfo from "../Components/PersonalInfo";
import Billing from "../Components/Billing";
import ConfirmPayment from "../Components/ConfirmPayment";
import CheckoutSteps from "../utils/CheckoutSteps";
import FlowButtons from "../utils/FlowButtons";
export default function Flow() {
  const [activeTab, setActiveTab] = useState([
    {
      name: "personalInfo",
      active: true,
    },
    {
      name: "billingInfo",
      active: false,
    },
    {
      name: "confirmPayment",
      active: false,
    },
  ]);

  function toggleActive(tab) {}
  return (
    <div className="flow-container container flex flex-col justify-center mx-auto w-2/3 h-full pt-10 md:w-1/2">
      <div className="header">
        <h1 className="text-2xl text-purple font-bold mb-4">
          Complete your Purchase
        </h1>
      </div>
      <CheckoutSteps activeTab={activeTab} toggleActive={setActiveTab} />

      <form id="checkout-form"></form>
      {activeTab[0].active && <PersonalInfo />}
      {activeTab[1].active && <Billing />}
      {activeTab[2].active && <ConfirmPayment />}

      <FlowButtons activeTab={activeTab} nextTab={setActiveTab} />
    </div>
  );
}
