import React from "react";
import "../../styles/sort.css";

export default function StyledSort() {
  function handleOptClick(e) {
    const headerEle = document.getElementsByClassName("sort-header");
    headerEle[0].textContent = e.target.innerHTML;
    const checkedEle = document.getElementsByClassName("checked-opt");
    checkedEle[0].classList.remove("checked-opt");
    e.target.classList.add("checked-opt");
  }

  function handleBtnClick() {
    let check = false;
    const ele = document.getElementsByClassName("sort-opts");
    ele[0].classList.forEach((element) => {
      if(element === "hide-sort")
        check = true;
    });
    check ? ele[0].classList.remove("hide-sort") : ele[0].classList.add("hide-sort");
  }

  return(
    <div className="sort_ctn">
      <button type="button" onClick={handleBtnClick}>
        <span className="sort-header">Recommendation</span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className="sort-opts hide-sort" onClick={handleBtnClick}>
        <a href="#" role="button" onClick={handleOptClick}>
          <h2 className="checked-opt">Recommendation</h2>
        </a>
        <a href="#" role="button" onClick={handleOptClick}>
          <h2>Price: Low to high</h2>
        </a>
        <a href="#" role="button" onClick={handleOptClick}>
          <h2>Price: High to low</h2>
        </a>
      </div>
    </div>
  )
}