import React from 'react'

function CardPeople({ id, nome, stato, img, removeItem }) {

    return (
        <div className="card border-1 p-2 rounded-0">
            <div className="row g-0  py-md-0">

                <div className="col-sm-3 d-flex align-items-center">
                    <img src={img} className="img-fluid rounded-circle mx-auto mx-sm-2" alt={nome} style={{ height: '60px' }} />
                </div>

                <div className="col-sm-7 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{nome}</h5>
                        <p className="card-text">{stato}</p>

                    </div>
                </div>

                <div className="col-sm-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-danger" onClick={() => removeItem(id)}>X</button>
                </div>

            </div>
        </div>
    )
}

export default CardPeople