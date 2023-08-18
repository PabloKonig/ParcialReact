import { useState } from 'react'
import Card from "./Card";
import './App.css';

function App() {
  const[materia,setMateria]=useState("");
  const[profesor, setProfesor]=useState("");
  const [esValido, setEsValido] = useState(false);

  const ManejarSubmit = (e)=>{
    e.preventDefault();
    if (materia.length >= 3 && materia.trim().length == materia.length && profesor.length >= 6) {
      setEsValido(true);
    }else{setEsValido(false)} 
  };
  
  return (
    <div className="App">
      <h1>Carga de Materias</h1>
      <form onSubmit={ManejarSubmit}>
        <input type="text" placeholder="Ingrese la materia" value={materia} onChange={(e)=>setMateria(e.target.value)} />
        <input type="text" placeholder="Ingrese profesor" value={profesor} onChange={(e)=>setProfesor(e.target.value)} />
        <button type="submit">Agregar Materia</button>      
      </form>        
      {esValido && <Card infoMateria={materia} infoProfesor={profesor}/>}
      {!esValido && <p>Por favor chequea que la información sea correcta</p>}
    </div>
  );
}

export default App;
