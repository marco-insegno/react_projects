import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function About() {

  const navigate = useNavigate()
  
  return (
    <section className="container-fluid vh-100 bg-success d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-12 text-center">
          <h2 className='display-1 text-white'>Welcome in ABOUT</h2>
          <div className="d-grid gap-2 mt-5">
            <Button variant="primary" size="lg" onClick={()=>navigate(-2)}>
              Torna due pagine indietro
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About