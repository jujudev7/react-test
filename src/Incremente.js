import "./App.css";
import { useState } from "react";

function Incremente() {
  // State (état, données)
  const [compteur, setCompteur] = useState(1);
  // • On définit un state : useState, que l’on initialise ici à 1,
  // • Que l’on récupère dans une variable compteur,
  // • Et qu’on ne pourra modifier qu’avec son setteur : setCompteur.

  // Comportements
  const handleClick = () => {
    // alert("handleClick"); // l'alerte indique que le comportement est bien branché à l'affichage
    setCompteur(compteur + 1);
  };

  // Affichage (render)

  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default Incremente;
