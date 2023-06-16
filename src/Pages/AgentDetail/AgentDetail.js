import React, { useEffect } from 'react'
import "./AgentDetail.css"
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {FaPhoneAlt, FaPaperPlane} from "react-icons/fa"

export default function AgentDetail() {

  const {id} = useParams()

  console.log(id)

  const {isError, isLoading, data} = useQuery(["agentdetail", id], () => {
    return fetch(`https://dinmaegler.onrender.com/agents/${id}`).then(response => response.json())
  })

  useEffect(() => {
    console.log(data)
  }, [data]);


  const submitHandler = (e) => {
    e.preventDefault()
    let tempObject = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    }
    console.log(tempObject)
  }

  if (isError) {
    return <h1>Something went wrong...</h1>
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (data) {
    return (
      <article className='agentdetail'>
        <section className="agentdetail__topBanner">
          <div className="agentdetail__topBanner__imgBox"></div>
          <div className="agentdetail__topBanner__text">
            <h1>Kontakt en medarbejder</h1>
          </div>
        </section>
  
  
        <section className='agentdetail__general'>
          {/* LEFT */}
          <div className="general__contact">
            <div className="contact__topBox">
              <div className="topBox__imgBox"
                style={{backgroundImage: `url(${data.image.url})`, backgroundSize: "cover", backgroundPosition: "center"}}
              ></div>

              <div className="topBox__info">
                <h3 className='info__name'>{data.name}</h3>
                <p className='info__title'>{data.title}</p>
                <hr style={{height: "1px", width: "10%", alignSelf: "center", border: "solid 1px #162A41"}} />
                <div className="info__phoneBox">
                  <FaPhoneAlt style={{ color: "#162A41" }} />
                  <p className='phoneBox__phone'>{data.phone}</p>
                </div>
                <div className="info__emailBox">
                  <FaPaperPlane style={{ color: "#162A41" }} />
                  <p className='emailBox__email'>{data.email}</p>
                </div>
              </div>
            </div>

            <div className="contact__midBox">
              <h3 className='midBox__about'>Om {data.name}</h3>
              <hr style={{width: "10%", border: "solid 1px #162A41"}} />
              <p className='midBox__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem soluta sequi quisquam perspiciatis, possimus incidunt deserunt at unde repudiandae facere autem? Harum itaque consequatur cumque unde vel aperiam nemo labore dicta quae quidem, omnis tempore neque non repellat commodi qui, laudantium explicabo? Quas fuga necessitatibus blanditiis tenetur assumenda ab repudiandae esse pariatur quos! Ipsum itaque, commodi quis quod tempora, doloremque fugit unde voluptatum numquam id quidem voluptatibus quae officia architecto vero omnis, odit ratione!</p>
            </div>

            <div className="contact__form">
              <h4>Kontakt {data.name}</h4>
              <hr style={{height: "1px", width: "10%", alignSelf: "center", border: "solid 1px #162A41", margin: "1vw 0"}} />
              {/* FORM */}
              <form className='form__form' onSubmit={submitHandler}>
                <div className="form__nameEmail">
                  <div className="nameEmail__name">
                    <label htmlFor="name">Navn</label>
                    <input type="text" name="name" id="name" placeholder='Indtast navn' />
                  </div>

                  <div className="nameEmail__email">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='Indtast email' />
                  </div>
                </div>

                <div className="form__subject">
                  <label htmlFor="subject">Emne</label>
                  <input type="text" name="subject" id="subject" placeholder='Hvad drejer din henvendelse om?' />
                </div>

                <div className="form__message">
                  <label htmlFor="message">Besked</label>
                  <input type="text" name="message" id="message" placeholder='Skriv din besked her...' />
                </div>

                <button className='form__btn' type="submit">Send besked</button>
              </form>
            </div>
          </div>
  
          {/* RIGHT */}
          <div className="general__extra">
            <div className="extra__search">
              <h3>Søg ejendom</h3>
              <div className="search__inputBox">
                <input type="text" name="dummy" id="dummy" />
              </div>
            </div>

            <div className="extra__banner">
              <div className="banner__text">
                <p>Find Den Bedste Ejendom Til Leje eller Køb</p>
              </div>
              <hr />
              <div className="banner__CTA">
                <p>Kontakt os nu</p>
                <p>+00 123 456 789</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    )
  }
}
