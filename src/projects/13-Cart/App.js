import Navigation from "./components/Navigation";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context/context";



function App() {

  const { isLoading, products, total } = useGlobalContext();


  if (isLoading) {

    return (
      <>

        <Navigation />
        <Loading />

      </>
    )

  } else {

    return (
      <>
        <Navigation />

        {
          products.length > 0 ?
            <>
              <TotalBox />
              <Cart />
            </>
            :
            <>
                <section className="container mt-5 pt-5 text-center">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="text-white fst-italic">Il tuo carrello è vuoto !!!</h1>
                    </div>
                  </div>
                </section>
            </>

        }
        {
          total > 0 && <TotalBox />
        }

      </>
    )
  }



}

export default App;
