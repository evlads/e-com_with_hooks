import React, { Fragment, useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

import { ProductContext } from "../../storage/context";

const Cart = (props) => {

  const value = useContext(ProductContext);
  const { cart } = value;
    if (cart.length > 0) {
      return (
        <Fragment>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList value={value}/>
          <CartTotals value={value}/>
        </Fragment>
      )
    } else {
      return <EmptyCart />
    } 
 }

export default Cart;