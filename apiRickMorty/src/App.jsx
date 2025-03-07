import { useState } from "react";
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  const handleData = () => {
    const route = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(route)
      .then((response) => response.json())
      .then((formatedResponse) => setCharacters(formatedResponse.results))
      .catch((error) => console.log(error))
  };
  handleData()



  return (
    <>
    <h1>Listado de personajes </h1>
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

      <button onClick={() => setPage(page - 1 < 1 ? 1 : page-1 )} >Anterior</button>
      <button onClick={() => setPage(page + 1 > 42 ? 42 : page + 1)} >Siguiente</button>
    </>
  )
}

export default App;
