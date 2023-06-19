import React from 'react'
import "./Home.css"
import {GiTwoCoins} from "react-icons/gi"
import {BsFillHouseHeartFill, BsBuildingsFill, BsApple} from "react-icons/bs"
import {MdPlace, MdOutlineRealEstateAgent} from "react-icons/md"
import {HiArrowRight} from "react-icons/hi"
import {FaGooglePlay} from "react-icons/fa"
import phoneLeft from "../../Media/phoneLeft.png"
import phoneRight from "../../Media/phoneRight.png"
import HOME_CHOSEN from './Home_Chosen/Home_Chosen'
import HOME_TEAM from './Home_Team/Home_Team'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {


  return (
    <motion.article 
    initial={{opacity: 0, x: -10,}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0}}
    transition={{easings: ["easeIn", "easeOut"], duration: 0.2}}
    className='home'>

      {/* HERO */}
      <section className='home__hero'>
        <div className="hero__backgroundImage"></div>
        <h1>Søg efter din drømmebolig</h1>
        <div className="hero__search">
          <h2>Søg blandt 158 boliger til salg i 74 butikker</h2>
          <p>Hvad skal din næste bolig indeholde</p>
          <form className='search__form'>
            <input type="text" name="search" id="search" placeholder='Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende' />
            <Link className='search__form__btn' to="/property">Søg</Link>
          </form>
        </div>
      </section>

      {/* INFORMATION */}
      <section className='home__info'>
        {/* TOP */}
        <div className="info__top">
          <div className="top__imgBox">
            <div className="imgBox__image">
              <div className="image__border">
                <div className="border__innerBox">
                  <h3>38+</h3>
                  <p>års mægler-efaring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="top__text">
            <div className="text__top">
              <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
              <p>Det synes vi siger noget om os!</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="text__bot">
              <div className="bot__left">
                <div className="left__box">
                  <GiTwoCoins />
                </div>
                <div className="left__text">
                  <p>4829</p>
                  <p>boliger solgt</p>
                </div>
              </div>
              <div className="bot__right">
                <div className="right__box">
                  <BsFillHouseHeartFill />
                </div>
                <div className="right__text">
                  <p>157</p>
                  <p>boliger til salg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            
        
        {/* BOT */}
        <div className="info__bot">
          <div className="bot__box">
            <div className="box__logo"><div><BsBuildingsFill /></div></div>
            <div className="box__text">
              <h3>Bestil et salgstjek</h3>
              <p>Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
            </div>
          </div>
          <div className="bot__box">
            <div className="box__logo"><div><MdPlace /></div></div>
            <div className="box__text">
              <h3>74 butikker</h3>
              <p>Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
            </div>
          </div>
          <div className="bot__box">
            <div className="box__logo"><div><MdOutlineRealEstateAgent /></div></div>
            <div className="box__text">
              <h3>Tilmeld køberkartotek</h3>
              <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
            </div>
          </div>
        </div>
      </section>

      <HOME_CHOSEN />

      <section className='home__newsletter'>
        <div className="newsletter__imgBox"></div>
        <div className="newsletter__signup">
          <p>Tilmeld dig vores nyhedsbrev og <br/> hold dig opdateret på boligmarkedet</p>
          <form>
            <input type="text" name="newsletter" id="newsletter" placeholder='Indtast din email adresse' />
            <button type="submit"><HiArrowRight /></button>
          </form>
        </div>
      </section>

      <HOME_TEAM />

      <section className='home__mobileBanner'>
        {/* LEFT */}
        <div className="mobileBanner__left">
          <h2>Hold dig opdateret<br/> på salgsprocessen</h2>
          <p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
          <div className="left__btn">
            <button className='btn__button btn__play'><FaGooglePlay /> Google Play</button>
            <button className='btn__button btn__apple'><BsApple /> Apple Store</button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="mobileBanner__right">
          <img src={phoneLeft} alt="" />
          <img src={phoneRight} alt="" />
        </div>
      </section>

    </motion.article>
  )
}
