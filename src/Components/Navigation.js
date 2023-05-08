import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa"
import "./Navigation.css"
import logo from "../Media/logo.svg"


export default function Navigation() {
  return (
    <>

      <div className="topBox">

        <div className="topBox__infoBox">
          <div className="infoBox__contact">
            <p><FaPaperPlane /> 4000@dinmaegler.com</p>
            <p><FaPhoneAlt /> +45 7070 4000</p>
          </div>
          <div className="infoBox__login">
            <Link><FaUser /> Login</Link>
          </div>
        </div>

      </div>

      <div className="navigationBox">

        <div className="navigationBox__nav">
          <Link> <img src={logo} alt="" /> </Link>
          <nav>
            <Link>Boliger til salg</Link>
            <Link>Mæglere</Link>
            <Link>Mine favoriter</Link>
            <Link>Kontakt os</Link>
          </nav>
        </div>
        
      </div>

      <Outlet />
    </>
  )
}
