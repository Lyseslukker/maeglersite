import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa"
import "./Navigation.css"
import logo from "../Media/logo.svg"
import Footer from './Footer'
import UserContext from './UserContext'
import TokenContext from './TokenContext'
import Cookies from 'js-cookie'
import { motion } from 'framer-motion'


export default function Navigation() {

  const {userLogin, setUserLogin } = useContext(UserContext)
  const {token, setToken } = useContext(TokenContext)

  const loginHandler = () => {
    Cookies.remove('token')
    setUserLogin(null)
    setToken(null)
  }

  let componentKey = ""


  if (userLogin === null) {
    componentKey = "login"
  }
  if (userLogin !== null) {
    componentKey = "logout"
  }
  
  return (
    <>
      <div className="topBox">

        <div className="topBox__infoBox">
          <div className="infoBox__contact">
            <p><FaPaperPlane /> 4000@dinmaegler.com</p>
            <p><FaPhoneAlt /> +45 7070 4000</p>
          </div>
          <motion.div 
          key={componentKey}
          initial={{opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{opacity: 0, x: -30 }}
          transition={{delay: 0.2, duration: 1, type: "spring", bounce: 0.7 }}
          className="infoBox__login">
            {userLogin === null && <Link to="/login"><FaUser /> Login</Link>}
            {userLogin !== null && <p onClick={loginHandler}><FaUser /> Logud</p>}
          </motion.div>
        </div>

      </div>

      <div className="navigationBox">

        <div className="navigationBox__nav">
          <Link to="/"> <img src={logo} alt="" /> </Link>
          <nav>
            <Link to="/property">Boliger til salg</Link>
            <Link to="/agent">Mæglere</Link>
            <Link to="/favorite">Mine favoriter</Link>
            <Link to="/contact">Kontakt os</Link>
          </nav>
        </div>
        
      </div>

      <Outlet />

      <Footer />
    </>
  )



  // if (userLogin === null) {
  //   return (
  //     <>
  //       <div className="topBox">
  
  //         <div className="topBox__infoBox">
  //           <div className="infoBox__contact">
  //             <p><FaPaperPlane /> 4000@dinmaegler.com</p>
  //             <p><FaPhoneAlt /> +45 7070 4000</p>
  //           </div>
  //           <motion.div 
  //           initial={{opacity: 0, x: -50 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           exit={{opacity: 0, x: -30 }}
  //           transition={{delay: 0.2, duration: 1, type: "spring", bounce: 0.7 }}
  //           className="infoBox__login">
  //             <Link to="/login"><FaUser /> Login</Link>
  //           </motion.div>
  //         </div>
  
  //       </div>
  
  //       <div className="navigationBox">
  
  //         <div className="navigationBox__nav">
  //           <Link to="/"> <img src={logo} alt="" /> </Link>
  //           <nav>
  //             <Link to="/property">Boliger til salg</Link>
  //             <Link to="/agent">Mæglere</Link>
  //             <Link to="/favorite">Mine favoriter</Link>
  //             <Link to="/contact">Kontakt os</Link>
  //           </nav>
  //         </div>
          
  //       </div>
  
  //       <Outlet />
  
  //       <Footer />
  //     </>
  //   )
  // }

  // if (userLogin !== null) {
  //   return (
  //     <>
  //       <div className="topBox">
  
  //         <div className="topBox__infoBox">
  //           <div className="infoBox__contact">
  //             <p><FaPaperPlane /> 4000@dinmaegler.com</p>
  //             <p><FaPhoneAlt /> +45 7070 4000</p>
  //           </div>
  //           <motion.div 
  //           initial={{opacity: 0, x: -50 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           exit={{opacity: 0, x: -30 }}
  //           transition={{delay: 0.2, duration: 1, type: "spring", bounce: 0.7 }}
  //           className="infoBox__login">
  //             <p onClick={loginHandler}><FaUser /> Logud</p>
  //           </motion.div>
  //         </div>
  
  //       </div>
  
  //       <div className="navigationBox">
  
  //         <div className="navigationBox__nav">
  //           <Link to="/"> <img src={logo} alt="" /> </Link>
  //           <nav>
  //             <Link to="/property">Boliger til salg</Link>
  //             <Link to="/agent">Mæglere</Link>
  //             <Link to="/favorite">Mine favoriter</Link>
  //             <Link to="/contact">Kontakt os</Link>
  //           </nav>
  //         </div>
          
  //       </div>
  
  //       <Outlet />
  
  //       <Footer />
  //     </>
  //   )
  // }


}
