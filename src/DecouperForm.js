import "./App.css";
import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function DecouperForm() {
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

  const handleAdd = (fruitAAjouter) => {
    // 1. copie du state (car on ne modifie jamais directement le state !)
    const fruitsCopy = [...fruits];

    // 2. manipuler le state
    fruitsCopy.push(fruitAAjouter);

    // 3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  // Affichage (render)

  return (
    <div>
      <h1>Découper Form</h1>
      <p>
        On crée un dossier <b>components</b> dans src
      </p>
      <ul>
        {fruits.map((fruit) => (
          // Erreur console.log(): Warning: Each child in a list should have a unique "key" prop.
          // On ajoute la key via l’id (unique) qui permettra de distinguer chaque fruit.
          // return (
          //   <li key={fruit.id}>
          //     {fruit.nom}
          //     <button onClick={() => handleDelete(fruit.id)}>x</button>
          //   </li>
          // );

        <Fruit fruitInfos={fruit} onFruitDelete={handleDelete} key={fruit.id} />
        ))}
      </ul>

      {/* <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange} // on ajoute une fonction onChange pour permettre au user de rentrer son fruit
        />
        <button>Envoyer</button>
      </form> */}

      {/* on remplace le formulaire par l'appel au fichier FruitForm.jsx présent dans src/components/ */}
      <FruitForm handleAdd={handleAdd} /> 
    </div>
  );
}

export default DecouperForm;

// import FruitForm from "./components/FruitForm";
// ajout de <FruitForm /> qui remplace ce qu'il y avait
// on coupe/colle le précédent form dans FruitForm.jsx

// on a besoin d'ajouter à FruitForm tout ce dont il a besoin (handleSubmit, nouveauFruit, handleChange)
// car un composant doit contenir toute la logique dont il est responsable !

// MAIS, on doit effectuer les manipulations du state près de là où il a été définit,
// ici fruits (l8), on doit donc récupérer certains éléments collés dans FruitForm.jsx
// -> on crée un nouveau comportement handleAdd() 

// on ajoute handleAdd={fruitAAjouter} dans <FruitForm /> 
// puis dans FruitForm.jsx, on envoie handleAdd en props/paramètre : export default function FruitForm({handleAdd}) {
// et on fait appel au comportement dans handleSubmit : handleAdd(handleAdd);