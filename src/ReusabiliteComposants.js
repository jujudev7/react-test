import "./App.css";
import { useState } from "react";
import FruitReusabilite from "./components/FruitReusabilite";
import FruitForm from "./components/FruitForm";

function ReusabiliteComposants() {
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

  const afficherFruitNom = (fruitNom) => {
    alert(`J'aime trop ce fruit : ${fruitNom}`)
  };


  // Affichage (render)

  return (
    <div>
      <h1>Réusabilité des Composants</h1>
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

          // <Fruit fruitInfos={fruit} onFruitDelete={handleDelete} key={fruit.id} />
          <FruitReusabilite
            fruitInfos={fruit}
            // actionClick={handleDelete}
            actionClick={() => handleDelete(fruit.id)}
            // actionClick={() => afficherFruitNom(fruit.nom)}
            key={fruit.id}
          />
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

export default ReusabiliteComposants;

// dans le return, on remplace onFruitDelete par un nom générique : actionClick
// du coup, on remplace aussi onFruitDelete dans le composant FruitReusabilite
  // ici : export default function FruitReusabilite({fruitInfos, actionClick}) {
  // et là : <button onClick={() => actionClick(fruitInfos.id)}>x</button>
// lorsqu'on veut rendre un composant générique/flexible/réutilisable, on fout tout en props
// du coup, le button précédent devient : <button onClick={actionClick}>x</button>
// et on modifie actionClick={handleDelete} en : actionClick={() => handleDelete(fruit.id)}

// DU COUP, on peut donner l'action que l'on veut à actionClick
// ex: on peut remplacer handleDelete par afficherFruitNom très rapidement !
// On peut réutiliser dans des contextes différents

// "Raise the event" : faire remonter l'évènement dans les props du composant

// Mais on peut aller encore un peu + LOIN...
// 1h22