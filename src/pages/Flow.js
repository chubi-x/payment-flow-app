import React from "react";
import CheckoutSteps from "../utils/CheckoutSteps";
export default function Flow() {
  return (
    <div className="flow-container container flex flex-col justify-center mx-auto w-2/3 pt-20 md:w-1/2">
      <h1 className="text-2xl text-purple font-bold mb-4">
        Complete your Purchase
      </h1>
      <CheckoutSteps />
    </div>
  );
}
