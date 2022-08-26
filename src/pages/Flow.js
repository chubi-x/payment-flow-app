// REACT
import React, { useContext, useState } from "react";
import { ActiveTabContext, FormContext } from "../Helpers/Context";

// COMPONENTS
import PersonalInfo from "../Components/PersonalInfo";
import Billing from "../Components/Billing";
import ConfirmPayment from "../Components/ConfirmPayment";

// UTILS
import CheckoutSteps from "../utils/CheckoutSteps";
import FlowButtons from "../utils/FlowButtons";

export default function Flow({ submit }) {
  // STATE
  const [personalInfo, setPersonalInfo] = useState(true);
  const [billingInfo, setBillingInfo] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);

  const [pay, setPay] = useState(false);

  const { formInfo, setFormInfo } = useContext(FormContext);

  // FUNCTIONS
  const nextTab = () => {
    if (personalInfo) {
      setPersonalInfo(false);
      setBillingInfo(true);
    } else if (billingInfo) {
      setConfirmPayment(true);
      setBillingInfo(false);
    } else {
      setConfirmPayment(true);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInfo((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }
  return (
    <ActiveTabContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        billingInfo,
        setBillingInfo,
        confirmPayment,
        setConfirmPayment,
        nextTab,
      }}
    >
      <FormContext.Provider value={{ formInfo, setFormInfo }}>
        <div className="flow-container container flex flex-col justify-center mx-auto w-2/3 h-full pt-10 md:w-1/2">
          <div className="header">
            <h1 className="text-2xl text-purple font-bold mb-4">
              Complete your Purchase
            </h1>
          </div>
          <CheckoutSteps />

          <form onSubmit={submit} id="checkout">
            {personalInfo && (
              <PersonalInfo update={handleChange} pay={setPay} />
            )}
            {billingInfo && <Billing update={handleChange} pay={setPay} />}
            {confirmPayment && <ConfirmPayment pay={setPay} />}
          </form>
          <FlowButtons pay={pay} next={nextTab} />
        </div>
      </FormContext.Provider>
    </ActiveTabContext.Provider>
  );
}
