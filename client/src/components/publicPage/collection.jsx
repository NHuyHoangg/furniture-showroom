import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/collection.css"

export default function Collection ( {site, springRecommend, summerRecommend, autumnRecommend, winterRecommend,} ) {

    const navigate = useNavigate();

    const RenderItems =()=>{
        let list = []
        for(let i=0; i<8; i++)
            list.push(
            <div className="col item">
                <div className="collection_img">
                    <img src="../img/autumn.jpg" alt="" />
                    <img src="../img/autumn2.jpg" alt="" />
                </div>
                <h1 className={site}>Name of item</h1>
                <p>$999</p>
            </div>)
        return list
    }

    return (
        <div className="collection_background">
            <div className="collection_wallpaper">
                <img src={"../img/collection-" + (site) + "1.jpg"} alt="" />
            </div>

            <div className="collection_part_1">
                <img src={"../img/collection-" + (site) + "2.jpg"} alt="image 1" className="collection_image_1" />
                <div className="collection_descr_1">
                    <div className={"collection_title " + site}>
                        <h1>{site.toUpperCase()}</h1>
                    </div>
                    <h1 className={site}>About collection</h1>
                    <p>The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR).</p>
                </div>

                <p className="collection_descr_2">There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). </p>
            
                <img src={"../img/collection-" + (site) + "3.jpg"} alt="image 2" className="collection_image_2" />

                <p className="collection_descr_3">There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). </p>

                <img src={"../img/collection-" + (site) + "4.jpg"} alt="image 3" className="collection_image_3" />
            </div>

            <div className="collection_part_2">
                <div className="collection_line"></div>
                <h1 className={site}>{site.toUpperCase()}</h1>
                <div className="row g-5 image">
                    <img src={"../img/collection-" + (site) + "5.jpg"} alt="" className="col image_item" />
                    <img src={"../img/collection-" + (site) + "6.jpg"} alt="" className="col image_item" />
                    <img src={"../img/collection-" + (site) + "7.jpg"} alt="" className="col image_item" />
                </div>
                <p className="collection_descr_4">There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time. The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). </p>
            </div>

            <div className="collection_part_3">
                <div className="collection_line"></div>
                <h1 className={site}>Feature items</h1>
                <button
                    className={"part_3_button " + (site)}
                    onClick={() => navigate("../product")}
                >
                    View all product
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    color="#473C38"
                    className="part_3_button_icon"
                    style={{ width: "30px", height: "30px"}}
                    >
                    <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                    />
                    </svg>
                </button>
                <div className="row g-5 items">
                    {site === 'spring' && springRecommend.map((value)=> {
                        return(
                            <div className="col item">
                                <div className="collection_img">
                                    <img src={value.media_0} alt="" />
                                    <img src={value.media_1} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                    {site === 'summer' && summerRecommend.map((value)=> {
                        return(
                            <div className="col item">
                                <div className="collection_img">
                                    <img src={value.media_0} alt="" />
                                    <img src={value.media_1} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                    {site === 'autumn' && autumnRecommend.map((value)=> {
                        return(
                            <div className="col item">
                                <div className="collection_img">
                                    <img src={value.media_0} alt="" />
                                    <img src={value.media_1} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                    {site === 'winter' && winterRecommend.map((value)=> {
                        return(
                            <div className="col item">
                                <div className="collection_img">
                                    <img src={value.media_0} alt="" />
                                    <img src={value.media_1} alt="" />
                                </div>
                                <h1 className={site}>{value.product_name}</h1>
                                <p>$ {value.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}