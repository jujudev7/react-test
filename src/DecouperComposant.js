import "./App.css";
import { useState } from "react";
import Fruit from "./components/Fruit";

function DecouperComposant() {
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

    const fruitAAjouter = { id, nom }; // on crée une nouvelle constante qui va remplacer ce que l'on pushe

    // fruitsCopy.push({id, nom}); // on ajoute au tableau les infos du nouveau fruit (id & nom)
    fruitsCopy.push(fruitAAjouter);

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
      <h1>Découper son Composant</h1>
      <p>On crée un dossier <b>components</b> dans src</p>
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
          <Fruit fruitInfos={fruit} onFruitDelete={handleDelete} />
        ))}
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

export default DecouperComposant;

// import Fruit from "./components/Fruit";
// ajout de <Fruit /> {fruits.map((fruit)  qui remplace ce qu'il y avait
// on coupe/colle le précédent return de {fruits.map((fruit) dans Fruit.jsx

// on ajoute les props à <Fruit />
  // Props en 3 étapes :
  // 1) donner ou faire passer les Props du composant parent au composant enfant
  //   ex:    <Fruit fruitInfos={fruit} onFruitDelete={handleDelete} />
  // 2) récupérer les Props dans le composant enfant, recevoir ou accéder aux props 
  //   On passe props en paramètre du composant enfant : export default function Fruit(props) { dans Fruit.jsx
  // 3) consommer les Props dans le composant enfant
  // <li key={props.fruitInfos.id}>
  // {props.fruitInfos.nom}
  // <button onClick={() => props.onFruitDelete(props.fruitInfos.id)}>x</button>
  // </li>

// destructuring des props dans Fruit.jsx

// On fait la même chose pour form en créant FruitForm.jsx