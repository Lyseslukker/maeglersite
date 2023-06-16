import React from 'react'
import "./Footer.css"
import logo from "../Media/logo.svg"
import { Link } from 'react-router-dom'
import {FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt} from "react-icons/fa"

export default function Footer() {
    return (
        <section className='footer'>

            <div className="footer__top">
                <img src={logo} alt="" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            </div>

            <div className="footer__buttom">
                <div className="footer__contact">
                    <div className="contact__phone">
                        <div className="contact__phone__logo"><FaPhoneAlt /></div>
                        <div className="contact__phone__text">
                            <p>Ring til os</p>
                            <p>+45 7070 4000</p>
                        </div>
                    </div>
                    <div className="contact__mail">
                        <div className="contact__mail__logo"><FaPaperPlane /></div>
                        <div className="contact__mail__text">
                            <p>Send en mail</p>
                            <p>4000@dinmaegler.com</p>
                        </div>
                    </div>
                    <div className="contact__gps">
                        <div className="contact__gps__logo"><FaMapMarkerAlt /></div>
                        <div className="contact__gps__text">
                            <p>Butik</p>
                            <p>Stændertorvet 78, 4000 Roskilde</p>
                        </div>
                    </div>
                    <p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                </div>

                <div className="footer__links">
                    <div className="links__list">
                        <h3>Quick Links</h3>
                        <Link>Boliger til salg</Link>
                        <Link>Mæglere</Link>
                        <Link>Kontakt os</Link>
                        <Link>Log ind / bliv bruger</Link>
                    </div>
                    <div className="links__memberOf">
                        <p className='memberOf__a'>Medlem af</p>
                        <p className='memberOf__b'>DMS</p>
                        <p className='memberOf__c'>Dansk Mægler Sammenslutning</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}