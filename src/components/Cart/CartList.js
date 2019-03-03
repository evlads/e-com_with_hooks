import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {

  const {cart} = props.value;
  const items = cart.map(item => {
    return <CartItem key={item.id} item={item} value={props.value} />
  });

  return (
    <div className="container-fluid">
      {items}   
    </div>
  )
}

export default CartList;