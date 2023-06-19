import React, { useState, useEffect } from "react"
import {Route, Routes} from "react-router-dom"
import './App.css'
import Navigation from "./Components/Navigation"
import Home from "./Pages/Home/Home"
import Property from "./Pages/Property/Property"
import PropertyDetail from "./Pages/PropertyDetail/Propertydetail"
import PropertyDetailGallery from "./Pages/PropertyDetailGallery/PropertyDetailGallery"
import Favorite from "./Pages/Favorite/Favorite"
import Agent from "./Pages/Agent/Agent"
import AgentDetail from "./Pages/AgentDetail/AgentDetail"
import Contact from "./Pages/Contact/Contact"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Error from "./Pages/Error/Error"
// CONTEXT
import UserContext from "./Components/UserContext"
import TokenContext from "./Components/TokenContext"

// FAMER MOTION
import { AnimatePresence } from "framer-motion"

function App() {

  const [userLogin, setUserLogin] = useState(null)
  const [token, setToken] = useState(null)

  // if (Cookies.get('token') !== undefined) {
  //   fetch("https://dinmaegler.onrender.com/users/me", {
  //     "method": "GET",
  //     "headers": {
  //       "Authorization": `Bearer ${Cookies.get('token')}`
  //     }
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     setToken(Cookies.get('token'))
  //     setUserLogin(data)
  //   })
  //   .catch(err => console.error(err))
  // }

  useEffect(() => {
    console.log(userLogin)
    console.log(token)
  }, [userLogin, token]);


  return (
    <TokenContext.Provider value={{token, setToken}}>
      <UserContext.Provider value={{userLogin, setUserLogin}}>
        <AnimatePresence>
          <div className="App">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="agent" element={<Agent />} />
                    <Route path="agentdetail/:id" element={<AgentDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="favorite" element={<Favorite />} />
                    <Route path="login" element={<Login />} />
                    <Route path="property" element={<Property />} />
                    <Route path="propertydetail/:id" element={<PropertyDetail />} />
                    <Route path="propertydetailgallery" element={<PropertyDetailGallery />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
          </div>
        </AnimatePresence>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}








export default App;
