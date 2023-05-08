import React, { useState, useEffect } from "react"
import {Outlet, Route, Routes, Link} from "react-router-dom"
import { FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa"
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

function App() {

  const [data, setData] = useState();

  useEffect(() => {

    fetch("https://dinmaegler.onrender.com/homes", {
      "method": "GET"
    })
    .then(response => response.json())
    .then((resData) => {
      console.log(resData)
      setData(data)
    })
    .catch(err => console.error(err))

  }, []);



  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="agent" element={<Agent />} />
              <Route path="agentdetail" element={<AgentDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="favorite" element={<Favorite />} />
              <Route path="login" element={<Login />} />
              <Route path="property" element={<Property />} />
              <Route path="propertydetail" element={<PropertyDetail />} />
              <Route path="propertydetailgallery" element={<PropertyDetailGallery />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<Error />} />
          </Route>
      </Routes>

    </div>
  );
}

export default App;
