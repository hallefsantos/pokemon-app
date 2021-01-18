import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonList from './components/PokemonList'
import Header from './components/Header'
import Pagination from './components/Pagination'

function App() {

  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        const data = res.data.results.map(pokemon => {
          return pokemon.url
        }) 
        setPokemons(data)  
      })

  }, [])

  return (
    <div className="App py-5 max-w-5xl mx-auto">
      <Header />
      <PokemonList pokemons={pokemons} />
      <Pagination />
    </div>
  );
}

export default App;