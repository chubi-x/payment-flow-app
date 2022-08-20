import React from "react";
import tick from "../images/checkmark.svg";
export default function CompletedPayment() {
  return (
    <div className="completed-payment container flex flex-col justify-center items-center mx-auto mt-14">
      <div className="checkmark">
        <img src={tick} alt="completed payment tick" />
      </div>
      <div className="w-2/4 mt-6">
        <h1 className="text-4xl text-purple font-bold">Purchase Completed</h1>
      </div>
      <div className="w-2/4 mt-10">
        <p className="text-sm">
          Please check your email for details concerning this transaction
        </p>
      </div>
      <div className="w-2/4 mt-10">
        <a href="/" className="text-yellow2 underline">
          Return Home
        </a>
      </div>
    </div>
  );
}
