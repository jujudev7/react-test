import "./App.css";
import { useState } from "react";

function Liste() {
  // State (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // Comportements

  // Affichage (render)

  return (
    <div>
      <h1>Liste de Fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return <li>{fruit.nom}</li>;
        })}
      </ul>
    </div>
  );
}

export default Liste;
