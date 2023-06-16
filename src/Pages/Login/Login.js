import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import UserContext from '../../Components/UserContext'
import TokenContext from '../../Components/TokenContext'
import "./Login.css"
import TopBanner from '../../Components/TopBanner'
import Cookies from 'js-cookie'

export default function Login() {

  

  const { userLogin, setUserLogin } = useContext(UserContext)
  const { token, setToken } = useContext(TokenContext)

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  
  // SUBMITHANDLER
  const submitHandler = (e) => {
    e.preventDefault()

    const login = {
      identifier: e.target.email.value,
      password: e.target.password.value
    }
    const stringed = JSON.stringify(login)

    setLoading(true)
    fetch("https://dinmaegler.onrender.com/auth/local", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": stringed
    })
    // Process Response
    .then((response) => {
      console.log("First response: OK")
      return response.json()
    })
    // Manipulate the Data
    .then((data) => {
      console.log("Second response: OK")
      return data
    })
    // Process the DATA
    .then((final) => {
      if (final.error === undefined) {
        console.log("Should log in")
      }
      if (final.error !== undefined) {
        throw new Error("Forkert brugernavn eller password")
      }
      setLoading(false)
      setUserLogin(final.user)
      setToken(final.jwt)
    })
    .catch((err) => {
      console.log("Error Happend")
      setLoading(false)
      setError(true)
    })
  }




  if (userLogin === null) {
    if (loading === true) {
      return (
        <div className="myLoader">
          <span className="loader"></span>
        </div>
      )
    }
    if (error === true) {
      return (
        <div className='login'>
  
          <TopBanner title="Login" size="big" inout="Login" />

          <div className="login__loginBox">
            <h1>Log ind på din konto</h1>
            <p className='forkertLogin'>Forkert Email eller Password</p>
            <form className='loginBox__form' method="post" onSubmit={submitHandler}>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" placeholder='Email' />
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" placeholder='Password' />
              <button type="submit">Log ind</button>
            </form>

            <div className="loginBox__SoMe">
              <p>Log ind med</p>
              <div className="SoMe__btns">
                <button className='SoMe__btns__btn'
                style={{backgroundColor: "#DD4B39"}}>Google</button>
                <button className='SoMe__btns__btn'
                style={{backgroundColor: "#3B5999"}}>Facebook</button>
                <button className='SoMe__btns__btn'
                style={{backgroundColor: "#162A41"}}>Twitter</button>
              </div>
            </div>

            <div className="loginBox__signup">
              <span>Har du ikke en konto? </span>
              <Link to="/register">Opret bruger.</Link>
            </div>

          </div>
        </div>
      )
    }
    else {
      return (
        <div className='login'>
  
          <TopBanner title="Login" size="big" inout="Login" />
  
          <div className="login__loginBox">
            <h1>Log ind på din konto</h1>
            <form className='loginBox__form' method="post" onSubmit={submitHandler}>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" placeholder='Email' />
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" placeholder='Password' />
              <button type="submit">Log ind</button>
            </form>
  
            <div className="loginBox__SoMe">
              <p>Log ind med</p>
              <div className="SoMe__btns">
                <button className='SoMe__btns__btn'
                style={{backgroundColor: "#DD4B39"}}>Google</button>
                <button className='SoMe__btns__btn'
                style={{backgroundColor: "#3B5999"}}>Facebook</button>
                <button className='SoMe__btns__btn'
                style={{backgroundColor: "#162A41"}}>Twitter</button>
              </div>
            </div>
  
            <div className="loginBox__signup">
              <span>Har du ikke en konto? </span>
              <Link to="/register">Opret bruger.</Link>
            </div>
  
          </div>
        </div>
      )
    }
  }


  if (userLogin !== null) {
    return (
      <Navigate to="/" />
    )
  }

}
