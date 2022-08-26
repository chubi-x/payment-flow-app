import React, { useContext, useEffect } from "react";
import { FormContext } from "../Helpers/Context";
export default function Billing({ update, pay }) {
  useEffect(() => {
    pay(false);
  }, [pay]);
  const { formInfo } = useContext(FormContext);
  return (
    <div className="form">
      <label htmlFor="cardName" className="form-label">
        Name on Card
        <span className="text-red"> *</span>
      </label>
      <input
        name="cardName"
        type="text"
        autoComplete="disabled"
        value={formInfo.billingInfo.cardName}
        onChange={update}
        required
        className="form-inputs border border-purple"
      />
      <label htmlFor="cardType" className="form-label">
        Card Type
        <span className="text-red"> *</span>
      </label>
      <select
        name="cardType"
        id="cardType"
        value={formInfo.billingInfo.cardType || "Choose card"}
        onChange={update}
        className="border border-purple"
      >
        <option value="Choose card" hidden>
          Choose card
        </option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
      </select>

      <div className="card-details mt-6 flex flex-col items-center md:flex-row md:space-x-5">
        <div className="card-number w-full md:w-3/5">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
            <span className="text-red"> *</span>
          </label>
          <input
            name="cardNumber"
            type="number"
            autoComplete="disabled"
            value={formInfo.billingInfo.cardNumber}
            onChange={update}
            required
            className="form-inputs border border-purple"
          />
        </div>
        <div className="extra-details flex items-center justify-around space-x-10 md:space-x-4 md:w-2/5">
          <div className="card-exp-date md:w-2/3">
            <label htmlFor="cardExpDate" className="form-label">
              Exp Date<span className="text-red">*</span>
            </label>
            <input
              name="cardExpDate"
              type="text"
              autoComplete="disabled"
              value={formInfo.billingInfo.cardExpDate}
              onChange={update}
              required
              className="form-inputs border border-purple"
            />
          </div>
          <div className="card-cvv  md:w-1/2">
            <label htmlFor="cardCvv" className="form-label">
              CVV
              <span className="text-red"> *</span>
            </label>
            <input
              name="cardCvv"
              type="text"
              autoComplete="disabled"
              value={formInfo.billingInfo.cardCvv}
              onChange={update}
              required
              className="form-inputs border border-purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

