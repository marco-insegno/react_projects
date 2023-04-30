import React from "react";
import Button from 'react-bootstrap/Button';

const TotalBox = () => {
  return (
    <section className="container-fluid">
      <div className="row justify-content-end">
        <div className="col-12 col-md-3 pt-3 pb-5 total-box-custom">

          <h5 className="text-uppercase">Carrello</h5>
          <hr />
          <h2 className="py-4">0 €</h2>
          <hr />
          <Button variant="info" className="text-dark text-uppercase rounded-0 mt-4">Checkout</Button>

        </div>
      </div>
    </section>
  );
};

export default TotalBox;
