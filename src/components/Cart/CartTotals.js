import React from "react";
import { Link } from "react-router-dom";

const CartTotals = (props) => {

  const { cartSubtotal, cartTax, cartTotal, clearCart } = props.value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button 
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  onClick={() => clearCart()}
            >clear cart</button>
          </Link>
          <p>
            <span className="text-title">subtotal </span>
            : $ {cartSubtotal}
          </p>
          <p>
            <span className="text-title">tax </span>
            : $ {cartTax}
          </p>
          <p>
            <span className="text-title">total </span>
            : $ {cartTotal}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartTotals;