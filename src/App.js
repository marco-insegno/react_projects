import './App.css';

// importare percorso corretto del progetto per vederlo
// import Progetto from "../src/projects/?????????/?????????";
import Progetto from "./projects/4-gelateria/App";

function App() {
  return (
    <div className="App">
      <section className="container text-center my-3">
        <Progetto />
      </section>
    </div>
  );
}

export default App;
