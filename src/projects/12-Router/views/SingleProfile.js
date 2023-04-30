import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProfile() {

    const { id } = useParams()

    return (
        <section className="container-fluid h-75 bg-primary d-flex justify-content-center align-items-center">
            <div className="row ">
                <div className="col-12 text-center text-white">
                    <h2 className='display-1 '>Welcome in SINGLE PROFILE</h2>
                    <h3 className='display-4'>Params passed {id}</h3>
                </div>
            </div>
        </section>
    )
}

export default SingleProfile