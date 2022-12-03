import React, { useState, useEffect, useRef } from "react";
import Iframe from 'react-iframe';
import "../../styles/aboutUs.css";

export default function AboutUs( {setAlert, setOpenAlert} ) {

  const [aboutUsDecs, setAboutUsDecs] = useState(false);

  const [muteVid, setMuteVid] = useState(false);

  const [inputEmail, setInputEmail] = useState('');

  const videoRef= useRef();

  useEffect(() => {
    videoRef.current.volume = 0.5;
  }, []);

  const handleSubmit = () => {

    setInputEmail('');

    setAlert({
        type: 'success', 
        message: 'Thanks for sending mail. Have a good day!'
    })

    setOpenAlert(true);

  }

  useEffect(() => {
    setTimeout(function() {
        setAboutUsDecs(true);
    }, 42500);
  }, []);

  return(
    <div className="aboutUs_container">
        <section className="aboutUs_intro-vid">
            <video autoPlay {...(muteVid && { muted: true })} ref={videoRef}>
                <source src="https://ik.imagekit.io/gyeviu0zo/reduceMore.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1669519034567" type="video/mp4"/>
            </video>
            <h1 className={aboutUsDecs && "show_decs"}>HIFURDEZ</h1>
            <p className={aboutUsDecs && "show_decs"}>Make your home become cozy and comfortable.</p>
            <div className="aboutUs_contact">
                <i className={"fa-brands fa-facebook " + (aboutUsDecs && "show_decs")}></i>
                <i className={"fa-brands fa-twitter " + (aboutUsDecs && "show_decs")}></i>
                <i className={"fa-brands fa-instagram " + (aboutUsDecs && "show_decs")}></i>
                <i className={
                        (!muteVid ? "fa-solid fa-volume-high " : "fa-solid fa-volume-xmark ") 
                        + "aboutUs_last_icon " 
                        + (aboutUsDecs ? "hide_decs" : "show_decs")} 
                    onClick={() => setMuteVid(!muteVid)}>
                </i>
            </div>
        </section>
        <section className="aboutUs_info">
            <div className="aboutUs_info_decs">
                <h2>MISSION</h2>
                <p>Focus on improving customer experience, The most enthusiastic, finest service, Guarantee harmonic relation between company benefit, customer experience and social responsibility, We are your reliable companion.</p>
            </div>
            <div className="aboutUs_info_decs">
                <h2>VISION</h2>
                <p>Our goal is to sell products with reasonable price and high quality. Our products will be sold at an reasonable price. We guarantee to offer you the highest quality products.  With the most extraordinary design.</p>
            </div>
            <div className="aboutUs_info_decs">
                <h2>GOAL</h2>
                <p>With the ambition to become one of your friend, a pioneer in the interior field, Hifurdez always tries to improve with Vietnamese elite and intellect. To accomplish that ambition, Hifurdez is committed to fulfill fully the core value proposed by our company "human - product - experience".</p>
            </div>
            <img src="../img/aboutUs1.jpg" alt="#" className="aboutUs_info_img" />
            <img src="../img/aboutUs2.jpg" alt="#" className="aboutUs_info_img" />
            <img src="../img/aboutUs3.jpg" alt="#" className="aboutUs_info_img" />
        </section>
        <section className="aboutUs_founder">
            <img src="../img/aboutUs4.jpg" alt="#" />
        </section>
        <section className="aboutUs_contact-us">
            <div className="aboutUs_contact-us_wrapper">
                <div className="aboutUs_contact-info">
                    <h2>CONTACT US</h2>
                    <div className="row aboutUs_row">
                        <li className="col-2">Address:</li>
                        <p className="col-10">268 Ly Thuong Kiet, Ward 14, District 10, Ho Chi Minh City</p>
                    </div>
                    <div className="row aboutUs_row">
                        <li className="col-2">Phone:</li>
                        <p className="col-10">+84 28 3864 7256</p>
                    </div>
                    <div className="row aboutUs_row">
                        <li className="col-2">Email:</li>
                        <p className="col-10">contact@hifurdez.com</p>
                    </div>
                </div>
                <textarea name="contact" id="contact" className="aboutUs_contact-info_sth" placeholder="Send us an email!" 
                            value={inputEmail} onChange={e => setInputEmail(e.target.value)}></textarea>
                <input type="submit" value="Submit" className="aboutUs_contact_submit" onClick={()=>handleSubmit()}></input>
                {/* <img src="#" alt="#" /> */}
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4034.3892892200206!2d106.65703957471843!3d10.770038316156603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1669346811687!5m2!1svi!2s" 
                        className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </section>
    </div>
  )
}