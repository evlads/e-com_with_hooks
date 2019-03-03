import React, { Fragment, useContext  } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../storage/context";

const ProductList = () => {

  const value = useContext(ProductContext);
  const products = value.products.map(
    product => {
      return <Product
        key={product.id}
        product={product}
      />
    }
  )
  
  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductList;
