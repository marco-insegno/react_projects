import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 text-center">
        <Spinner animation="grow" variant="info" style={{ width:'7rem', height:'7rem' }}  />
        </div>
      </div>
    </section>
  );
};

export default Loading;
