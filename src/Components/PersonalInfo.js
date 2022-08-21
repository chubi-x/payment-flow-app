import React from "react";
import states from "../data/states";
export default function PersonalInfo() {
  return (
    <div className="form-container h-full">
      <form className="form">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-inputs border border-purple"
          type="text"
          name="name"
        />

        <label className="form-label" htmlFor="email">
          Email <span className="text-red">*</span>
        </label>
        <p className="text-purple text-xs">
          The purchase recipt will be sent to this address
        </p>
        <input
          className="form-inputs border border-purple"
          type="email"
          required
          name="email"
        />

        <label className="form-label" htmlFor="address-1">
          Address 1
        </label>
        <input
          className="form-inputs border border-purple"
          type="text"
          name="address-1"
        />

        <label className="form-label" htmlFor="address-2">
          Address 2
        </label>
        <input
          className="form-inputs border border-purple"
          type="text"
          name="address-2"
        />

        <div className="location flex flex-col justify-between space-x-10 md:flex-row">
          <div className="local-government">
            <label className="form-label" htmlFor="local-government">
              Local Government
            </label>
            <input
              className="form-inputs border border-purple"
              type="text"
              name="local-government"
            />
          </div>

          <div className="state">
            <label className="form-label" htmlFor="state">
              State
            </label>
            <select
              name="state"
              id="state"
              className="border border-purple pl-2"
            >
              {states.map((state, index) => (
                <option key={index}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
