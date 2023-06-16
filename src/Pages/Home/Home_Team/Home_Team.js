import React from 'react'
import "./Home_Team.css"
import TeamCard from '../../../Components/TeamCard'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function Home_Team() {

    const {isLoading, isError, data} = useQuery(['team'], () => {
        return fetch("https://dinmaegler.onrender.com/agents?_limit=3", {
                "method": "GET"
                })
                .then(res => res.json())
    })

    // useEffect(() => {
    //     console.log(data)
    // }, [data]);


    if (isError) {
        return (
            <section className='homeTeam'>
                <h1>Error ...</h1>
            </section>
        )
    }

    if (isLoading) {
        return (
            <section className='homeTeam'>
                <h1>Server is snoozing .. wait 30s</h1>
            </section>
        )
    }

    if (data) {
        return (
            <section className='homeTeam'>
                <h3>Mød vores engagerede medarbejdere</h3>
                <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
                <div className="homeTeam__team">
                    {data.map((member) => {
                        return (
                            <TeamCard key={member.id} data={member} />
                        )
                    })}
                </div>
                <Link to="/agent" className='homeTeam__btn'>Se alle mæglere</Link>
            </section>
        )
    }
    
    
}