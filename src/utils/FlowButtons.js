import React, { useEffect } from "react";
export default function FlowButtons({ checkout, pay, next }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
