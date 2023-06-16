import React from 'react'
import "./TeamCard.css"
import {MdMail} from "react-icons/md"
import {FaLinkedinIn} from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function TeamCard({ data }) {
    return (
        <Link to={`/agentdetail/${data.id}`} className='teamCard'>
            <img src={data.image.formats.thumbnail.url} alt="" />
            <div className="teamCard__credentials">
                <h4>{data.name}</h4>
                <p>{data.title}</p>
                <div className="teamCard__logos">
                    <MdMail />
                    <FaLinkedinIn />
                </div>
            </div>
        </Link>
    )
}