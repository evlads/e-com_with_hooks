import React from "react";

const CartItem = (props) => {

  const {id, title, img, price, total, count} = props.item;
  const {increment, decrement, removeItem} = props.value; 

  return (
    <div className="row my-4 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="title" 
            className="img-fluide" 
            style={{ 'width': '5rem', 'height': '5rem'}}
          />            
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div> 
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div> 

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span 
                className="btn btn-outline-dark mx-1"
                style={{'borderRadius':0}}
                onClick={()=>decrement(id)}
              >-</span>
            <span
                className="btn btn-outline-dark"
                style={{ 'cursor': 'auto' }}
              >{count}</span>
            <span
                className="btn btn-outline-dark mx-1"
                style={{ 'borderRadius': 0 }}
                onClick={() => increment(id)}
              >+</span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <button 
          className="btn btn-outline-dark mx-1"
          onClick={() => removeItem(id)}
        >remove</button>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        item total : $ {total}
      </div>
    </div>
  )
}

export default CartItem;