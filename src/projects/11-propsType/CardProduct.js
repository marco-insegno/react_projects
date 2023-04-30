import React from 'react'
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';


const defaultImage = 'https://dinsos.mataramkota.go.id/themes/kenshin-kenshinschool/assets/images/default.jpg'


const CardProduct = ({ name_product, product_availability, price_product, image_product }) => {

    const img = image_product ? image_product : defaultImage

    return (

        <div className="col-12 col-md-4 mb-3 d-flex justify-content-center">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        {name_product || 'Nome default'}
                    </Card.Title>
                    <Card.Text>€
                        {price_product || 9999}
                    </Card.Text>
                    <Card.Text>Magazzino:
                        <span> {product_availability || '0' } qt.</span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    )

}

CardProduct.propTypes = {
    name_product: PropTypes.string.isRequired,
    price_product: PropTypes.number.isRequired,
    product_availability: PropTypes.string.isRequired,
    image_product: PropTypes.object.isRequired,
}


// le proprietà di default le definisco qui con .defaultProps o all'interno del componente come check su elemento html
// CardProduct.defaultProps = {
//         name_product: 'Nome default',
//         price_product: 9999,
//         product_availability: '0',
//         image_product: "",
// }

export default CardProduct