import { useState } from "react";

export default function FruitForm({handleAdd}) {
  // state
  const [nouveauFruit, setNouveauFruit] = useState("");

  // comportements
  const handleSubmit = (event) => {
    // alert("handleSubmit");
    event.preventDefault(); // empêche le rechargement de la page
    // 2. manipuler le state
    const id = new Date().getTime(); // récupère le timestamp (nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC) et le stocke dans id
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom }; // on crée une nouvelle constante qui va remplacer ce que l'on pushe
    // fruitsCopy.push(fruitAAjouter);
    // 3. modifier le state avec le setter
    handleAdd(fruitAAjouter);
    setNouveauFruit(""); // on balance une chaîne vide pour vider le champ après soumission (submit de l'user)
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit"
        onChange={handleChange} // on ajoute une fonction onChange pour permettre au user de rentrer son fruit
      />
      <button>Envoyer</button>
    </form>
  );
}

// on ajoute tout ce dont le form a besoin, on récupère donc les comportements handleSubmit et handleChange,
// ainsi que le state nouveauFruit
// importer le useState : import { useState } from "react";