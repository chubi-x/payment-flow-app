// REACT
import React, { useContext, useState } from "react";
import { ActiveTabContext, CheckoutContext } from "../Helpers/Context";

// COMPONENTS
import PersonalInfo from "../Components/PersonalInfo";
import Billing from "../Components/Billing";
import ConfirmPayment from "../Components/ConfirmPayment";

// UTILS
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

  const { setCheckedOut } = useContext(CheckoutContext);

  // function toggleActive(tab) {}
  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="flow-container container flex flex-col justify-center mx-auto w-2/3 h-full pt-10 md:w-1/2">
        <div className="header">
          <h1 className="text-2xl text-purple font-bold mb-4">
            Complete your Purchase
          </h1>
        </div>
        <CheckoutSteps />

        <form id="checkout-form"></form>
        {activeTab[0].active && <PersonalInfo />}
        {activeTab[1].active && <Billing />}
        {activeTab[2].active && <ConfirmPayment />}

        <FlowButtons />
      </div>
    </ActiveTabContext.Provider>
  );
}
