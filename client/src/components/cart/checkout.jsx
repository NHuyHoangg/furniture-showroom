import React from "react";
import "../../styles/checkout.css";

export default function Checkout() {
  return (
    <div className="checkout_container">
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
          <select>
            <option value="0">Roll Royce</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
          </select>
          <select>
            <option value="0">Roll Royce</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
          </select>
          <select>
            <option value="0">Roll Royce</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
          </select>
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
        <a href="#">Return&nbsp;to&nbsp;shop</a>
        <button>Pay up</button>
      </div>
      <div className="checkout_item">
        <div className="item_container">
          <div className="item_info_ctn">
            <div className="item_img"></div>
            <div className="item_name-cat">
              <p>Item X</p>
              <p>Category</p>
            </div>
            <p>Amount <br></br> 1</p>
            <p>Price <br></br> $123</p>
          </div>
          <div className="item_info_ctn">
            <div className="item_img"></div>
            <div className="item_name-cat">
              <p>Item X</p>
              <p>Category</p>
            </div>
            <p>Amount <br></br> 1</p>
            <p>Price <br></br> $123</p>
          </div>
          <div className="item_info_ctn">
            <div className="item_img"></div>
            <div className="item_name-cat">
              <p>Item X</p>
              <p>Category</p>
            </div>
            <p>Amount <br></br> 1</p>
            <p>Price <br></br> $123</p>
          </div>
          <div className="item_info_ctn">
            <div className="item_img"></div>
            <div className="item_name-cat">
              <p>Item X</p>
              <p>Category</p>
            </div>
            <p>Amount <br></br> 1</p>
            <p>Price <br></br> $123</p>
          </div>
          <div className="item_info_ctn">
            <div className="item_img"></div>
            <div className="item_name-cat">
              <p>Item X</p>
              <p>Category</p>
            </div>
            <p>Amount <br></br> 1</p>
            <p>Price <br></br> $123</p>
          </div>
          <div className="item_info_ctn">
            <div className="item_img"></div>
            <div className="item_name-cat">
              <p>Item X</p>
              <p>Category</p>
            </div>
            <p>Amount <br></br> 1</p>
            <p>Price <br></br> $123</p>
          </div>
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