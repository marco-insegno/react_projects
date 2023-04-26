import React from 'react'
import './DarkMode.css'
import ArticleCard from './UI/ArticleCard'
import { useState, useEffect } from 'react'
import data from './data'


function DarkMode() {

    const [theme, setTheme] = useState('light-mode')

    const changeTheme = () => {

        if (theme === 'light-mode') {

            setTheme('dark-mode')

        } else {

            setTheme('light-mode')
        }

    }

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);


    return (
        <section className='container mt-5 '>
            <div className="row">
                <div className="col-12 text-center">
                    <button className=
                        {
                            theme === 'light-mode'
                            ? "btn rounded-4 btn-danger"
                            : 'btn rounded-4 btn-light'

                        }
                        onClick={() => changeTheme()}>
                        {
                            theme === "light-mode"
                                ? <i className="bi bi-moon d-flex justify-content-center align-items-center p-1" style={{ fontSize: '25px' }}></i>
                                : <i className="bi bi-brightness-low d-flex justify-content-center align-items-center p-1" style={{ fontSize: '25px' }}></i>

                        }

                    </button>
                </div>
            </div>

            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-12 col-md-10 col-md-8">
                    <div className="row mt-5">
                        {
                            data && data.map((article) => {
                                return (

                                    <ArticleCard key={article.id}  {...article} />

                                )
                            })
                        }

                    </div>

                </div>
            </div>

        </section>
    )
}

export default DarkMode