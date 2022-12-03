import React, { useEffect, useState } from "react";
import "../../styles/admin.css";
import Sort from "../publicPage/sort";
import Alert from "../helper/alert";

export default function UpdateAdd(props) {

  const season = ["Summer", "Autumn", "Winter"];
  const color = ["Yellow", "Green"];

  const [price, setPrice] = useState(-1);
  const [discountPrice, setDiscountPrice] = useState(-2);

  const [openAlert, setOpenAlert] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const checkPrice = () => {
    if(price < discountPrice) {
      setAlert({type: "error", message: "Price can't be greater than Discount Price"});
      setOpenAlert(true);
    }
  }

  useEffect(() => {
    var inputs = document.querySelectorAll( '.admin_input_tmp' );
    Array.prototype.forEach.call( inputs, function( input )
    {
      var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;
    
      input.addEventListener( 'change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName =  e.target.value.replace('C:\\fakepath\\','');
        
        if( fileName )
          label.innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });
  });
  
  return props.trigger[0] ? (
    <div className="sign-up_container">
      {openAlert && <Alert alert={alert} setOpenAlert={setOpenAlert} />}
      <div className="sign-up_wrapper admin_fix_modal">
        <div className="sign-up_ctr admin-modal_ctr">
          <div className="sign-up_icon">
            <button
              className="login_close-btn"
              onClick={() => props.setTrigger(false)}
            >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 32 32" 
              className="sign-up_my-icon">
                <path 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M2 30L30 2m0 28L2 2"/>
            </svg>            
            </button>
          </div>
          <h2 className="admin_header">{props.trigger[1] ? 'Update' : 'Add new item'}</h2>
          <div className="admin_content">
            <div className="admin_input">
              <label className="display_block">Name</label>
              <input className="admin_input_text" type="text" />
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Collection</label>
                <Sort trigger="manageItem1" setCount={0} optsArray={season} />
              </div>
              <div className="admin_choosen">
                <label className="display_block">Color</label>
                <Sort trigger="manageItem2" setCount={1} optsArray={color} />
              </div>
            </div>
            <div className="admin_input">
              <label className="display_block">Size</label>
              <div className="size_ctn">
                <div className="admin_choosen">
                  <label>w:</label>
                  <input className="admin_input_text" type="text" />
                </div>
                <div className="admin_choosen">
                  <label>l:</label>
                  <input className="admin_input_text" type="text" />
                </div>
                <div className="admin_choosen">
                  <label>h:</label>
                  <input className="admin_input_text" type="text" />
                </div>
              </div>
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Price</label>
                <input className="admin_input_text" type="text" onChange={(e) => setPrice(e.target.value)}/>
              </div>
              <div className="admin_choosen">
                <label className="display_block">Discount Price</label>
                <input className="admin_input_text" type="text" onChange={(e) => setDiscountPrice(e.target.value)}/>
              </div>
            </div>
            <div className="admin_input">
              <label className="display_block">Image</label>
              <input 
                type="file" 
                name="file" 
                id="file" 
                data-multiple-caption="{count} files selected" 
                multiple/>
              <label htmlFor="file" className="admin_input_label">Choose file</label>
            </div>
            <div className="admin_input">
              <label 
                className="display_block">
                Description
              </label>
              <textarea 
                className="admin_input_text admin_input_desc" 
                cols="8" 
                wrap="soft" 
                placeholder="Write something">
              </textarea>
            </div>
          </div>
          <button type="submit" className="admin_save" onClick={() => checkPrice()}>
            Save
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}