import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../cart/cart";
import "../../../styles/navbar.css";

export default function NavbarLogin( {loggedIn, setLoggedIn} ) {
  const [buttonCart, setButtonCart] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        <img
          src="../img/logo.png"
          alt="logo"
          className="logo_img"
          onClick={() => navigate("../")}
        />
      </div>

      <div className="navbar">
        <ul className="navbar_ul">
          <li className="navbar_list" onClick={() => navigate("../")}>
            <a href="#collection" className="navbar_a a_hover">
              <div className="hover-underline-animation">Collection</div>
            </a>
          </li>
          <li
            className="navbar_list margin_nav"
            onClick={() => navigate("../product")}
          >
            <div className="navbar_a a_hover">
              <div className="hover-underline-animation">Product</div>
            </div>
          </li>
          <li
            className="navbar_list margin_nav"
            onClick={() => navigate("../about-us")}
          >
            <div className="navbar_a a_hover">
              <div className="hover-underline-animation">About us</div>
            </div>
          </li>
        </ul>

        <ul className="navbar_ul">
          <li className="navbar_list">
            <div className="navbar_a  right_nav">
              <label className="nav_search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                  className="w-6 h-6 nav-btn"
                  color="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  className=""
                  name=""
                  placeholder="Type to search . . . "
                  onMouseEnter={() => {
                    setButtonCart(false);
                  }}
                />
              </label>
            </div>
            <div className="navbar_a right_nav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-6 h-6 nav-btn icon-hover"
                color="black"
                onClick={() => {
                  setButtonCart(!buttonCart);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>

            <div
              className="navbar_a right_nav user_icon"
              onMouseEnter={() => {
                setButtonCart(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-6 h-6 nav-btn icon-hover user_icon_hover"
                color="black"
                onClick={() => navigate("../user")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <div className="logout_container">
                <div className="logout_wrapper">
                  <h1 className="logout_header"> Hello,</h1>
                  <p className="logout_name"> $&#123;Full name&#125;</p>
                  <div className="logout_icon">
                    <button
                      className="logout_button logout_hover"
                      onClick={() => {
                        navigate("../user/info");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                        />
                      </svg>
                     &thinsp;
                      Your Profile
                    </button>

                    <button
                      className="logout_button logout_hover"
                      onClick={() => {
                        navigate("../user/history");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
                        />
                      </svg>
                      &thinsp; Your Orders History
                    </button>

                    {/* Temp change NAV bar  */}
                    {/* Temp change NAV bar  */}
                    {/* Temp change NAV bar  */}
                    <button
                      className="logout_button logout_button_footer"
                      onClick={() => {
                        setLoggedIn(false);
                        navigate("../")
                      }}
                    >
                      LOG OUT
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>
      <Cart trigger={buttonCart} setTrigger={setButtonCart} />
    </div>
  );
}
