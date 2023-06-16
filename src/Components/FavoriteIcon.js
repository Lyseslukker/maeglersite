import React from 'react'
import {FaRegHeart, FaHeart} from "react-icons/fa"



export default function FavoriteIcon({fav}) {

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