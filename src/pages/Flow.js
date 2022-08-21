// REACT
import React, { useCallback, useContext, useState } from "react";
import {
  ActiveTabContext,
  CheckoutContext,
  FormContext,
} from "../Helpers/Context";

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
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    localGovernment: "",
    state: "",
    cardName: "",
    cardType: "",
    cardNumber: "",
    cardExpDate: "",
    cardCvv: "",
  });

  const { setCheckedOut } = useContext(CheckoutContext);

  // FUNCTIONS

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formInfo);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormInfo((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function checkout() {
    setCheckedOut(true);
  }
  return (
    <FormContext.Provider value={{ formInfo, setFormInfo }}>
      <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
        <div className="flow-container container flex flex-col justify-center mx-auto w-2/3 h-full pt-10 md:w-1/2">
          <div className="header">
            <h1 className="text-2xl text-purple font-bold mb-4">
              Complete your Purchase
            </h1>
          </div>
          <CheckoutSteps />

          <form onSubmit={handleSubmit}>
            {activeTab[0].active && <PersonalInfo update={handleChange} />}
            {activeTab[1].active && <Billing update={handleChange} />}
            {activeTab[2].active && <ConfirmPayment />}
          </form>
          <FlowButtons checkout={checkout} />
        </div>
      </ActiveTabContext.Provider>
    </FormContext.Provider>
  );
}
