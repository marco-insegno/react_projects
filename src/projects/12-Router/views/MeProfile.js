import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function MeProfile() {

    const navigate = useNavigate()

    return (
        <section className="container-fluid h-75 bg-dark d-flex justify-content-center align-items-center">
            <div className="row ">
                <div className="col-12 text-center text-white">
                    <h2 className='display-1 '>Welcome in ME PROFILE</h2>

                    <div className="d-grid gap-2 mt-5">
                        <Button variant="danger" size="lg" onClick={() => navigate(-3)}>
                            Torna tre pagine indietro
                        </Button>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default MeProfile