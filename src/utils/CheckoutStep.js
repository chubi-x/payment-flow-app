import React from "react";
export default function CheckoutStep(props) {
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
      onClick={() => props.toggle(props.value)}
    >
      <h2
        className={`${
          props.active ? "text-yellow2 " : ""
        } text-base text-center`}
      >
        {convertCase(props.value.split(""))}
      </h2>
    </div>
  );
}
