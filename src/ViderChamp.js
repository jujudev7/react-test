import "./App.css";
import { useState } from "react";

function ViderChamp() {
  // State (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

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

  const handleSubmit = (event) => {
    // alert("handleSubmit");
    event.preventDefault(); // empêche le rechargement de la page
    // 1.  copie du state (car on ne modifie jamais directement le state !)
    const fruitsCopy = [...fruits];
    
    // 2. manipuler le state
    const id = new Date().getTime() // récupère le timestamp (nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC) et le stocke dans id
    const nom = nouveauFruit;
    fruitsCopy.push({id, nom}); // on ajoute au tableau les infos du nouveau fruit (id & nom)

    // 3. modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit(""); // on balance une chaîne vide pour vider le champ après soumission (submit de l'user)
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  }

  // Affichage (render)

  return (
    <div>
      <h1>Vider un Champ</h1>
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
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange} // on ajoute une fonction onChange pour permettre au user de rentrer son fruit
        />
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default ViderChamp;

// setNouveauFruit("");