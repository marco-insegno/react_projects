import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerDefault() {
    return (
        <section className="container mt-5 text-center">
            <div className="row mt-4 d-flex justify-content-center">
                <div className="col-12 col-md-8 ">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        </section>
    )
}

export default SpinnerDefault