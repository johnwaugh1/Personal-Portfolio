const Button = ({ label }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 
      border-2 font-coda text-lg leading-none rounded-full
      text-white border-gray-500 mb-2">
            {label}
        </button>
    )
}

export default Button