import React from 'react'
import Card from 'react-bootstrap/Card';

function ArticleCard({ title, body }) {

    return (
        <div className="col-12 col-sm-6 d-flex justify-content-center mb-4">
            <Card border="danger rounded-0">
                <Card.Header className='text-uppercase bg-danger rounded-0'>{title}</Card.Header>
                <Card.Body className='bg-dark text-white'>
                    <Card.Text >
                        {body.charAt(0).toUpperCase() + body.slice(1)}.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ArticleCard