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

  // function to convert variable name to string
  const varToString = (variable) => {
    return Object.keys(variable)[0];
  };
  // array to hold tab info
  const tabsInfo = [
    {
      bool: personalInfo,
      setter: setPersonalInfo,
      name: varToString({ personalInfo }),
    },
    {
      bool: billingInfo,
      setter: setBillingInfo,
      name: varToString({ billingInfo }),
    },
    {
      bool: confirmPayment,
      setter: setConfirmPayment,
      name: varToString({ confirmPayment }),
    },
  ];
  // function to set active tab
  const setActive = (tab, ...rest) => {
    tab(true);
    rest.forEach((item) => item.setter(false));
  };

  // checkout step elements
  const checkOutSteps = tabsInfo.map((item, index, arr) => (
    <CheckoutStep
      key={index}
      active={item.bool}
      value={item.name}
      toggle={() =>
        setActive(item.setter, ...arr.filter((el, i) => i !== index))
      }
    />
  ));
  return (
    <div className="checkout-step-container pt-8 mb-10">
      <div className="checkout-step-item-container container flex justify-between mx-auto ">
        {checkOutSteps}
      </div>
      <div className="checkout-step-bar pt-3 flex flex-row justify-between">
        {tabsInfo.map((item, index) => (
          <CheckoutStepBar key={index} active={item.bool} />
        ))}
      </div>
      <div className="checkout-step-bar-rule"></div>
    </div>
  );
}

