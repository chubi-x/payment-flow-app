import React, { useState } from "react";
export default function FlowButtons({ activeTab, nextTab }) {
  const [pay, setPay] = useState(false);

  function next() {
    nextTab((tabs) => {
      const newTabs = [...tabs];
      for (let i = 0; i < newTabs.length; i++) {
        if (newTabs[i].name === "confirmPayment") {
          setPay(true);
        }
        if (newTabs[i].active) {
          if (i + 1 < newTabs.length) {
            newTabs[i].active = false;
            newTabs[i + 1].active = true;
            break;
          }
        }
      }
      return newTabs;
    });
  }
  return (
    <div className="flow-buttons flex flex-col md:flex-row space-x-20">
      <button
        type="submit"
        className="next-button bg-gradient-to-r from-yellow1 to-yellow2"
        onClick={next}
      >
        {`${pay ? "Pay" : "Next"}`}
      </button>
      <button className="text-purple font-bold">Cancel Payment</button>
    </div>
  );
}
