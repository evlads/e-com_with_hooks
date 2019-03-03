import React from "react";
import Title from "../Title";

const EmptyCart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <Title name="your" title="cart is currently empty" />
        </div>
      </div>
    </div>
  )
}

export default EmptyCart;