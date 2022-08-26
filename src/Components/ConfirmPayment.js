import React, { useEffect } from "react";
import cart from "../data/cart";

const prices = [];
cart.forEach((item) => {
  prices.push(item.price);
});
export default function ConfirmPayment({ pay }) {
  useEffect(() => {
    pay(true);
  }, [pay]);

  return (
    <div className="confirm-container flex flex-col">
      <div className="confirm-header flex justify-between items-center bg-blueMain px-10 mb-10">
        <h1 className="text-white text-sm font-bold">Item Name</h1>
        <h1 className="text-white text-sm font-bold">₦ Price</h1>
      </div>
      <div className="order-details-container text-purple">
        {cart.map((item) => (
          <div className="order-details px-10" key={item.title}>
            <h5 className="title" key={item.title}>
              {item.title}
            </h5>
            <h5 className="price font-bold" key={item.price}>
              {Number(item.price).toLocaleString("en", {
                minimumFractionDigits: 2,
              })}
            </h5>
          </div>
        ))}
        <div className="shipping flex justify-between p-10">
          <h5>Shipping</h5>
          <h5>0.00</h5>
        </div>
      </div>
      <hr className="rule" />
      <div className="total-orders border border-lightBlue mt-10 mx-10 px-5">
        <p className="caption  text-lightBlue">Total</p>
        <p className="total font-bold text-purple">
          {Number(prices.reduce((total, num) => total + num)).toLocaleString(
            "en",
            {
              minimumFractionDigits: 2,
            }
          )}
        </p>
      </div>
    </div>
  );
}
