import React, {useState, useEffect} from 'react'
import HouseCard from '../../../Components/HouseCard';
import "./FilteredPropertys.css"
import { AnimatePresence } from 'framer-motion';

export default function FilteredPropertys({houses, pricerange, type}) {

    const [filterValue, setFilterValue] = useState(
        houses.filter((thisHouse) => {
            return thisHouse.price > pricerange[0] && thisHouse.price < pricerange[1]
        })
    );


    useEffect(() => {
        setFilterValue(
            houses.filter((thisHouse) => {
                return thisHouse.price > pricerange[0] && thisHouse.price < pricerange[1]
            })
        )
    }, [pricerange, type, houses]);


    if (!filterValue) {
        return (
            <p>Loading.........///////</p>
        )
    }


    if (filterValue) {
        // console.log(filterValue)
        // console.log(pricerange)
        return (
        <div className='filteredPropertys'>
            <AnimatePresence>
                {filterValue.map((house, i) => {
                    return (
                        <HouseCard key={house.id} data={house} framerDelay={i} />
                    )
                })}
            </AnimatePresence>
        </div>
        )
    }

}