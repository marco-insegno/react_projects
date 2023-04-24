import React from 'react'
import TabIncontri from "./UI/TabIncontri";

function Appuntamenti() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="display-6 fw-bold">Prossimi incontri</h2>
        </div>
      </div>
      <div className="row my-5 justify-content-center">
        <div className="col-8 text-center p-0">
          <TabIncontri />
        </div>
      </div>
  
      
    </section>
  )
}

export default Appuntamenti