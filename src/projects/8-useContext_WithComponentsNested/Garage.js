import React, { createContext, useState } from 'react'
import cars from './cars'
import Elenco from './Elenco'

export const AppGarage = createContext()

function Garage() {

    const [macchine, setMacchine] = useState(cars)

    const rimuoviMacchina = (id) => {
        return (
            setMacchine(macchine.filter((macchina) => macchina.id !== id))
        )
    }

    return (

        <AppGarage.Provider value={{ macchine, rimuoviMacchina }}>

            <div>
                <Elenco macchine={macchine}/>
            </div>

        </AppGarage.Provider>

    )
}


export default Garage
