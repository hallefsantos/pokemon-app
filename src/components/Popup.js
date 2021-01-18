import Button from './Button'

const Popup = ({pokemon, closePopup}) => {
   const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
   
   return (
      <div className="cursor-auto fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
         <div 
            className="relative w-96 bg-white p-5 pt-0 rounded-md flex flex-col items-center"
         >
            <button 
               className="absolute right-0 top-0 mt-2 mr-2 bg-gray-500 hover:bg-gray-600 focus:outline-none text-white mx-1 p-1 rounded-full"
               onClick={closePopup}
            >
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div 
               className="w-32 h-32 -mt-16 flex justify-center items-center bg-gray-700 rounded-full"
            >
               <img 
                  className="w-20 h-20"
                  src={`${IMG_URL}${pokemon.id}.svg`} alt={pokemon.title}
               />
            </div>
            <h3 className="mt-4 font-bold capitalize text-center text-xl">
               {pokemon.name}
            </h3>

            <div>
               <div className="flex items-center">
                  <h4 className="font-bold mr-1">Height:</h4> 
                  {pokemon.height/10}m
               </div>
               <div className="flex items-center">
                  <h4 className="font-bold mr-1">Weight:</h4> 
                  {pokemon.weight/10}kg
               </div>
            </div>

         </div>
      </div>
   )
}

export default Popup
