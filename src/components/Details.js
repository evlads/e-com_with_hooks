import React, { useContext } from "react"
import { ProductContext } from "../storage/context";
import { Link } from "react-router-dom";

const Details = () => {
  const value = useContext(ProductContext);
  const { id, title, img, company, price, info, inCart } = value.detailProduct;
  return (
    <div className = "container py-5">

      <div className="row">
        <div className="col-10 mx-auto text-center text slanted my-5">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} className="img-fluid" alt="title" />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <p>model : {title}</p>
            <p className="text-title text-uppercase text-muted mt-3 mb-2">
              made by: <span className="text-uppercase">{company}</span>
            </p>
            <p>price : ${price}</p>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
            </p>
            <p className="text-muted">{info}</p>
            <div>
              <Link to='/'>
                <button type="button" className="btn btn-outline-primary mr-1">back to products</button>
              </Link>
              <button 
                type="button" 
                  className={`btn btn-outline${inCart?"-secondary":"-success"}`}
                  disabled={inCart?true:false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                }}>
                  {inCart ? "already in cart" : "add to cart"}
              </button>
            </div>
        </div>
      </div> 
    </div>  
  )
  }


export default Details;