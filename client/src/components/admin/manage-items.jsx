import React, { useState } from "react";
import "../../styles/admin.css";
import UpdateAdd from "./updateAdd";

export default function ManageItem() {
  const [buttonModal, setButtonModal] = useState(false);
  const [modalVal, setModalVal] = useState(false);

  const buttonText1 = 'Active';
  const buttonText2 = 'Locked';
  const falseState = false;
  const trueState = true;

  function changeStatus(event) {
    let tmp = String(event.target.innerHTML);
    event.target.innerHTML = (tmp === buttonText1) ? buttonText2 : buttonText1;
    event.target.style.backgroundColor = (tmp === 'Active') ? '#757575' : '#125F4B';
  }

  return (
    <div className="history_container">
      <div className="history_content">
        <div className="search_container">
          <input 
            type="text" 
            placeholder="Search..." />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em">
              <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-width="2" 
              d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/>
          </svg>
          <button 
            className="admin_add"
            onClick={() => {setButtonModal(!buttonModal); setModalVal(falseState);}} >
              Add new
          </button>
        </div>
        <div className="history_table">
          <div className="table_row first_row">
            <div className="table_ele">
              <p>Collection</p>
            </div>
            <div className="table_ele">
              <p>SKU</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Name</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Price</p>
              <button>
                <i className="fa-solid fa-up-down"></i>
              </button>
            </div>
            <div className="table_ele">
              <p>Created date</p>
              <button>
                <i className="fa-solid fa-up-down"></i>
              </button>
            </div>
            <div className="table_ele">
              <p>Updated date</p>
              <button>
                <i className="fa-solid fa-up-down"></i>
              </button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <p>Update</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <p>Status</p>
            </div>
          </div>
          <div className="table_row odd_row">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button className="admin_active-btn" onClick={e => changeStatus(e)}>{buttonText1}</button>
            </div>
          </div>
          <div className="table_row even_row">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button className="admin_active-btn" onClick={e => changeStatus(e)}>{buttonText1}</button>
            </div>
          </div>
          <div className="table_row odd_row">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button className="admin_active-btn" onClick={e => changeStatus(e)}>{buttonText1}</button>
            </div>
          </div>
          <div className="table_row even_row">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button className="admin_active-btn" onClick={e => changeStatus(e)}>{buttonText1}</button>
            </div>
          </div>
          <div className="table_row odd_row">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button 
                className="admin_active-btn" 
                onClick={e => changeStatus(e)}>
                {buttonText1}
              </button>
            </div>
          </div>
          <div className="table_row even_row">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button className="admin_active-btn" onClick={e => changeStatus(e)}>{buttonText1}</button>
            </div>
          </div>
          <div className="table_row odd_row last-row_shadow">
            <div className="table_ele">
              <p>Spring</p>
            </div>
            <div className="table_ele">
              <p>Not yet ...</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Sofa</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">$123</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele">
              <p>DD-MM-YYYY</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button onClick={() => {setButtonModal(!buttonModal); setModalVal(trueState);}}>Edit</button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <button 
                className="admin_active-btn" 
                onClick={e => changeStatus(e)}>
                {buttonText1}
              </button>
            </div>
          </div>
          <div className="table_row">
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
        <UpdateAdd 
          trigger={[buttonModal, modalVal]} 
          setTrigger={setButtonModal}>
        </UpdateAdd>
      </div>
    </div>
  )
}