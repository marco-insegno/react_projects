import React from 'react'
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';

function Error404() {

    const navigate = useNavigate();

    return (
        <section className="container-fluid d-flex justify-content-center
        align-items-center vh-100 bg-danger">
            <div className="row h-50">
                <div className="col-12 text-center text-warning">


                    <h1 className='display-1'>404</h1>
                    <h2 className='display-1'>Page not found!!!</h2>

                    <div className="d-grid gap-2 mt-5">
                        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
                            Back Home
                        </Button>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Error404