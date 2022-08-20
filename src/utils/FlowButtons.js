import React from "react";
export default function FlowButtons() {
  return (
    <div className="flow-buttons flex flex-col md:flex-row space-x-20">
      <button className="next-button bg-gradient-to-r from-yellow1 to-yellow2">
        Next
      </button>
      <button className="text-purple font-bold">Cancel Payment</button>
    </div>
  );
}
