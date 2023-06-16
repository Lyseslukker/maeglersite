import React from 'react'
import { useQuery } from '@tanstack/react-query'
import HouseCard from '../../../Components/HouseCard'
import "./Home_Chosen.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home_Chosen() {


    const { isLoading, isError, data } = useQuery(['allHomes'], () => {
        return fetch("https://dinmaegler.onrender.com/homes?_limit=4&_start=1")
                    .then((res) => {return res.json()})
    })

    // useEffect(() => {
    //     console.log(data)
    // }, [data]);

    if (isError) {
        return (
            <section className='homeChosen'>
                <p>Something went wrong</p>
            </section>
        )
    }
    if (isLoading) {
        return (
            <section className='homeChosen'>
                <p>Server is snoozing .. wait 30s</p>
            </section>
        )
    }

    const parent = {
        hidden: {opacity: 0, x: -15},
        show: {opacity: 1, x: 0, transition: {
            staggerChildren: 0.1,
            delayChildren: 1,
        }}
    }
    
    if (data) {
        return (
            <section className='homeChosen'>
                <div className="homeChosen__header">
                    <h3>Udvalgte boliger</h3>
                    <p>There are many variations of passages of Lorem Ipsum available but the this in<br/> majority have suffered alteration in some</p>
                </div>
                <motion.div 
                variants={parent}
                initial="hidden"
                animate="show"
                className="homeChosen__houses">
                    {data.map((house) => {
                        return (
                            <HouseCard key={house.id} data={house} />
                        )
                    })}
                </motion.div>
                <Link to="/property" className='homeChosen__btn'>Se alle boliger</Link>
            </section>
        )
    }
}