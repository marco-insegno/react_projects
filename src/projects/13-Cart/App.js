import Navigation from "./components/Navigation";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Navigation />
      <TotalBox/>
      <Cart />
      <Loading/>
    </>
  )
}

export default App;
