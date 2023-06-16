import React, {useState} from 'react'
import { useQueries } from '@tanstack/react-query';
import "./Property.css"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FilteredPropertys from './Components/FilteredPropertys';
import logo from "../../Media/logo.svg"
import TopBanner from '../../Components/TopBanner';

export default function Property() {

  // SLIDER
  const [sliderValue, setSliderValue] = useState([0, 12000000]);
  const [typeValue, setTypeValue] = useState("Alle");
  
  // SLIDER
  const sliderHandler = (e) => {
    setSliderValue(e)
  }

  // PROPERTY TYPE
  const typeHandler = (e) => {
    setTypeValue(() => e.target.value)
  }  


  // PARALELLE QUERIES WITH TANSTACK
  const [all, type] = useQueries({
    queries: [
      {
        queryKey: ["all"],
        queryFn: () => {
          return fetch("https://dinmaegler.onrender.com/homes").then(response => response.json())
        }
      },
      {
        queryKey: ["type", typeValue],
        queryFn: () => {
          return fetch(`https://dinmaegler.onrender.com/homes?type_eq=${typeValue}`).then(response => response.json())
        }
      }
    ]
  })

  // useEffect(() => {
  //   console.log("This is all: ", all.data)
  //   console.log("This is type: ", type.data)
  // }, [all, type]);
  
  // ALL
  if (typeValue === "Alle") {
    // ERROR
    if (all.isError) {
      return (
        <h1>Something went wrong..</h1>
      )
    }
    // LOADING
    if (all.isLoading) {
      return (
        <article className='property'>
    
          <TopBanner title="Boliger til salg" size="reg"/>

          <section className='property__formSearch'>
            <h2>Søg efter dit drømmehus</h2>
            <div className="formSearch__input">
    
              <div className="input__ejendomstype">
                <label htmlFor="input__searchHome">Ejendomstype: </label>
                <select onChange={typeHandler} name="input__searchHome" id="input__searchHome">
                  <option defaultValue="Alle">Alle</option>
                  <option value="Ejerlejlighed">Ejerlejlighed</option>
                  <option value="Villa">Villa</option>
                  <option value="Landsejendom">Landsejendom</option>
                  <option value="Byhus">Byhus</option>
                </select>
              </div>
    
              <div className="input__pris">
                <label htmlFor="pris__slider">Pris-interval</label>
                <Slider className='pris__slider' range min={0} max={12000000} defaultValue={[0, 12000000]} onChange={sliderHandler}
                step={500000}
                trackStyle={{backgroundColor: "gray"}}
                handleStyle={[
                  {backgroundColor: "gray", borderColor: "gray"},
                  {backgroundColor: "gray", borderColor: "gray"}
                ]}
                />
                <div className="pris__fromTo">
                  <p>{sliderValue[0].toLocaleString()} kr.</p>
                  <p>{sliderValue[1].toLocaleString()} kr.</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className='property__houses__loading'>
            <img src={logo} alt="" style={{width: "30vw"}}/>
          </section>
        </article>
      )
    }
    // READY DATA
    if (all.data) {
      return (
        <article className='property'>
          <TopBanner title="Boliger til salg" size="reg"/>
    
          <section className='property__formSearch'>
            <h2>Søg efter dit drømmehus</h2>
            <div className="formSearch__input">
    
              <div className="input__ejendomstype">
                <label htmlFor="input__searchHome">Ejendomstype: </label>
                <select onChange={typeHandler} name="input__searchHome" id="input__searchHome">
                  <option defaultValue="Alle">Alle</option>
                  <option value="Ejerlejlighed">Ejerlejlighed</option>
                  <option value="Villa">Villa</option>
                  <option value="Landsejendom">Landsejendom</option>
                  <option value="Byhus">Byhus</option>
                </select>
              </div>
    
              <div className="input__pris">
                <label htmlFor="pris__slider">Pris-interval</label>
                <Slider className='pris__slider' range min={0} max={12000000} defaultValue={[0, 12000000]} onChange={sliderHandler}
                step={500000}
                trackStyle={{backgroundColor: "gray"}}
                handleStyle={[
                  {backgroundColor: "gray", borderColor: "gray"},
                  {backgroundColor: "gray", borderColor: "gray"}
                ]}
                />
                <div className="pris__fromTo">
                  <p>{sliderValue[0].toLocaleString()} kr.</p>
                  <p>{sliderValue[1].toLocaleString()} kr.</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className='property__houses'>
            <FilteredPropertys houses={all.data} pricerange={sliderValue} type={typeValue} />
          </section>
        </article>
      )
    }
  }
  // TYPE
  if (typeValue !== "Alle") {

    if (type.isError) {
      return (
        <h1>Something went wrong..</h1>
      )
    }
    if (type.isLoading) {
      return (
        <article className='property'>
    
          <TopBanner title="Boliger til salg" size="reg"/>
    
          <section className='property__formSearch'>
            <h2>Søg efter dit drømmehus</h2>
            <div className="formSearch__input">
    
              <div className="input__ejendomstype">
                <label htmlFor="input__searchHome">Ejendomstype: </label>
                <select value={typeValue} onChange={typeHandler} name="input__searchHome" id="input__searchHome">
                  <option value="Alle">Alle</option>
                  <option value="Ejerlejlighed">Ejerlejlighed</option>
                  <option value="Villa">Villa</option>
                  <option value="Landsejendom">Landsejendom</option>
                  <option value="Byhus">Byhus</option>
                </select>
              </div>
    
              <div className="input__pris">
                <label htmlFor="pris__slider">Pris-interval</label>
                <Slider className='pris__slider' range min={0} max={12000000} defaultValue={[0, 12000000]} onChange={sliderHandler}
                step={500000}
                trackStyle={{backgroundColor: "gray"}}
                handleStyle={[
                  {backgroundColor: "gray", borderColor: "gray"},
                  {backgroundColor: "gray", borderColor: "gray"}
                ]}
                />
                <div className="pris__fromTo">
                  <p>{sliderValue[0].toLocaleString()} kr.</p>
                  <p>{sliderValue[1].toLocaleString()} kr.</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className='property__houses__loading'>
            <img src={logo} alt="" style={{width: "30vw"}}/>
          </section>
        </article>
      )
    }
    if (type.data) {
      return (
        <article className='property'>
    
          <TopBanner title="Boliger til salg" size="reg"/>
    
          <section className='property__formSearch'>
            <h2>Søg efter dit drømmehus</h2>
            <div className="formSearch__input">
    
              <div className="input__ejendomstype">
                <label htmlFor="input__searchHome">Ejendomstype: </label>
                <select value={typeValue} onChange={typeHandler} name="input__searchHome" id="input__searchHome">
                  <option value="Alle">Alle</option>
                  <option value="Ejerlejlighed">Ejerlejlighed</option>
                  <option value="Villa">Villa</option>
                  <option value="Landsejendom">Landsejendom</option>
                  <option value="Byhus">Byhus</option>
                </select>
              </div>
    
              <div className="input__pris">
                <label htmlFor="pris__slider">Pris-interval</label>
                <Slider className='pris__slider' range min={0} max={12000000} defaultValue={[0, 12000000]} onChange={sliderHandler}
                step={500000}
                trackStyle={{backgroundColor: "gray"}}
                handleStyle={[
                  {backgroundColor: "gray", borderColor: "gray"},
                  {backgroundColor: "gray", borderColor: "gray"}
                ]}
                />
                <div className="pris__fromTo">
                  <p>{sliderValue[0].toLocaleString()} kr.</p>
                  <p>{sliderValue[1].toLocaleString()} kr.</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className='property__houses'>
            <FilteredPropertys houses={type.data} pricerange={sliderValue} type={typeValue} />
          </section>
        </article>
      )
    }
  }
}
