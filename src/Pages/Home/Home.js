import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <article className='home'>

      <section className='hero'>
        <h1>Søg efter din drømmebolig</h1>

        <div className="hero__search">
          <h2>Søg blandt 158 boliger til salg i 74 butikker</h2>
          <p>Hvad skal din næste bolig indeholde</p>
          <form>
            <input type="text" name="search" id="search" placeholder='Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende' />
            <button>Søg</button>
          </form>
        </div>
      </section>

    </article>
  )
}
