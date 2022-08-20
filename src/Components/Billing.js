import React from "react";
export default function Billing() {
  return (
    <div className="form-container">
      <form className="form">
        <label htmlFor="card-name" className="form-label">
          Name on Card
          <span className="text-red"> *</span>
        </label>
        <input
          name="card-name"
          type="text"
          autoComplete="disabled"
          className="form-inputs border border-purple"
        />
        <label htmlFor="card-type" className="form-label">
          Card Type
          <span className="text-red"> *</span>
        </label>
        <select
          name="card-type"
          id="card-type"
          className="border border-purple"
        >
          <option value="">Visa</option>
          <option value="">Mastercard</option>
        </select>

        <div className="card-details">
          <div className="card-number">
            <label htmlFor="card-number" className="form-label">
              Card Number
              <span className="text-red"> *</span>
            </label>
            <input
              name="card-number"
              type="text"
              autoComplete="disabled"
              className="form-inputs border border-purple"
            />
          </div>
          <div className="card-exp-date">
            <label htmlFor="card-exp-date" className="form-label">
              Expiry Date
              <span className="text-red"> *</span>
            </label>
            <input
              name="card-exp-date"
              type="text"
              autoComplete="disabled"
              className="form-inputs border border-purple"
            />
          </div>
          <div className="card-cvv">
            <label htmlFor="card-name" className="form-label">
              CVV
              <span className="text-red"> *</span>
            </label>
            <input
              name="card-cvv"
              type="text"
              autoComplete="disabled"
              className="form-inputs border border-purple"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
