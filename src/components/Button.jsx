const Button = ({ label }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 
      border font-coda text-lg leading-none bg-coral-red rounded-full
      text-white border-coral-red mb-2">
            {label}
        </button>
    )
}

export default Button