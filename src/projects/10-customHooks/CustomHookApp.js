import React from 'react'
import useFetch from './useFetch';

const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

function CustomHookApp() {

    const { data, isLoading } = useFetch(postUrl)

    return (
        <section className="container mt-5">

            {
                isLoading
                    ? (<section className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>Is Loading.......</h1>
                            </div>
                        </div>
                    </section>
                    )
                    : (<section className="container">
                        <div className="row">
                            {
                                data && data.map((el) => {

                                    if (el.hasOwnProperty("name")) {

                                        return (
                                            <div key={el.id} className="col-12 border mb-4 py-3">

                                                <h3>{el.name}</h3>
                                                <h4 className='text-lowercase'>{el.email}</h4>
                                                <h4 className='fst-italic'>{el.phone}</h4>

                                            </div>
                                        )

                                    } else if (el.hasOwnProperty("title")) {

                                        return (
                                            <div key={el.id} className="col-12 border mb-4 py-3">

                                                <h3>{el.title}</h3>

                                            </div>
                                        )
                                    }

                                })
                            }

                        </div>
                    </section>)
            }
        </section>


    )
}

export default CustomHookApp