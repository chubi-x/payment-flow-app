import React, { useContext, useEffect } from "react";
import { FormContext } from "../Helpers/Context";
export default function Billing({ update, pay }) {
  useEffect(() => {
    pay(false);
  }, [pay]);

  const { formInfo, setFormInfo } = useContext(FormContext);

  function onlyNumber(event) {
    if (isNaN(event.key)) {
      event.preventDefault();
    }
  }
  function formatCC(value, event) {
    if (value.length < 19) {
      setFormInfo((prevForm) => {
        return {
          ...prevForm,
          billingInfo: {
            ...prevForm["billingInfo"],
            cardNumber: value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 "),
          },
        };
      });
    } else event.preventDefault();
  }
  function formatExp(value, event) {
    if (value.length < 7) {
      setFormInfo((prevForm) => {
        return {
          ...prevForm,
          billingInfo: {
            ...prevForm["billingInfo"],
            cardExpDate: value.replace(/\W/gi, "").replace(/(.{2})/g, "$1 / "),
          },
        };
      });
    } else event.preventDefault();
  }
  function formatCvv(value, event) {
    if (value.length < 3) {
      setFormInfo((prevForm) => {
        return {
          ...prevForm,
          billingInfo: {
            ...prevForm["billingInfo"],
            cardCvv: value,
          },
        };
      });
    } else event.preventDefault();
  }
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
            type="text"
            maxLength="19"
            onKeyPress={(event) => {
              formatCC(formInfo.billingInfo.cardNumber, event);
              onlyNumber(event);
            }}
            autoComplete="disabled"
            value={formInfo.billingInfo.cardNumber}
            placeholder="0000 0000 0000 0000"
            onChange={update}
            required
            className="form-inputs border border-purple tracking-widest lg:pl-6 pl-12"
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
              placeholder="MM / YY"
              onKeyPress={(e) => {
                onlyNumber(e);
                formatExp(formInfo.billingInfo.cardExpDate, e);
              }}
              required
              className="form-inputs border border-purple pl-8 tracking-widest"
            />
          </div>
          <div className="card-cvv md:w-1/3">
            <label htmlFor="cardCvv" className="form-label">
              CVV
              <span className="text-red"> *</span>
            </label>
            <input
              name="cardCvv"
              type="password"
              autoComplete="disabled"
              value={formInfo.billingInfo.cardCvv}
              onChange={update}
              required
              onKeyPress={(e) => {
                onlyNumber(e);
                formatCvv(formInfo.billingInfo.cardCvv, e);
              }}
              className="form-inputs border border-purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

