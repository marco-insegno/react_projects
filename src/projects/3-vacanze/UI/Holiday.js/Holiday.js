import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Holiday({ titolo, descrizione, durata, img, prezzo, next, prev }) {


    return (
        <Card className='mt-5'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <h4 className='text-start text-dark mb-3 fw-bolder'>{titolo}</h4>
                <Card.Text className='text-start text-dark'>
                    {descrizione}
                </Card.Text>
                <div className="col-12 d-flex justify-content-between">
                    <small className='text-info fst-italic'>{durata}</small>
                    <small className='fw-bolder fs-4 text-danger display-'>{(prezzo / 100).toFixed(2)} €</small>
                </div>

            </Card.Body>
            <div className='row'>
                <div className="col-6 text-start px-4 pb-3">
                    <Button className='btn-custom' onClick={prev}>Prev</Button>
                </div>
                <div className="col-6 text-end px-4 pb-3">
                    <Button className='btn-custom' onClick={next}>Next</Button>
                </div>

            </div>


        </Card>
    )
}

export default Holiday