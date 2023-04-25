import React from "react";

const Gelato = ({ nome, descrizione, categoria, img, prezzo, id }) => {

  return (
    <article className="gelato">
      <div className="img-container">

        <img alt={nome} src={img} className="img" />
      </div>
      <div className="prd-info">
        <header className="prd-header">
          <div>
            <h5>{nome}</h5>
            <h6>{categoria}</h6>
          </div>
          <span className="prd-prezzo ms-1">
            <h6 className="m-0">{(prezzo / 100).toFixed(2)}€</h6>
          </span>
        </header>
      </div>


    </article>
  )
};

export default Gelato;
