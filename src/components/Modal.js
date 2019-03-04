import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ProductContext } from "../storage/context";
import "./Modal.css";

const Modal = () => {

  const value = useContext(ProductContext);
  const { modalOpen, closeModal } = value;
  const { id, title, img, company, price, info, inCart } = value.modalProduct;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <div className="container">
          <div className="row">
            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
              <h3>item added to the cart</h3>
              <img src={img} className="img-fluid" alt="title" />
              <h4>{title}</h4>
              <p className="text-muted">prics : $ {price}</p>
              <Link to="/">
                <button
                  className="btn btn-outline-primary mr-sm-2 mb-2 text-capitalize"
                  onClick={()=>closeModal()}
                >continue shopping</button>
              </Link>
              <Link to="/cart">
                <button
                  className="btn btn-outline-success mb-2 text-capitalize"
                  onClick={() => closeModal()}
              >go to cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;