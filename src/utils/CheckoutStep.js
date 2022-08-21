import React from "react";
export default function CheckoutStep({ value, active, toggle }) {
  function convertCase(word) {
    word[0] = word[0].toUpperCase();
    for (let i = 0; i < word.length; i++) {
      if (i !== 0 && word[i] === word[i].toUpperCase()) {
        word.splice(i, 0, " ");
        break;
      }
    }
    return word.join("");
  }
  return (
    <div
      className="checkout-step-item cursor-pointer"
      // onClick={() => {
      //   toggle((prevActiveTab) => {
      //     return prevActiveTab.map((item) => {
      //       const name = item.name;
      //       return {
      //         ...item,
      //         active: value === name ? true : false,
      //       };
      //     });
      //   });
      // }}
    >
      <h2 className={`${active ? "text-yellow2 " : ""} text-base text-center`}>
        {convertCase(value.split(""))}
      </h2>
    </div>
  );
}
