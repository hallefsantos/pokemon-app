import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
   return (
      <div className="mt-10 grid gap-4 grid-cols-5">
         {pokemons.map((pokemon, idx) => (
            <PokemonCard key={idx} url={pokemon} />
         ))}
      </div>
   )
}

export default PokemonList