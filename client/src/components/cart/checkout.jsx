import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/checkout.css";
import Sort from "../publicPage/sort";
import CheckoutModal from "./checkoutModal";

export default function Checkout( { setFilterCollection, setFilterCategory, setAlert, setOpenAlert} ) {

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const vehicle = ["Honda", "Suzuki"];

  const handlePayUp = () => {

    setAlert({
        type: 'success', 
        message: 'Thank you for your purchase!'
    })

    setOpenAlert(true);
  
    setFilterCategory('All');
    setFilterCollection('All');
    navigate("../")
  }

  const RenderItem = () => {
    let list = [];
    for(let i=0; i<10; i++)
      list.push(
      <div className="item_info_ctn">
        <div className="item_img"></div>
        <div className="item_name-cat">
          <p>Item X</p>
          <p>Category</p>
        </div>
        <p>Amount <br></br> 1</p>
        <p>Price <br></br> $123</p>
      </div>)
    return list
  }

  return (
    <div className="checkout_container">
      {modal && <CheckoutModal setModal={setModal} handlePayUp={handlePayUp}/>}
      <div className="checkout_information">
        <h2>Information</h2>
        <div className="checkout_input">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="checkout_input">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="checkout_input">
          <label>Phone</label>
          <input type="text" />
        </div>
        <div className="checkout_input">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="checkout_input">
          <Sort trigger="checkout1" setCount={0} optsArray={vehicle} />
          <Sort trigger="checkout2" setCount={1} optsArray={vehicle} />
          <Sort trigger="checkout3" setCount={2} optsArray={vehicle} />
        </div>
      </div>
      <div className="checkout_payment">
        <h2>Payment method</h2>
        <div className="payment_container">
          <h2>Cash on delivery</h2>
          <input type="radio" name="radio" />
          <span className="payment_checkmark"></span>
        </div>
        <div className="payment_container">
          <h2>Bank transfer (Updating...)</h2>
          <input type="radio" name="radio" />
          <span className="payment_checkmark"></span>
        </div>
        <p onClick={()=>{
          setFilterCategory('All');
          setFilterCollection('All');
          navigate("../product")
        }}>
          Return to shop
        </p>
        <button onClick={()=>setModal(true)}>
          Pay up
        </button>
      </div>
      <div className="checkout_item">
        <div className="item_container">
          <RenderItem />  
        </div>
        <hr />
        <div className="item_total">
          <p>Total:</p>
          <p>03</p>
          <p>$1000000</p>
        </div>
      </div>
    </div>
  );
}