import React from 'react'
import RouterApp from './RouterApp'
import Navigation from './UI/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'

function index() {
    return (
        <Router>
            <Navigation/>
            <RouterApp />
        </Router>
    )
}

export default index