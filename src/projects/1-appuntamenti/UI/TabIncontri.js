import React from 'react'
import { data } from '../data.js'
import { useState } from 'react'
import CardPeople from './CardPeople.js'

function TabIncontri() {

    const [people, setPeople] = useState(data)

    const reloadAll = ()=> {
        setPeople(data)
    }

    const removeItem = (id) => {

        // setPeople(people.filter((item) => item.id !== id))


        // oldPeople rappresenta lo stato di people prima di essere trasformato
        setPeople((oldPeople) => oldPeople.filter((item) => item.id !== id))
        
    }


    return (
        <>
            {
                people.map((el, index) => {

                    return (
                        <CardPeople key={index} {...el} removeItem={removeItem} />
                    )

                })
            }


            <div className="row my-5">
                <div className="col-6 text-start">

                    <button className="btn btn-primary rounded-5" onClick={reloadAll}>Reload</button>


                </div>
                <div className="col-6 text-end">

                    <button className="btn btn-danger rounded-5" onClick={() => setPeople([])}>Delete All</button>

                </div>
            </div>
            
        </>
    )

}

export default TabIncontri