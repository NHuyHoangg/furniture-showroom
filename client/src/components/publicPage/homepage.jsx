import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/homepage.css";

export default function Homepage( {site, setSite, collectionProduct, setFilterCollection} ) {
  const navigate = useNavigate();

  const [widthTracer, setWidthTracer] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidthTracer(window.innerWidth);
  } 

  return (
    <div className="homepage_background">
      <div className="row g-0 homepage_introduce">
        <div className="col-5">
          <div className="introduce_title">
            <div className="title_sub-name">Showroom</div>
            <div className="title_name">HIFURDEZ</div>
            <div className="title_descr">High-end furniture design</div>
          </div>
          {widthTracer > 1400 && 
            <div className="introduce_slogan">
              <p>Modern</p>
              <p>Comfort</p>
              <p>Coziness</p>
              <div className="slogan_icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>}
        </div>

        <div className="col-7 introduce_image">
          <img src="./img/homepageIntroduce.jpg" alt="wallpaper" /> 
        </div>

      </div>
      
      {widthTracer > 1400 && 
        <div className="introduce_scroll">
          <p>SCROLL</p>
          <div></div>
        </div>}

      <div id="collection" className="collection_container">

        <div className="homepage_spring">
          {widthTracer > 1800 &&
            <div className="topic_image_1">
              <img src="../img/spring12.jpg" alt="" />
            </div>}
          <div className="topic_image_2">
            <img src="../img/spring2.jpg" alt="" />
          </div>
          
          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">SPRING</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button
            className="spring collection_button" 
            onClick={() => {
              setSite('spring');
              setFilterCollection(collectionProduct[1]);
              navigate("../collection-detail/spring")
            }
            }>
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#473C38"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>
        </div>

        <div className="homepage_summer">
          {widthTracer > 1400 && <div className="homepage_summer_scroll"></div>}

          <div className="topic_image_1">
            <img src="../img/homepageSummer.jpg" alt="" />
          </div>

          {widthTracer > 1800 &&
            <div className="topic_image_2">
              <img src="../img/homepageSummer1.jpg" alt="" />
            </div>}

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">SUMMER</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button 
            className="summer collection_button"
            onClick={() => {
              setSite('summer');
              setFilterCollection(collectionProduct[2]);
              navigate("collection-detail/summer")}
            }
          >
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#473C38"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>

        </div>

        <div className="homepage_autumn">
          {widthTracer > 1400 && <div className="homepage_autumn_scroll"></div>}

          {widthTracer > 1800 && 
            <div className="topic_image_1">
              <img src="../img/autumn2.jpg" alt="" />
            </div>}

          <div className="topic_image_2">
            <img src="../img/autumn7.jpg" alt="" />
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">AUTUMN</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button 
            className="autumn collection_button"
            onClick={() => {
              setSite('autumn');
              setFilterCollection(collectionProduct[1]);
              navigate("collection-detail/autumn")}
            }
          >
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#F0EAE2"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>
        </div>

        <div className="homepage_winter">
          {widthTracer > 1400 && <div className="homepage_winter_scroll"></div>}

          {widthTracer > 1800 &&
            <div className="topic_image_1">
              <img src="../img/winter14.jpg" alt="" />
            </div>}

          <div className="topic_image_2">
            <img src="../img/winter15.jpg" alt="" />
          </div>

          <div className="topic_body">
            <div className="title_sub-name">Collection</div>
            <div className="title_name">WINTER</div>
            <div className="title_descr">
            The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).
            </div>
          </div>

          <button 
            className="winter collection_button"
            onClick={() => {
              setSite('winter');
              setFilterCollection(collectionProduct[4]);
              navigate("collection-detail/winter")}
            }
          >
            View all collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#473C38"
              className="collection_button_icon"
              style={{ width: "30px", height: "30px"}}
              >
              <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
              />
              </svg>
          </button>
        </div>
      </div>
    </div>
  );
}