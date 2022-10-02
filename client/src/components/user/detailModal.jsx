import React from "react";
import "../../styles/history.css";

export default function DetailModal(props) {
  return props.trigger ? (
    <div className={"order_detail " + (!props.trigger && "hide_modal")}>
      <div className="order_detail_wrapper">
        <div className="order_detail_ctn">
          <div className="user_info">
            <div className="user_detail-info">
              <div className="info_ctn">
                <p>Order:</p>
                <p>SO40000087</p>
              </div>
              <div className="info_ctn">
                <p>Date:</p>
                <p>02-09-2022</p>
              </div>
              <div className="info_ctn">
                <p>User Name:</p>
                <p>anhbo123</p>
              </div>
              <div className="info_ctn">
                <p>Name:</p>
                <p>anhbodantruong</p>
              </div>
              <div className="info_ctn">
                <p>Email:</p>
                <p>bolaanh@gmail.com</p>
              </div>
              <div className="info_ctn">
                <p>Phone:</p>
                <p>0938608456</p>
              </div>
              <div className="info_ctn">
                <p>Address:</p>
                <p>340 Madison Avenue Sixth Floor New York, NY 10173 USA</p>
              </div>
            </div>
            <div className="user_total">
              <p>Total:</p>
              <p>$1000000</p>
            </div>
          </div>
          <div className="item_info">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" height="1em" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 32 32" 
              onClick={() => props.setTrigger(false)}>
                <path 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M2 30L30 2m0 28L2 2"/>
            </svg>
            <div className="item_ctn">
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
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}