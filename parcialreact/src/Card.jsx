import React from "react";

function Card({infoMateria, infoProfesor}) {
    return (
      <div>
        <h2>Materia: {infoMateria}</h2>
        <h2>Profesor: {infoProfesor}</h2>
      </div>
    );
  }
  
export default Card;