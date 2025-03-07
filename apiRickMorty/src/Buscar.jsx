import { useState } from "react";
import './App.css'

function Buscar() {
  const [characters, setCharacters] = useState([])
  const [choosenCharacter, setChoosenCharacter]= useState('')

  const handleCharacter = () => {
   if ( choosenCharacter != "") {
    const route = `https://rickandmortyapi.com/api/character/?name=${choosenCharacter}`;

    fetch(route)
      .then((response) => response.json())
      .then((formatedResponse) => setCharacters(formatedResponse.results))
      .catch((error) => console.log(error))
   } else {
    setCharacters()
   }
  };
 



  return (
    <>
    <h1>Encuentra tu personaje </h1>
    <input type="text" placeholder="Tipea tu personaje" onChange={(e)=> setChoosenCharacter(e.target.value)} />
    <button type="button" onClick={()=> handleCharacter() }>Buscar</button>
      <ul>
        {
        characters.map((character) => 
          <li>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </li>
        )
        }
      </ul>
    </>
  )
}

export default Buscar;
