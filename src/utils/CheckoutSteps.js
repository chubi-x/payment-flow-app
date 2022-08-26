import React, { useContext } from "react";
import { ActiveTabContext } from "../Helpers/Context";
import CheckoutStep from "./CheckoutStep";
import CheckoutStepBar from "./CheckoutStepBar";
export default function CheckoutSteps() {
  const {
    personalInfo,
    setPersonalInfo,
    billingInfo,
    setBillingInfo,
    confirmPayment,
    setConfirmPayment,
  } = useContext(ActiveTabContext);

  const setActive = (tab1, tab2, tab3) => {
    tab1(true);
    tab2(false);
    tab3(false);
  };
  return (
    <div className="checkout-step-container pt-8 mb-10">
      <div className="checkout-step-item-container container flex justify-between mx-auto ">
        <CheckoutStep
          active={personalInfo}
          toggle={() =>
            setActive(setPersonalInfo, setBillingInfo, setConfirmPayment)
          }
          value={"Personal Info"}
        />
        <CheckoutStep
          active={billingInfo}
          toggle={() =>
            setActive(setBillingInfo, setPersonalInfo, setConfirmPayment)
          }
          value={"Billing Info"}
        />
        <CheckoutStep
          active={confirmPayment}
          toggle={() =>
            setActive(setConfirmPayment, setBillingInfo, setPersonalInfo)
          }
          value={"confirmPayment"}
        />
      </div>
      <div className="checkout-step-bar pt-3 flex flex-row justify-between">
        <CheckoutStepBar active={personalInfo} />
        <CheckoutStepBar active={billingInfo} />
        <CheckoutStepBar active={confirmPayment} />
      </div>
      <div className="checkout-step-bar-rule"></div>
    </div>
  );
}

