import React, { useState, useEffect } from "react";
import Navbar from "./navbar/navbar";
import NavbarLogin from "./navbar/navbarLogin";
import { useLocation } from 'react-router-dom';

export default function Header( {setAlert, setOpenAlert} ) {
  const [cart, setCart] = useState(false);

  const [loggedIn, setButtonLoggedIn] = useState(false);

  const [headerNav, setHeaderNav] = useState("header_ctn");

  const [timerScroll, setTimer] = useState(true);

  const headerRoute = useLocation();

  var timer = null;

  function TimerScroll() {
    timer = null;

    if(timer !== null) {
      clearTimeout(timer);        
    }
    
    timer = setTimeout(function() {
      setHeaderNav("header_ctn header_scroll");
    }, 2000);
  }

  if(!timerScroll) {
    TimerScroll();
  }

  useEffect(() => {

    // if page is not aboutUs, do nothing

    if(headerRoute.pathname === "/checkout"){
      setCart(true);
    }

    if(headerRoute.pathname !== "/about-us"){
      setHeaderNav("header_ctn");
      return;
    }

    // hide or show when scroll

    // var prevScrollpos = window.pageYOffset;

    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     setHeaderNav("header_ctn");
    //     setTimeout(function() {
    //       setHeaderNav("header_ctn header_scroll");
    //     }, 2000);
    //   } else {
    //     setTimeout(function() {
    //       setHeaderNav("header_ctn header_scroll");
    //     }, 100);
    //   }
    //   prevScrollpos = currentScrollPos;
    // }
  });

  useEffect(() => {
    TimerScroll();
  }, []);

  return (
    <div className={headerNav}>
      <div 
        className="dummy_navbar" 
        onMouseEnter={() => {setTimer(true); setHeaderNav("header_ctn")}}>
      </div>
      {loggedIn ? (
        <NavbarLogin 
          loggedIn={loggedIn} 
          setLoggedIn={setButtonLoggedIn} 
          setHeaderNav={setHeaderNav}
          setTimer={setTimer}
          disableCart={cart}
          setAlert={setAlert}
          setOpenAlert={setOpenAlert}/>
      ) : (
        <Navbar 
          loggedIn={loggedIn} 
          setLoggedIn={setButtonLoggedIn} 
          setHeaderNav={setHeaderNav}
          setTimer={setTimer}
          setAlert={setAlert}
          setOpenAlert={setOpenAlert}/>
      )}
    </div>
  );
}