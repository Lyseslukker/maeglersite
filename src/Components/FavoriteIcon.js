import React, {useContext} from 'react'
import {FaRegHeart, FaHeart} from "react-icons/fa"
import UserContext from './UserContext'



export default function FavoriteIcon({fav}) {
    console.log(fav)

    // <div className="houseCard__imgBox__iconBox" 
    // onClick={favoriteHandler}
    // >
    //     {favoriteCheckHandler.length > 0 ? <FaHeart /> : <FaRegHeart />}
    // </div>

    if (fav.length > 0) {
        return (
            <>
                <FaHeart />
            </>
        )
    }
    else {
        return (
            <>
                <FaRegHeart />
            </>
        )
    }
}