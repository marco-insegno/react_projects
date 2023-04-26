import Spinner from 'react-bootstrap/Spinner';

function GrowExample() {
    return (
        <section className='container vh-100'>
            <div className="row">
                <div className="col-12 mt-5 text-center">
                    <h1>Loading...</h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 text-center">
                    <Spinner animation="grow" variant="danger"/>
                </div>
            </div>
        </section>
    )
}

export default GrowExample;