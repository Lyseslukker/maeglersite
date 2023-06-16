import React from 'react'

export default function EnergyLabel({label}) {

    // console.log("Energylabel: ", label)

    if (label === "A") {
        return (
            <span className='left__energy__A'>
                {label}
            </span>
        )
    }
    if (label === "B") {
        return (
            <span className='left__energy__B'>
                {label}
            </span>
        )
    }
    if (label === "C") {
        return (
            <span className='left__energy__C'>
                {label}
            </span>
        )
    }
    if (label === "D") {
        return (
            <span className='left__energy__D'>
                {label}
            </span>
        )
    }
    if (label === "E") {
        return (
            <span className='left__energy__E'>
                {label}
            </span>
        )
    }
    if (label === "F") {
        return (
            <span className='left__energy__F'>
                {label}
            </span>
        )
    }
    if (label === "G") {
        return (
            <span className='left__energy__G'>
                {label}
            </span>
        )
    }
}