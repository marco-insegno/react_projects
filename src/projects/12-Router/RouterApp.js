// import React from 'react'
// import Navigation from './UI/Navigation'
// import About from './views/About'
// import Profile from './views/Profile'
// import SingleProfile from './views/SingleProfile'
// import MeProfile from './views/MeProfile'
// import Error404 from './views/Error404'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




// con le rotte gestite in un file esterno (routes.js) ci servirà importare solo quest'ultimo file e Hook useRoutes() per usare le rotte
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function RouterApp() {

    // alternativa più efficace con array di oggetti (rotte) impostato inizialmente in routes.js, poi importato e salvato in variabile come parametro di useRoutes() 
    let element = useRoutes(routes)


    //basterà passare la variabile element
    return (element

        // <Router>
        //     <Navigation />

        //     <Routes>

        //         <Route path='/' element={<Home />}/>
        //         <Route path='/about' element={<About />}/>
        //         <Route path='/profile' element={<Profile />}>
        //             <Route path='/profile/:id' element={<SingleProfile />}/>
        //             <Route path='/profile/me' element={<MeProfile />}/>
        //         </Route>
        //         <Route path='*' element={<Error404 />}/>

        //     </Routes>
        // </Router>

    )
}

export default RouterApp