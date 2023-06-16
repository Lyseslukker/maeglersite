import React, {useContext, useState} from 'react'
import "./HouseCard.css"
import { Link } from 'react-router-dom'
import EnergyLabel from './EnergyLabel'
import UserContext from '../Components/UserContext'
import TokenContext from '../Components/TokenContext'
import FavoriteIcon from './FavoriteIcon'
import { motion } from 'framer-motion'


export default function HouseCard({ data, framerDelay }) {

    // CONTEXT
    const { userLogin, setUserLogin } = useContext(UserContext)
    const { token } = useContext(TokenContext)

    // ROOMS
    const sliced = data.rooms.slice(0, 1)

    // Loading
    const [loading, setLoading] = useState(false)


    
    /*=============================================
    =               NOT logged in                 =
    =============================================*/
    if (userLogin === null) {
        return (
            <motion.div
            initial={{opacity: 0, rotate: -30, y: -10}}
            animate={{opacity: 1, rotate: 0, y: 0}}
            transition={{ duration: 0.1, delay: framerDelay * 0.1}}
            >
                <Link to={`/propertydetail/${data.id}`} className='houseCard'>
                    <div style={{backgroundImage: `url(${data.images[0].formats.thumbnail.url})`}} className="houseCard__imgBox">
                        {/* IKKE LOGGET IND (intet icon vises) */}
                    </div>
                    <div className="houseCard__mid">
                        <h3 className='houseCard__street'>{data.adress1}</h3>
                        <div className="mid__info">
                            <span className='houseCard__city'>{data.city} </span>
                            <span> {data.postalcode}</span>
                        </div>
                        <div className="mid__info">
                            <span className='houseCard__type'><b>{data.type}</b> </span>
                            <span className='houseCard__Ownercost'>&#8226; Ejerudgift: {data.cost} kr.</span>
                        </div>
                    </div>
                    <div className="houseCard__bot">
                        <div className="houseCard__bot__left">
                            <EnergyLabel label={data.energylabel} />
                            <span className='left__room'>{sliced} værelser</span>
                            <span className='left__size'>{data.lotsize} m<sup>2</sup></span>
                        </div>
                        <p className='houseCard__bot__right'>Kr. {data.price.toLocaleString()}</p>
                    </div>
                </Link>
            </motion.div>
        )
    }


    /*=============================================
    =                  Logged in                  =
    =============================================*/
    if (userLogin !== null) {
        // CHECK IF THIS IS A FAVORITE
        const favoriteCheckHandler = userLogin.homes.filter((home) => {
            return home.id === data.id
        })

        
        const favoriteHandler = (e) => {
            // PREVENTS NAVIGATION OF '<Link />'
            e.preventDefault()
            setLoading(true)

            if (favoriteCheckHandler.length > 0) {
                const trimmedFavorites = userLogin.homes
                    .filter(home => home.id !== data.id)
                    .map(home => home.id)

                fetch(`https://dinmaegler.onrender.com/users/${userLogin.id}`, {
                    "method": "PUT",
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    "body": JSON.stringify({
                        "homes": trimmedFavorites
                    })
                })
                .then(response => response.json())
                .then((data) => {
                    setUserLogin(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
            }

            if (favoriteCheckHandler.length === 0) {
                const mappedFavorites = userLogin.homes.map((home) => {
                    return home.id
                })
                mappedFavorites.push(data.id)
    
                fetch(`https://dinmaegler.onrender.com/users/${userLogin.id}`, {
                    "method": "PUT",
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    "body": JSON.stringify({
                        "homes": mappedFavorites
                    })
                })
                .then(response => response.json())
                .then((data) => {
                    setUserLogin(data)
                    setLoading(false)
                    console.log(userLogin)
                })
                .catch(err => console.log(err))
            }

        }

        if (loading === true) {
            return (
                <Link to={`/propertydetail/${data.id}`} className='houseCard'>
                    <div style={{backgroundImage: `url(${data.images[0].formats.thumbnail.url})`}} className="houseCard__imgBox">
                        <div className="houseCard__imgBox__iconBox">
                            <span className="myIconLoader"></span>
                        </div>
                    </div>
                    <div className="houseCard__mid">
                        <h3 className='houseCard__street'>{data.adress1}</h3>
                        <div className="mid__info">
                            <span className='houseCard__city'>{data.city} </span>
                            <span> {data.postalcode}</span>
                        </div>
                        <div className="mid__info">
                            <span className='houseCard__type'><b>{data.type}</b> </span>
                            <span className='houseCard__Ownercost'>&#8226; Ejerudgift: {data.cost} kr.</span>
                        </div>
                    </div>
                    <div className="houseCard__bot">
                        <div className="houseCard__bot__left">
                            <EnergyLabel label={data.energylabel} />
                            <span className='left__room'>{sliced} værelser</span>
                            <span className='left__size'>{data.lotsize} m<sup>2</sup></span>
                        </div>
                        <p className='houseCard__bot__right'>Kr. {data.price.toLocaleString()}</p>
                    </div>
                </Link>
            )
        }

        if (loading === false) {
            return (
                <Link to={`/propertydetail/${data.id}`} className='houseCard'>
                    <div style={{backgroundImage: `url(${data.images[0].formats.thumbnail.url})`}} className="houseCard__imgBox">
                        <div className="houseCard__imgBox__iconBox" 
                        onClick={favoriteHandler}
                        >
                            <FavoriteIcon fav={favoriteCheckHandler} />
                        </div>
                    </div>
                    <div className="houseCard__mid">
                        <h3 className='houseCard__street'>{data.adress1}</h3>
                        <div className="mid__info">
                            <span className='houseCard__city'>{data.city} </span>
                            <span> {data.postalcode}</span>
                        </div>
                        <div className="mid__info">
                            <span className='houseCard__type'><b>{data.type}</b> </span>
                            <span className='houseCard__Ownercost'>&#8226; Ejerudgift: {data.cost} kr.</span>
                        </div>
                    </div>
                    <div className="houseCard__bot">
                        <div className="houseCard__bot__left">
                            <EnergyLabel label={data.energylabel} />
                            <span className='left__room'>{sliced} værelser</span>
                            <span className='left__size'>{data.lotsize} m<sup>2</sup></span>
                        </div>
                        <p className='houseCard__bot__right'>Kr. {data.price.toLocaleString()}</p>
                    </div>
                </Link>
            )
        }

    }



}