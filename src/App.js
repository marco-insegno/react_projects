import logo from './logo.svg';
import './App.css';

// importare percorso corretto del progetto per vederlo
// import Progetto from "../src/projects/?????????/?????????";
import Progetto from "../src/projects/1-appuntamenti/Appuntamenti";

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
