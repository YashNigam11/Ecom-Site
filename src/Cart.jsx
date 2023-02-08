import React, { useState } from "react";
import { useContext } from "react";
import { cartItems } from "./App";

export default function Cart() {
  const { items } = useContext(cartItems);
  const [count, setCount] = useState(1);
  const handleButtonInc = () => {
    setCount(count + 1);
  };
  const handleButtonDec = () => {
    setCount(count - 1);
  };
  const ShowProduct = () => {
    return (
      <div>
        {items.map((item, i) => (
          <div className="row">
            <div className="col-md-4">
              <img
                src={item.image}
                alt={item.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{item.title}</h3>
              <p className="lead fw-bold">
                ${item.price} X {item.qty} = ${item.qty * item.price}
              </p>
              <button
                className="btn btn-outline-dark me-4 "
                onClick={() => handleButtonDec(count)}
              >
                <div className="fa fa-minus"></div>
              </button>
              {count}
              <button
                className="btn btn-outline-dark me-4 "
                onClick={() => handleButtonInc(count)}
              >
                <div className="fa fa-plus"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
}
