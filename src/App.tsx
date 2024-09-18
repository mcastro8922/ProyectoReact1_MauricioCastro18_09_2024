import "./App.css";
import miImagen from "./assets/img/logoReact.png";

function App() {
  return (
    <>
      <div>
        <img src={miImagen} alt="Logo React" />
        <h1>Hola mundo!!</h1>
        <p>Este es mi primer proyecto en React...</p>
      </div>
    </>
  );
}

export default App;
