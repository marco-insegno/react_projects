import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState, useEffect, createContext, useContext, useRef } from 'react'
import cars from './cars'

// **********************************
// Creo il Context al di fuori del componente dove andrò ad inserire il Provider
// **********************************
const CarsContext = createContext(null)


function Garage() {

    const [macchine, setMacchine] = useState(cars)

    const removeCard = (id) => {
        const filtered = macchine.filter((macchina) => macchina.id !== id)
        setMacchine(filtered)
    }
    return (

        // **********************************
        // Tutti i componenti racchiusi dal Context.Provider potranno usare cio che passiamo con value (oggetti e funzioni) richiamando il context al loro interno
        // **********************************
        <CarsContext.Provider value={{ macchine, removeCard }}>
            <section className="container mt5">
                <div className="row">
                    <div className="col-12">

                        <ContainerCards />

                    </div>
                </div>
            </section>
        </CarsContext.Provider>


    )
}



const ContainerCards = () => {

    const elReference = useRef(null)

    const { macchine } = useContext(CarsContext)

    const onTop = () => {
        elReference.current.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <section className="container border mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 ref={elReference}>Il mio Garage</h1>
                </div>
            </div>
            <div className="row mt-3">

                {macchine && macchine.map((macchina) => {

                    return (

                        <CardCar key={macchina.id} {...macchina} />
                    )
                })}

            </div>
            <button className="me-1 mb-1 btn btn-info position-fixed bottom-0 end-0" onClick={onTop}>up</button>

        </section>

    )
}

const CardCar = ({ id, car_productor, car_model, car_year }) => {

    const { removeCard } = useContext(CarsContext)

    return (
        <div className="col-12 col-md-4">
            <Card
                bg='success'
                text='light'
                className="mb-2"
            >
                <Card.Header className='d-flex justify-content-between '>
                    <span>{id}</span>
                    <button className="btn btn-danger btn-sm" onClick={() => removeCard(id)}>
                        x
                    </button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{car_model}</Card.Title>
                    <Card.Text>
                        {car_productor}
                    </Card.Text>
                    <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam animi maxime ipsum, fugiat totam iusto corporis error nemo ea velit, corrupti perferendis nihil placeat autem voluptatem itaque nulla dicta.
                    </Card.Text>
                    <Card.Text>
                        {car_year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Garage