import React from 'react'
import "./TopBanner.css"
import bannerImg from "../Media/propertyTopBanner.jpg"

export default function TopBanner({title, size, inout}) {

    if (size === "reg") {
        return (
            <section className="property__topBanner">
                <img className='property__topBanner__img' src={bannerImg} alt=""/>
                <div className="property__topBanner__text">
                    <h1>{title}</h1>
                </div>
            </section>
        )
    }

    if (size === "big") {
        return (
            <section className="property__topBanner__big">
                <img className='property__topBanner__img' src={bannerImg} alt=""/>
                <div className="property__topBanner__text">
                    <h1>{title}</h1>
                    <div className="property__topBanner__text__navi">
                        <span>Home</span><span>|</span><span>{inout}</span>
                    </div>
                </div>
            </section>
        )
    }

}