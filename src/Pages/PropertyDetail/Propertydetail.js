import React, {useState} from 'react'
import "./Propertydetail.css"
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {AiOutlinePicture} from "react-icons/ai"
import {FaPhoneAlt, FaPaperPlane} from "react-icons/fa"
import {IoLayersOutline, IoLocationOutline, IoHeartOutline} from "react-icons/io5"
import ImageGallery from '../../Components/ImageGallery'

export default function Propertydetail() {
  // TAKES QUERY FROM URL
  const {id} = useParams()

  // STATE FOR SHOWING/HIDING IMAGE GALLERY (in ImageGallery)
  const [imgGalleryStatus, setImgGalleryStatus] = useState("imgHide");

  const { isLoading, isError, data } = useQuery([id], () => {
    return fetch(`https://dinmaegler.onrender.com/homes/${id}`, {
              "method": "GET"
            })
            .then(response => response.json())
  })



  const showHideGallery = (e) => {
    if (imgGalleryStatus === "imgHide") {
      setImgGalleryStatus("")
      console.log("Showing it")
      return
    }
    if (imgGalleryStatus === "") {
      setImgGalleryStatus("imgHide")
      console.log("Hiding it")
      return
    }
  }



  if (isError) {
    return(
      <section>
        <h1 style={{textAlign: "center"}}>Error..</h1>
      </section>
    )
  }
  if (isLoading) {
    return(
      <section>
        <h1 style={{textAlign: "center"}}>Loading..</h1>
      </section>
    )
  }
  if (data) {
    // console.log(data)
    const cordinates = {
      long: data.long.toString(),
      lat: data.lat.toString()
    }

    return (
      <article className='propertydetail'>
        {/* HERO IMG */}
        <section className="propertydetail__heroBox"
          style={{
            backgroundImage: `url(${data.images[0].url})`, 
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
        </section>

        {/* TOP OVERVIEW */}
        <section className='propertydetail__topOverview'>
          {/* LEFT */}
          <div className="topOverview__left">
            <p>{data.adress1}</p>
            <div className="topOverview__left__grouped">
              <p>{data.postalcode}</p>
              <p>{data.city}</p>
            </div>
          </div>
          {/* MID */}
          <div className="topOverview__mid">
            <AiOutlinePicture className='topOverview__mid__logo' onClick={showHideGallery}  />
            <IoLayersOutline className='topOverview__mid__logo' />
            <IoLocationOutline className='topOverview__mid__logo' />
            <IoHeartOutline className='topOverview__mid__logo' />
          </div>
          {/* RIGHT */}
          <div className="topOverview__right">
            <p>Kr. {data.price.toLocaleString()}</p>
          </div>
        </section>

        <hr />

        <section className='propertydetail__houseDetails'>
          <div className="houseDetails__left">
            <div className="left__divider">
              <p>Bolig Areal:</p>
              <p>Rum/Værelser</p>
              <p>Type:</p>
            </div>
            <div className="left__divider">
              <p>{data.livingspace}</p>
              <p>{data.rooms}</p>
              <p>{data.type}</p>
            </div>
          </div>

          <div className="houseDetails__mid">
            <div className="mid__divider">
              <p>Kælder:</p>
              <p>Bygget:</p>
              <p>Energi Mærke:</p>
            </div>
            <div className="mid__divider">
              <p>{data.basementsize}</p>
              <p>{data.built}</p>
              <p>{data.energylabel}</p>
            </div>
          </div>
          
          <div className="houseDetails__right">
            <div className="right__divider">
              <p>Udbetaling:</p>
              <p>Brutto ex ejerudgift:</p>
              <p>Netto ex ejerudgift:</p>
              <p>Ejerudgifter:</p>
            </div>
            <div className="right__divider">
              <p>{data.payment}</p>
              <p>{data.gross}</p>
              <p>{data.netto}</p>
              <p>{data.cost}</p>
            </div>
          </div>
        </section>


        <section className='propertydetail__about'>
          <div className="about__text">
            <h3>Beskrivelse</h3>
            <p>Beskrivelse: {data.description}</p>
          </div>
          <div className="about__agent">
            <h3>Ansvarlig mægler</h3>
            <div className="agent__infoBox">
              <div className="agent__infoBox__imgBox">
                <img src={data.agent.image.url} alt="" />
              </div>
              <div className="agent__infoBox__text">
                <h3 className='infoBox__text__name'>{data.agent.name}</h3>
                <p className='infoBox__text__title'>{data.agent.title}</p>
                <hr />
                <p className='infoBox__text__phone'><FaPhoneAlt /> {data.agent.phone}</p>
                <p className='infoBox__text__email'><FaPaperPlane /> {data.agent.email}</p>
              </div>
            </div>
          </div>
        </section>

        <ImageGallery imgData={data.images} floorplan={data.floorplan.url} myimagestate={imgGalleryStatus} setimagestate={setImgGalleryStatus} cords={cordinates} />

      </article>
    )
  }

}
