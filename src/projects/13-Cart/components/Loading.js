import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <section className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-12 text-center">
          <Spinner
            animation="grow"
            variant="info"
            style={
              {
                width: '9rem',
                height: '9rem',
                backgroundColor: 'var(--color-secondary)'
              }
            } />
        </div>
      </div>
    </section>
  );
};

export default Loading;
