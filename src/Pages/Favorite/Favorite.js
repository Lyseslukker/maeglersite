import React, {useContext, useState} from 'react'
import "./Favorite.css"
import UserContext from '../../Components/UserContext'
import TokenContext from '../../Components/TokenContext'
import {IoWarning} from "react-icons/io5"
import {BiSearch} from "react-icons/bi"
import TopBanner from '../../Components/TopBanner'
import { Link } from 'react-router-dom'
import EnergyLabel from '../../Components/EnergyLabel'


export default function Favorite() {

  // CONTEXT
  const { userLogin, setUserLogin } = useContext(UserContext)
  const { token, setToken } = useContext(TokenContext)

  const [loading, setLoading] = useState(false);


  const searchFormDeny = (e) => { 
    e.preventDefault()

    console.log(e.target.search.value)
  }

  const removeFavoriteHandler = (e) => {
    const favoriteId = e.target.getAttribute("favoriteid")

    const filteredOff = userLogin.homes
      .filter((home) => {
        return home.id !== favoriteId
      })
      .map((home) => {
        return home.id
      })

    console.log(filteredOff)
    
    setLoading(true)
    fetch(`https://dinmaegler.onrender.com/users/${userLogin.id}`, {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      "body": JSON.stringify({
        "homes": filteredOff
      })
    })
    .then(response => response.json())
    .then((data) => {
      setLoading(false)
      setUserLogin(data)
    })
    .catch(err => console.error(err))
  }


  // NOT LOGGED IN
  if (userLogin === null) {
    return (
      <section className='register'>
        <TopBanner title="Mine Favoritboliger" size="reg" />
        <div className="register__warning">
          <div className="warning__box">
            <div className="box__icon"><IoWarning className='warning__icon' /></div>
            <p className='warning__box__text'>Du er ikke logget ind.</p>
          </div>

          <div className="register__resolve">
            <Link to="/login" className='resolve__btn resolve__login'>Login</Link>
            <Link to="/register" className='resolve__btn resolve__signup'>Opret bruger</Link>
          </div>
        </div>

      </section>
    )
  }

  // LOGGED IN
  if (userLogin !== null) {
    console.log(userLogin.homes)    
    
    return (
      <section className='favoriteHomes'>
        <TopBanner title="Mine favoritboliger" size="reg" />

        <form onSubmit={searchFormDeny} className='favoriteHomes__form'>
          <div className="form__icon ">
            <BiSearch />
          </div>
          <input className='form__input' type="text" name="search" id="search" placeholder='Søg i favoritter' />
        </form>

        <hr style={{margin: "2vw 10vw"}}/>

        <div className="favoriteHomes__homes">
          {userLogin.homes.map((home) => {
            const sliced = home.rooms.slice(0, 1)
            return (
              <div key={home.id} className="homes__home">
                <div className="home__imgBox"
                style={{
                  backgroundImage: `url(${home.images[0].url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  {/* <img src={home.images[0].url} alt="" /> */}
                </div>
                <div className="home__headings">
                  <h2>{home.adress1}</h2>
                  <div className="headings__postal">
                    <span>{home.postalcode} {home.city}</span>
                  </div>
                  <div className="headings__type">
                    <span className='type__t'>{home.type}</span>
                    <span className='type__dot'>&#183;</span>
                    <span className='type__cost'>Ejerudgift: {home.cost} kr.</span>
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="home__rightGrp">
                  <div className="rightGrp__info">
                    <EnergyLabel label={home.energylabel} />
                    <p>{sliced} værelser &#183; {home.lotsize} m<sup>2</sup></p>
                  </div>
                  <div className="rightGrp__price">
                    <p>Kr. {home.price.toLocaleString()}</p>
                  </div>
                  <div className="rightGrp__btn">
                    {loading ?
                      <button><span className="myFavoriteRemoveLoader"></span></button>
                      : <button favoriteid={home.id} onClick={removeFavoriteHandler}>Fjern fra favoritter</button>
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
