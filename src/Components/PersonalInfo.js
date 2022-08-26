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
        value={formInfo.name}
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
        value={formInfo.email}
        onChange={update}
      />

      <label className="form-label" htmlFor="address1">
        Address 1
      </label>
      <input
        className="form-inputs border border-purple"
        type="text"
        name="address1"
        value={formInfo.address1}
        onChange={update}
      />

      <label className="form-label" htmlFor="address2">
        Address 2
      </label>
      <input
        className="form-inputs border border-purple"
        type="text"
        name="address2"
        value={formInfo.address2}
        onChange={update}
      />

      <div className="location flex flex-col justify-between space-x-10 md:flex-row">
        <div className="local-government">
          <label className="form-label" htmlFor="localGovernment">
            Local Government
          </label>
          <input
            className="form-inputs border border-purple"
            type="text"
            name="localGovernment"
            value={formInfo.localGovernment}
            onChange={update}
          />
        </div>

        <div className="state">
          <label className="form-label" htmlFor="state">
            State
          </label>
          <select
            name="state"
            value={formInfo.state}
            onChange={update}
            id="state"
            className="border border-purple pl-2"
          >
            <option>Select state</option>
            {states.map((state, index) => (
              <option key={index}>{state}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
