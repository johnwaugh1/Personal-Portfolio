const Button = ({ label }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 mt-3 
      border border-white/50 rounded-full font-subheader text-lg text-white leading-none 
      hover:bg-green/50 hover:text-light-green transition-colors duration-500 backdrop-blur-sm bg-white/10 shadow-lg">
            {label}
        </button>
    )
}

export default Button