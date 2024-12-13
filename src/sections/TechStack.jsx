const TechStack = () => {
  return (
    <section id="techstack" className="w-screen px-32 text-white">
      <h1 className="text-4xl font-coda text-center">
        Tech Stack
      </h1>
      <p className="font-coda text-center text-sm mb-3">
        (Proficient = Green, Familiar = Yellow, Beginner = Red)
      </p>
      <div className="pt-4 flex flex-wrap gap-2 justify-center items-center font-coda">
        <div className="flex items-center px-2 py-1 bg-forest-green/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/java.svg" alt="Java" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">Java</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-forest-green/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/c.svg" alt="C" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">C</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-forest-green/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/haskell.svg" alt="Haskell" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">Haskell</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-forest-green/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/github.svg" alt="GitHub" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">GitHub</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-marigold-yellow/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/mysql.svg" alt="MySQL" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">MySQL</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-marigold-yellow/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/r.svg" alt="R" className="rounded-md w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">R</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-marigold-yellow/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/react.svg" alt="React" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">React</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-marigold-yellow/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/tailwind.svg" alt="tailwind" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">Tailwind</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-coral-red/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/javascript.svg" alt="JavaScript" className="filter invert rounded-md w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">JavaScript</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-coral-red/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/python.svg" alt="Python" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">Python</p>
        </div>
        <div className="flex items-center px-2 py-1 bg-coral-red/40 backdrop-blur-md border border-white/40 shadow-lg rounded-xl">
          <img src="/src/assets/tech-stack/cpp.svg" alt="C++" className="filter invert w-10 p-1"/>
          <p className="ml-2 mr-1 text-base">C++</p>
        </div>
      </div>
    </section>
  )
}

export default TechStack;
