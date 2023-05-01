import React from "react";
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber'

const TotalBox = () => {
  const {total} = useGlobalContext()

  return (
    <section className="container-fluid">
      <div className="row justify-content-end">
        <div className="col-12 col-md-3 py-2 total-box-custom">

          <h6 className="text-uppercase mb-0">Carrello</h6>
          <hr className="mt-2" />
          <h2 className="fw-bolder">{formatNumber(total)}</h2>
          <hr />

          <Button variant="info" size="sm" className="text-dark text-uppercase rounded-0">Checkout</Button>

        </div>
      </div>
    </section>
  );
};

export default TotalBox;
