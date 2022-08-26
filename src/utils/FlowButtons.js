import React, { useEffect } from "react";
export default function FlowButtons({ pay, next }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flow-buttons flex flex-col items-center pt-5 md:pt-0 md:flex-row md:space-x-20 space-y-10 md:space-y-0">
      <div className="next-btn">
        <button
          type={`${pay ? "submit" : "button"}`}
          // type="submit"
          className="next-button bg-gradient-to-r from-yellow1 to-yellow2"
          onClick={next}
          form="checkout"
        >
          {`${pay ? "Pay" : "Next"}`}
        </button>
      </div>
      <div className="cancel-btn">
        <button className="text-purple font-bold" type="button">
          Cancel Payment
        </button>
      </div>
    </div>
  );
}

