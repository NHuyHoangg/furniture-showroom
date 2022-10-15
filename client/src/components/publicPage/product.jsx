import React, { useState, useEffect } from "react";
import "../../styles/product.css";
import StyledSort from "./styledSort";

export default function Product() {

  const productArr = ["Price: Low to high", "Price: High to low"];

  function handleClick(e) {
    let childElement = e.target.parentElement.children;
    for (let index = 0; index < childElement.length; ++index) {
      let element = childElement[index];
        if(element.classList.contains("sidebar_focus")) {
          element.classList.remove("sidebar_focus");
        }
    }  
    e.target.classList.add("sidebar_focus");
  }
  return (
    <div className="product_container">
      <div className="product_sidebar">
        <div className="sidebar_element">
          <h2>Collection</h2>
          <a href="#" onClick={handleClick}>Spring</a>
          <a href="#" onClick={handleClick}>Summer</a>
          <a href="#" onClick={handleClick}>Autumn</a>
          <a href="#" className="sidebar_focus" onClick={handleClick}>Winter</a>
          <a href="#" onClick={handleClick}>All</a>
        </div>
        <div className="sidebar_element">
          <h2>Category</h2>
          <a href="#" className="sidebar_focus" onClick={handleClick}>Sofas</a>
          <a href="#" onClick={handleClick}>Tables</a>
          <a href="#" onClick={handleClick}>Chairs</a>
          <a href="#" onClick={handleClick}>Storages</a>
          <a href="#" onClick={handleClick}>All</a>
        </div>
      </div>
      <div className="admin_sort">
        <h2>Sort by:</h2>
        <StyledSort trigger="product" setCount={0} optsArray={productArr}/>
      </div>
      <div className="product_content">
        <div className="product_row">
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
        </div>
        <div className="product_row">
          <div className="history_pagination">
            <a className="text_pagination" href="#">
              <p>Previous</p>
            </a>
            <a className="pagination_focus" href="#">
              <p>1</p>
            </a>
            <a href="#">
              <p>2</p>
            </a>
            <a href="#">
              <p>3</p>
            </a>
            <a className="text_pagination" href="#">
              <p>Next</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}