import "./App.css";
import { useState } from "react";

function SupprimerElement() {
  // State (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // Comportements
  const handleDelete = (id) => {
    // on passe id en paramètre afin de le récupérer
    // alert("handleDelete") // l'alerte indique que le comportement est bien branché à l'affichage
    console.log(id);

    // 1.  copie du state (car on ne modifie jamais directement le state !)
    // const fruitsCopy = fruits.slice(); // méthode 1: slice() crée une copie du tableau d'origine
    const fruitsCopy = [...fruits]; // méthode 2: récupère tous les éléments (ici fruits) pour les copier dans un nouveau tableau

    // 2. manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id); // on ne conserve que les fruits dont l'id n'a pas été passé dans handleDelete

    // 3. modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };
  // Affichage (render)

  return (
    <div>
      <h1>Supprimer des fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          // Erreur console.log(): Warning: Each child in a list should have a unique "key" prop.
          // On ajoute la key via l’id (unique) qui permettra de distinguer chaque fruit.
          return (
            <li key={fruit.id}>
              {fruit.nom}
              <button onClick={() => handleDelete(fruit.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SupprimerElement;
