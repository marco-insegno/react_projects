import React, { createContext, useState, useContext } from 'react'
import cars from './cars'
// creo il Context
const AppContext = createContext()

function Garage() {

    const [macchine, setMacchine] = useState(cars)

    const removeCar = (id) => {
        return (
            setMacchine(macchine.filter((macchina) => macchina.id !== id))
        )
    }

    return (
        // Con attributo value passo oggetti e funzioni a tutto ciò che è wrappato dal Context
        <AppContext.Provider value={{ macchine, removeCar }}>
            <div>
                <Elenco />
            </div>
        </AppContext.Provider>
    )
}

const Elenco = () => {

    // Accedo con useContext a tutto ciò che passo con i Provider
    const { macchine } = useContext(AppContext)

    return (
        <section className="container">
            <div className="row">


                {
                    macchine && macchine.map((macchina) => {
                        return (
                            <div key={macchina.id} className="col-12 col-md-3 border mb-2 p-3">
                                <CardCar  {...macchina} />
                            </div>
                        )

                    })
                }

            </div>
        </section>
    )
}

const CardCar = ({ id, car_model, car_productor, car_year }) => {

    // Accedo con useContext a tutto ciò che passo con i Provider
    const { removeCar } = useContext(AppContext)

    return (
        <>
            <h2>Nome Car: {car_model}</h2>
            <h4>Nome Produttore: {car_productor}</h4>
            <h4>Anno: {car_year}</h4>
            <button className="btn btn-danger" onClick={() => removeCar(id)}>Remove</button>
        </>
    )
}

export default Garage