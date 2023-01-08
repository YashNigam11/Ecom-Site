import React from "react";
import Product from "./Product";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0 ">
        <img src="/assets/bg.webp" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW ARRIVAL SEASONS
            </h5>
            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}
