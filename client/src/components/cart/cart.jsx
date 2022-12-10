import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/cart.css";


function CartItem(item) {
  const [close,setClose] = useState(false);
  const [counter, setCounter] = useState(0);
  const addCountHandler = () => {
    setCounter(counter + 1);
  };
  const removeCountHandler = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return close ? (
    ""
  ) : (
    <div className="cart_detail_item-info">
      <div className="cart_detail_item-img"></div>
      <div className="cart_detail_item_name-cat">
        <p className="cart_detail_item-name">{item.name}</p>
        <button className="cart_btn_close" onClick={() => setClose(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cart_btn_close_hover"
            color="#d1b7a1"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="cart_detail_item-cat">{item.collection}</p>
        <p className="cart_detail_item-cat cart_detail_item-price">
          $ {item.price}
        </p>
      </div>
      <p className="cart_detail_amount">
        <button className="counter_button" onClick={removeCountHandler}>
          -
        </button>
        <div className="item_counter"> {counter}</div>
        <button className="counter_button" onClick={addCountHandler}>
          +
        </button>
      </p>
    </div>
  );
}


export default function Cart(props) {

  // turn off the cart when change route
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    props.setTrigger(false);
  }, [location]);


  return props.trigger ? (
    <div className="cart_container">
      <div
        className="modal_close"
        onClick={() => props.setTrigger(false)}
      ></div>
      <div className="cart_wrapper">
        <button
          className="cart_close-btn"
          onClick={() => props.setTrigger(false)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 32 32" 
            className="cart_my-icon">
            <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M2 30L30 2m0 28L2 2"/>
          </svg>            
        </button>
        <div className="cart_ctr">
          <h1 className="cart_header">Your Cart</h1>
          <div className="cart_item_list">
            <CartItem
              name="Chaise Sectional Sofa"
              collection="Pearl Spring"
              price="123"
            />
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
            <CartItem
              name="Wellington Sofa"
              collection="Heartfelt Winter"
              price="10000"
            />  
          </div>

          <div className="cart_footer">
            <p className="cart_footer_align-left">Total:</p>
            <p className="cart_footer_align-right"> $123</p>
          </div>
          <div className="cart_btn_container ">
            <button className="cart_btn" type="submit" onClick={()=> navigate('../checkout')}>
              <p>Checkout</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#fff"
                className="cart-btn_icon"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
