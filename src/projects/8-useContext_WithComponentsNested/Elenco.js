import React, { useContext } from 'react'
import Car from './Car'
import { AppGarage } from './Garage'


function Elenco() {

    const { macchine } = useContext(AppGarage)

    return (
        <section className="container">
            <div className="row">
                {macchine && macchine.map((macchina) => {
                    return (
                        <div key={macchina.id} className="col-12 col-md-3 mb-2 border p-2">
                            <Car {...macchina}/>
                        </div>

                    )
                })
                }

            </div>
        </section>
    )
}

export default Elenco