import React, { useContext } from 'react'
import { AppGarage } from './Garage'

function Car({ id, car_model, car_productor, car_year}) {

    const {rimuoviMacchina} = useContext(AppGarage)

    return (
        <>
        <h4>{car_model}</h4>
        <h5>{car_productor}</h5>
        <h6>{car_year}</h6>
        <button className="btn btn-info" onClick={()=> rimuoviMacchina(id)}>Elimina</button>
        </>
    )
}

export default Car