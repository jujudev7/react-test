// On sait qu'on va vouloir utiliser ce composant dans d'autres fichiers donc : export default
// ici c'est un composant fonctionnel, donc fonction qui va recevoir 3 choses (1 nom, des paramètres, des insctructions)
export default function FruitReusabilite({fruitInfos, actionClick}) {
    // state 

    // 1) on crée les variables qui vont accueillir les props correspondantes
    // const fruitInfos = props.fruitInfos;
    // const onFruitDelete = props.onFruitDelete;

    // 2) on déstructure props en un objet accueillant des éléments que l'on va stocker dans des variables
    // const {fruitInfos, onFruitDelete} = props;

    // 3) finalement on peut inclure le destructuring directement dans le nom de la fonction :
    //   -> {fruitInfos, onFruitDelete} remplace props

    // comportements

    // affichage (render)
    return (
        // 1.
        // <li key={fruit.id}>
        //   {fruit.nom}
        //   <button onClick={() => handleDelete(fruit.id)}>x</button>
        // </li>

        // 2. on ajoute les props
        // <li key={props.fruitInfos.id}>
        //   {props.fruitInfos.nom}
        //   <button onClick={() => props.onFruitDelete(props.fruitInfos.id)}>x</button>
        // </li>

        // 3. on supprime les mots props grâce aux constantes
        // <li key={fruitInfos.id}> // key ne doit pas être définit à l'intérieur du composant, mais à l'extérieur en props dans <Fruit />
        // -> <Fruit fruitInfos={fruit} onFruitDelete={handleDelete} key={fruit.id} />
        <li>
          {fruitInfos.nom}
          {/* <button onClick={() => actionClick(fruitInfos.id)}>x</button> */}
          <button onClick={actionClick}>x</button>
        </li>
      );
}

