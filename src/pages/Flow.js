// REACT
import React, { useContext, useState } from "react";
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
  // STATE
  const [personalInfo, setPersonalInfo] = useState(true);
  const [billingInfo, setBillingInfo] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);

  const tabs = ["Personal Info", "Billing Info", "Confirm Payment"];
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

  const [pay, setPay] = useState(false);

  const { setCheckedOut } = useContext(CheckoutContext);

  // FUNCTIONS

  const nextTab = () => {
    if (personalInfo) {
      setPersonalInfo(false);
      setBillingInfo(true);
      setPay(false);
    } else if (billingInfo) {
      setConfirmPayment(true);
      setBillingInfo(false);
    } else {
      setConfirmPayment(true);
      setPay(false);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert(formInfo);
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
      <ActiveTabContext.Provider
        value={{
          personalInfo,
          setPersonalInfo,
          billingInfo,
          setBillingInfo,
          confirmPayment,
          setConfirmPayment,
          tabs,
          nextTab,
        }}
      >
        <div className="flow-container container flex flex-col justify-center mx-auto w-2/3 h-full pt-10 md:w-1/2">
          <div className="header">
            <h1 className="text-2xl text-purple font-bold mb-4">
              Complete your Purchase
            </h1>
          </div>
          <CheckoutSteps />

          <form onSubmit={handleSubmit} id="checkout">
            {personalInfo && (
              <PersonalInfo update={handleChange} pay={setPay} />
            )}
            {billingInfo && <Billing update={handleChange} pay={setPay} />}
            {confirmPayment && <ConfirmPayment pay={setPay} />}
          </form>
          <FlowButtons checkout={checkout} pay={pay} next={nextTab} />
        </div>
      </ActiveTabContext.Provider>
    </FormContext.Provider>
  );
}
