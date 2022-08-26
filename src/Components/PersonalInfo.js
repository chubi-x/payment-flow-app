import React, { useContext, useEffect } from "react";
import states from "../data/states";
import { FormContext } from "../Helpers/Context";
export default function PersonalInfo({ update, pay }) {
  useEffect(() => {
    pay(false);
  }, [pay]);
  const { formInfo } = useContext(FormContext);
  return (
    <div className="form h-full">
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <input
        className="form-inputs border border-purple"
        type="text"
        name="name"
        value={formInfo.personalInfo.name}
        onChange={update}
      />

      <label className="form-label" htmlFor="email">
        Email <span className="text-red">*</span>
      </label>
      <p className="text-purple text-xs">
        The purchase receipt will be sent to this address
      </p>
      <input
        className="form-inputs border border-purple"
        type="email"
        required
        name="email"
        value={formInfo.personalInfo.email}
        onChange={update}
      />

      <label className="form-label" htmlFor="address1">
        Address 1
      </label>
      <input
        className="form-inputs border border-purple"
        type="text"
        name="address1"
        value={formInfo.personalInfo.address1}
        onChange={update}
      />

      <label className="form-label" htmlFor="address2">
        Address 2
      </label>
      <input
        className="form-inputs border border-purple"
        type="text"
        name="address2"
        value={formInfo.personalInfo.address2}
        onChange={update}
      />

      <div className="location flex flex-col justify-between md:space-x-10 md:flex-row">
        <div className="local-government w-full md:w-2/3">
          <label className="form-label" htmlFor="localGovernment">
            Local Government
          </label>
          <input
            className="form-inputs border border-purple"
            type="text"
            name="localGovernment"
            value={formInfo.personalInfo.localGovernment}
            onChange={update}
          />
        </div>

        <div className="state md:mt-3">
          <label className="form-label" htmlFor="state">
            State
          </label>
          <select
            name="state"
            value={formInfo.personalInfo.state || "Select state"}
            onChange={update}
            id="state"
            className="border border-purple pl-2"
          >
            <option hidden disabled>
              Select state
            </option>
            {states.map((state, index) => (
              <option key={index}>{state}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

