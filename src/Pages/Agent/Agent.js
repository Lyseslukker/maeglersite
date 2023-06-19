import React from 'react'
import "./Agent.css"
import { useQuery } from '@tanstack/react-query'
import TeamCard from '../../Components/TeamCard'
import TopBanner from '../../Components/TopBanner'
import { motion } from 'framer-motion'

export default function Agent() {

  const { isError, isLoading, data } = useQuery(["agents"], () => {
    return fetch("https://dinmaegler.onrender.com/agents").then(response => response.json())
  })

  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  if (isError) {
    <h1>Something went wrong..</h1>
  }
  if (isLoading) {
    <h1>Loading...</h1>
  }
  if (data) {
    return (
      <motion.article 
      initial={{opacity: 0, x: -10}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0}}
      transition={{easings: ["easeIn", "easeOut"], duration: 0.2}}
      className='agent'>
        <TopBanner title="Medarbejdere i Roskilde" size="reg" />
  
        <section className='agent__all'>
          {data.map((agent) => {
            return (
              <TeamCard key={agent.id} data={agent} />
            )
          })}
        </section>
      </motion.article>
    )
  }

}
