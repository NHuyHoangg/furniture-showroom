import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/navbar.css";
import "../../../styles/signup.css";
import "../../../styles/login.css";
import Login from "../../auth/login";
import Signup from "../../auth/signup";

export default function Navbar( {loggedIn, setLoggedIn, setHeaderNav, setTimer, setAlert, setOpenAlert} ) {
  const [buttonSignUp, setButtonSignUp] = useState(false);
  const [buttonLogin, setButtonLogin] = useState(false);

  const navigate = useNavigate();

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

        <ul className="navbar_ul">
          <li className="navbar_list" onClick={() => {navigate("../"); setHeaderNav("");}}>
            <a href="#collection" className="navbar_a a_hover" >
              <div className="hover-underline-animation">Collection</div>
            </a>
          </li>
          <li className="navbar_list margin_nav" onClick={() => {navigate("../product"); setHeaderNav("");}}>
            <a className="navbar_a a_hover">
              <div className="hover-underline-animation">Product</div>
            </a>
          </li>
          <li className="navbar_list margin_nav" onClick={() => {navigate("../about-us"); setHeaderNav("header_ctn");}}>
            <a className="navbar_a a_hover">
              <div className="hover-underline-animation">About us</div>
            </a>
          </li>
        </ul>

        <ul className="navbar_ul">
          <li className="navbar_list">
            <div className="navbar_a ">
              <button
                className="navbar_button_auth"
                onClick={() => {setButtonLogin(true); setHeaderNav("");}}
              >
                <div className="hover-underline-animation">Login</div>
              </button>
              &nbsp;
              <div className="vr"></div> &thinsp;
              <button
                className="navbar_button_auth"
                onClick={() => {setButtonSignUp(true); setHeaderNav("");}}
              >
                <div className=" hover-underline-animation">Sign up</div>
              </button>
            </div>
          </li>
        </ul>
      </div>
      {buttonLogin && <Login setButtonSignUp={setButtonSignUp} setButtonLogin={setButtonLogin} setLoggedIn={setLoggedIn} setAlert={setAlert} setOpenAlert={setOpenAlert}/>}
      {buttonSignUp && <Signup setButtonSignUp={setButtonSignUp} setButtonLogin={setButtonLogin} setAlert={setAlert} setOpenAlert={setOpenAlert}/>}
    </div>
  );
}
