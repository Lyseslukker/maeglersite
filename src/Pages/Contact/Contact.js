import React from 'react'
import "./Contact.css"
import TopBanner from '../../Components/TopBanner'
import {BsTelephoneFill} from "react-icons/bs"
import {FaPaperPlane,FaMapMarkerAlt} from "react-icons/fa"
import { motion } from 'framer-motion'


export default function Contact() {



  const formHandler = (e) => {
    e.preventDefault()
    const formInput = e.target
    const formInfo = {
      name: formInput.name.value,
      email: formInput.email.value,
      subject: formInput.subject.value,
      message: formInput.message.value,
      subscription: formInput.sub.checked
    }
    console.log(formInfo)
  }


  return (
    <motion.section 
    initial={{opacity: 0, x: -10,}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0}}
    transition={{easings: ["easeIn", "easeOut"], duration: 0.2}}
    className='contact'>
      <TopBanner title="Kontakt os" size="reg" />

      <div className="contact__mid">
        <div className="mid__top">
          <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
          <hr />
          <p>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
        </div>

        <div className="contact__wrapper">

          <form onSubmit={formHandler} className='mid__form'>
            <div className="form__nameBox">
              <label htmlFor="name">Navn</label>
              <input type="text" name="name" id="name" placeholder='Indtast dit navn' />
            </div>

            <div className="form__emailBox">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Indtast din email' />
            </div>

            <div className="form__subjectBox">
              <label htmlFor="subject">Emne</label>
              <input type="text" name="subject" id="subject" placeholder='Indtast emne' />
            </div>

            <div className="form__messageBox">
              <label htmlFor="message">Besked</label>
              <textarea type="text" name="message" id="message"  placeholder='Indtast din besked...' />
            </div>

            <div className="form__newsletterBox">
              <input type="checkbox" name="sub" id="sub" />
              <label htmlFor="sub">Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</label>
            </div>

            <button className='form__submit' type="submit">Send besked</button>
          </form>

          <div className="contact__mid__info">
            <div className="info__phone mid__info__card">
              <div className="info__card__icon">
                <BsTelephoneFill className=''/>
              </div>
              <h3>Ring til os</h3>
              <p>+45 7070 4000</p>
            </div>

            <hr />

            <div className="info__email mid__info__card">
              <div className="info__card__icon">
                <FaPaperPlane />
              </div>
              <h3>Send en mail</h3>
              <p>4000@dinmaegler.dk</p>
            </div>

            <hr />

            <div className="info__place mid__info__card">
              <div className="info__card__icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className='info__card__header'>Besøg butikken</h3>
              <p className='info__card__paragraph'>Stændertorvet 78,<br />4000 Roskilde</p>
            </div>
          </div>

        </div>
      </div>


      {/* <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${cords.lat}!2d${cords.long}!3d${cords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1684087959995!5m2!1sda!2sdk&zoom=18&maptype=satellite`}
        style={{width: "600px", height: "450px"}}
        allowFullScreen={true}
        loading="lazy"
      ></iframe> */}

      

    </motion.section>
  )
}
