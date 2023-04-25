import './App.css';

// importare percorso corretto del progetto per vederlo
// import Progetto from "../src/projects/?????????/?????????";
import Progetto from "./projects/5-color-gradient/ColorGradient";

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
