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
        value={formInfo.cardName}
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
        value={formInfo.cardType}
        onChange={update}
        className="border border-purple"
      >
        <option value="">Visa</option>
        <option value="">Mastercard</option>
      </select>

      <div className="card-details">
        <div className="card-number">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
            <span className="text-red"> *</span>
          </label>
          <input
            name="cardNumber"
            type="number"
            autoComplete="disabled"
            value={formInfo.cardNumber}
            onChange={update}
            required
            className="form-inputs border border-purple"
          />
        </div>
        <div className="card-exp-date">
          <label htmlFor="cardExpDate" className="form-label">
            Expiry Date
            <span className="text-red"> *</span>
          </label>
          <input
            name="cardExpDate"
            type="text"
            autoComplete="disabled"
            value={formInfo.cardExpDate}
            onChange={update}
            required
            className="form-inputs border border-purple"
          />
        </div>
        <div className="card-cvv">
          <label htmlFor="cardCvv" className="form-label">
            CVV
            <span className="text-red"> *</span>
          </label>
          <input
            name="cardCvv"
            type="number"
            autoComplete="disabled"
            value={formInfo.cardCvv}
            onChange={update}
            required
            className="form-inputs border border-purple"
          />
        </div>
      </div>
    </div>
  );
}
