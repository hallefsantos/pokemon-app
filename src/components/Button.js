const Button = ({ children, onClick }) => {
   return (
      <button 
         onClick={onClick}
         className="bg-gray-500 hover:bg-gray-600 focus:outline-none text-white mx-1 p-2 rounded-md"
      >
         {children}
      </button>
   )
}

export default Button
