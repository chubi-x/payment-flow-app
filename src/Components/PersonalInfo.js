import React from "react";
import states from "../data/states";
export default function PersonalInfo() {
  return (
    <div className="form-container h-full mt-10">
      <form className="form">
        <label className="form-label" htmlFor="Name">
          Name
        </label>
        <input className="form-inputs border border-purple" type="text" />

        <label className="form-label" htmlFor="Email">
          Email <span className="text-red">*</span>
        </label>
        <p className="text-purple text-xs">
          The purchase recipt will be sent to this address
        </p>
        <input
          className="form-inputs border border-purple"
          type="email"
          required
        />

        <label className="form-label" htmlFor="Address 1">
          Address 1
        </label>
        <input className="form-inputs border border-purple" type="text" />

        <label className="form-label" htmlFor="Address 2">
          Address 2
        </label>
        <input className="form-inputs border border-purple" type="text" />

        <div className="location space-x-10">
          <div className="local-government">
            <label className="form-label" htmlFor="Local Government">
              Local Government
            </label>
            <input className="form-inputs border border-purple" type="text" />
          </div>

          <div className="state">
            <label className="form-label" htmlFor="State">
              State
            </label>
            <select
              name="state"
              id="state"
              className="border border-purple pl-2"
            >
              {states.map((state) => (
                <option>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
