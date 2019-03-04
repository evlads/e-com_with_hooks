import React, { useState, useEffect, createContext   } from "react";
import { storeProducts, detailOneProduct } from "./data";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  
  const [products, setProducts] = useState(storeProducts);
  const [detailProduct, setDetailProduct] = useState(detailOneProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailOneProduct);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    addTotals();
    console.log('totals');
  }, [cart])


  const getItem = id => {
    const product = products.find(item => item.id === id);
    return product;
  }

  const handleDetail = id => {
    const product = getItem(id);
    setDetailProduct(product);
  }

  const addToCart = id => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    const price = product.price;
    product.count = 1;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product])
  }

  const openModal = id => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id );
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
  }

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart])
    }
  }

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item.id !== id );
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart([...tempCart]);
    setProducts([...tempProducts]);
  }

  const clearCart = () => {
    let tempProducts = products.map(item => {
      return {
        ...item,
        inCart: false,
        count: 0,
        total: 0
      }
    })
    setProducts(tempProducts);
    setCart([]);
    setCartSubtotal(0);
    setCartTax(0);
    setCartTotal(0);
  }

  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => {
      subTotal += item.total;
    })
    const temptax = subTotal * 0.2;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subTotal + tax;
    setCartSubtotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  }

    return (
      <ProductContext.Provider value={{
        products, 
        detailProduct, 
        cart,
        modalOpen,
        modalProduct, 
        cartSubtotal,
        cartTax, 
        cartTotal,
        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal,
        increment: increment,
        decrement: decrement,
        removeItem: removeItem,
        clearCart: clearCart
      }}>
        {props.children}
      </ProductContext.Provider>
    );
  }

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };