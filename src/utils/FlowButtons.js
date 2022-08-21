import React from "react";
export default function FlowButtons({ checkout, pay, next }) {
  return (
    <div className="flow-buttons flex flex-col md:flex-row space-x-20">
      <button
        type="submit"
        className="next-button bg-gradient-to-r from-yellow1 to-yellow2"
        onClick={() => {
          pay ? checkout() : next();
        }}
      >
        {`${pay ? "Pay" : "Next"}`}
      </button>
      <button className="text-purple font-bold">Cancel Payment</button>
    </div>
  );
}
