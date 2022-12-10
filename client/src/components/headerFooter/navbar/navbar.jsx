import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/navbar.css";
import "../../../styles/signup.css";
import "../../../styles/login.css";
import Login from "../../auth/login";
import Signup from "../../auth/signup";

export default function Navbar( {loggedIn, setLoggedIn, setHeaderNav, setTimer, setSiteCollection} ) {
  const [buttonSignUp, setButtonSignUp] = useState(false);
  const [buttonLogin, setButtonLogin] = useState(false);
  const [buttonCollection, setButtonCollection] = useState(false);
  const [buttonMenu, setButtonMenu] = useState(false);
  const [responMenu, setResponMenu] = useState(false);
  const [blurMenu, setBlurMenu] = useState(false);
  const [widthTracer, setWidthTracer] = useState(window.innerWidth);
  const [heightTracer, setHeightTracer] = useState(window.innerHeight);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidthTracer(window.innerWidth);
    setHeightTracer(window.innerHeight);
  } 

  const DelayBlur = () => {
    if(blurMenu === false)
      setTimeout(function() {setBlurMenu(!blurMenu);}, 200);
    else
      setTimeout(function() {setBlurMenu(!blurMenu);}, 100);
  }

  useEffect(() => {
    document
      .querySelectorAll(
        ".sign-up_form_text-field_input"
      )
      .forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add(
              "sign-up_form_filled"
            );
          } else {
            event.target.nextElementSibling.classList.remove(
              "sign-up_form_filled"
            );
          }
        });
      });

    document
      .querySelectorAll(".login_form_text-field_input ")
      .forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add("login_form_filled");
          } else {
            event.target.nextElementSibling.classList.remove(
              "login_form_filled"
            );
          }
        });
      });
  });

  return (
    <div className="header" 
      onMouseEnter={() => {setTimer(true); setHeaderNav("header_ctn")}}
      onMouseLeave={() => setTimer(false)}>
      <div className="logo">
        <img
          src="../img/logo.png"
          alt="logo"
          className="logo_img"
          onClick={() => {navigate("../"); setHeaderNav("");}}
        />
      </div>

      <div className="navbar">
        <i 
          class="fa-solid fa-bars navbar_icon"
          onClick={() => {setResponMenu(!responMenu); DelayBlur();}}>
        </i>
        <ul className="navbar_ul">
          {widthTracer > 500 &&
            <li 
              className="navbar_list" 
              onClick={() => setHeaderNav("")}
              onMouseEnter={() => setButtonCollection(true)}
              onMouseLeave={() => setButtonCollection(false)}>
                <a href="#" className="navbar_a a_hover" >
                  <div className="hover-underline-animation">Collection</div>
                </a>
            </li>}
          {widthTracer > 700 &&
            <li className="navbar_list margin_nav" onClick={() => {navigate("../product"); setHeaderNav("");}}>
              <a className="navbar_a a_hover">
                <div className="hover-underline-animation">Product</div>
              </a>
            </li>}
          {widthTracer > 950 &&
            <li className="navbar_list margin_nav" onClick={() => {navigate("../about-us"); setHeaderNav("header_ctn");}}>
              <a className="navbar_a a_hover">
                <div className="hover-underline-animation">About us</div>
              </a>
            </li>}
        </ul>

        <ul className={"navbar_ul " + (responMenu && "transform_navbar")}>
          <li className="navbar_list">
            <div className="navbar_a">
              <button
                className="navbar_button_auth"
                onClick={() => {setButtonLogin(true); setHeaderNav("");}}
              >
                <div className="hover-underline-animation">Login</div>
              </button>
              {(widthTracer > 1200  && heightTracer < 1400) ? <div className="vr"></div> : ""}
              <button
                className="navbar_button_auth"
                onClick={() => {setButtonSignUp(true); setHeaderNav("");}}
              >
                <div className=" hover-underline-animation">Sign up</div>
              </button>
            </div>
          </li>
          {widthTracer <= 950 &&
            <li className="navbar_list" onClick={() => {navigate("../about-us"); setHeaderNav("header_ctn");}}>
              <a className="navbar_a a_hover">
                <div className="hover-underline-animation">About us</div>
              </a>
            </li>}
          {widthTracer <= 700 &&
            <li className="navbar_list" onClick={() => {navigate("../product"); setHeaderNav("");}}>
              <a className="navbar_a a_hover">
                <div className="hover-underline-animation">Product</div>
              </a>
            </li>}
          {widthTracer <= 500 &&
            <li 
              className="navbar_list" 
              onClick={() => setHeaderNav("")}
              onMouseEnter={() => setButtonCollection(true)}
              onMouseLeave={() => setButtonCollection(false)}>
                <a href="#" className="navbar_a a_hover" >
                  <div className="hover-underline-animation">Collection</div>
                </a>
            </li>}
        </ul>
      </div>
      {buttonLogin && <Login setButtonSignUp={setButtonSignUp} setButtonLogin={setButtonLogin} setLoggedIn={setLoggedIn}/>}
      
      {buttonSignUp && <Signup setButtonSignUp={setButtonSignUp} setButtonLogin={setButtonLogin}/>}

      {(buttonMenu || buttonCollection) &&
        <div 
          className="navbar_collection_menu"
          onMouseEnter={() => setButtonMenu(true)}
          onMouseLeave={() => setButtonMenu(false)}>
          <button 
            onClick={() => {
              setSiteCollection('spring');
              navigate("../collection-detail/spring")}}>
                <div className="hover-underline-animation">
                  <p>Spring</p>
                </div>
          </button>
          <button 
            onClick={() => {
              setSiteCollection('summer');
              navigate("../collection-detail/summer")}}>
                <div className="hover-underline-animation">
                  Summer
                </div>
          </button>
          <button 
            onClick={() => {
              setSiteCollection('autumn');
              navigate("../collection-detail/autumn")}}>
                <div className="hover-underline-animation">
                  Autumn
                </div>
          </button>
          <button 
            onClick={() => {
              setSiteCollection('winter');
              navigate("../collection-detail/winter")}}>
                <div className="hover-underline-animation">
                  Winter
                </div>
          </button>
        </div>}
      {((widthTracer <= 1200 || heightTracer >= 1400) && blurMenu) &&
        <div className="navbar_dummy"></div>}
    </div>
  );
}
