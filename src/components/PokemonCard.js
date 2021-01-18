import axios from 'axios'
import { useEffect, useState } from 'react'
import Popup from './Popup'

const PokemonCard = ({ url }) => {
   const [pokemon, setPokemon] = useState({})
   const [type, setType] = useState()
   const [isPopupActive, setIsPopupActive] = useState(false)
   const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

   useEffect(() => {
      axios.get(url)
         .then(res => {
            setPokemon(res.data)
            setType(res.data.types[0].type.name)
         })
   }, [])

   const typeColors = {
      grass: 'bg-green-100',
      fire: 'bg-red-100',
      water: 'bg-blue-100',
      bug: 'bg-yellow-100',
      fly: 'bg-indigo-100',
      normal: 'bg-gray-100',
   }

   const togglePopup = () => {
      setIsPopupActive(!isPopupActive)
   }

   return (
      <>
         <div
            onClick={togglePopup}
            className={`flex items-center flex-col py-5 typeColors rounded-xl cursor-pointer shadow-md ${typeColors[type]}`}
         >
            <div className="relative w-32 h-32">
               <div className="flex justify-center absolute inset-0 z-0">
                  <div className="w-28 h-28 bg-white rounded-full opacity-50"></div>
               </div>
               <img 
                  className="mt-5 mx-auto relative z-10 h-24 w-24" 
                  src={`${IMG_URL}${pokemon.id}.png`} 
                  alt={pokemon.name}
               />
            </div>
            <div>
               <span
                  className="inline-block px-2 py-1 text-xs text-black font-semibold bg-black bg-opacity-10 rounded-md"
               >
                  #{pokemon.id}
               </span>
            </div>

            <h2 className="mt-2 mb-1 font-bold capitalize">{pokemon.name}</h2>
            {type && 
               <div className="text-xs capitalize">Type: {type}</div>
            }

         </div>
         {isPopupActive && <Popup closePopup={togglePopup} pokemon={pokemon}/>}
      </>
   )
}

export default PokemonCard
