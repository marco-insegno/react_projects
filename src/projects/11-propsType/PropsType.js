import React from 'react'
import { products } from './products'
import CardProduct from './CardProduct';

function PropsType() {

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-12 text-center text-md-start">
                    <h1>Prodotti</h1>
                </div>
            </div>
            <div className="row mt-5">

                {
                    products.map((product) => {
                        console.log(product)
                        return (

                            <CardProduct key={product.id} {...product} />

                        )
                    })
                }

            </div>
        </section>
    )
}

export default PropsType