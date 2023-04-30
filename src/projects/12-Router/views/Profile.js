import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Profile() {

    const navigate = useNavigate()

    return (
        <section className="container-fluid vh-100 bg-warning d-flex flex-column justify-content-center align-items-center">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className='display-1 text-dark'>Welcome in PROFILE</h2>

                    <div className="d-grid gap-2 mt-5">
                        <Button variant="success" size="lg" className='mb-5' onClick={() => navigate(-1)}>
                            Torna una pagina indietro
                        </Button>

                    </div>
                </div>
            </div>
            <div className="row justify-content-center h-25">
                <div className="col-12 text-center">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default Profile