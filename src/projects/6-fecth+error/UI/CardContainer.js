import React from 'react'
import { useState, useEffect } from 'react'
import CardBeer from './CardBeer'
import Loader from './Loader'



function CardContainer() {

    const [beers, setBeers] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const [error, setError] = useState(false)


    useEffect(() => {

        setTimeout(() => {

            fetch('https://api.punkapi.com/v2/beers')
                .then(response => {

                    if (!response.ok) {

                        throw new Error("Network response was not OK");
                    }

                    return response.json()

                })

                .then(data => {
                    setBeers(data)
                    setIsLoading(false)
                    setError(false)
                }
                )
                .catch(err => {
                    console.log("Error:", err.message);
                    setError(err.message)
                });

        }, 1000);

    }, [])


    return (
        <section className="conatiner-mt-5 p-5 rounded-3">
            <div className="row mt-4">
                {error && <h1 className='text-center text-danger text-uppercase'>{error} !!!</h1>}
                {isLoading && <Loader />}

                {
                    beers && beers.map((beer) => {

                        return (
                            <CardBeer key={beer.id} {...beer} />
                        )
                    })
                }

            </div>
        </section>
    )


    // if (isLoading) {
    //     return (
    //         <Loader />
    //     )

    // } else {

    //         return (

    //             <section className='container mt-5 border p-5 rounded-3'>

    //                 <div className="row mt-4">

    //                     {
    //                         beers && beers.map((beer) => {

    //                             return (
    //                                 <CardBeer key={beer.id} {...beer} />
    //                             )
    //                         })
    //                     }

    //                 </div>
    //             </section>
    //         )

    //     }


    // return (

    //     <section className='container mt-5 border'>
    //         <div className="row my-3">
    //             <div className="col-12">
    //                 <div>List...</div>
    //             </div>
    //         </div>
    //         <div className="row mt-4">

    //             {
    //                 beers && beers.map((beer) => {

    //                     console.log(beer);
    //                     return (
    //                         <CardBeer {...beer} />
    //                     )
    //                 })
    //             }

    //         </div>
    //     </section>
    // )
}

export default CardContainer