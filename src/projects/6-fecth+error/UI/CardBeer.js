import React from 'react'
import Card from 'react-bootstrap/Card';

function CardBeer({name, image_url, description, abv}) {
    return (
        <div className="col-12 col-md-4">
        <Card 
        className="text-white mb-5 d-flex justify-content-center align-items-center rounded-0"  
        style={{
            minHeight: '800px',
            background: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(121,9,26,1) 48%, rgba(0,212,255,1) 100%)'
            }}>
            <Card.Img src={image_url} alt={name} style={{width:'50%'}}/>
            <Card.ImgOverlay className='d-flex flex-column justify-content-evenly'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Text>{abv}°</Card.Text>
            </Card.ImgOverlay>
        </Card></div>
    )
}

export default CardBeer