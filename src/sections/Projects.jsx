const Projects = () => {
  return (
    <section id="projects" className="w-full py-10 border-2 rounded-xl border-gray-800 shadow-lg">
      <h1 className="text-4xl text-center font-coda mb-6">Projects</h1>
      <div className="grid grid-cols-2 gap-6 px-4">
        <a href="" className="border-2 border-gray-700 rounded-lg flex flex-col justify-between
        bg-white/20 backdrop-blur-sm shadow-lg">
          <img src="/src/assets/images/database.jpg" alt="Portfolio" />
          <div className="p-2 flex-grow">
            <h3 className="text-2xl font-coda">Personal Portfolio</h3>
            <p className="text-base font-coda">This is my personal portfolio, where I showcase my projects and skills.</p>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap gap-1">
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">React</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">Tailwind CSS</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">JavaScript</span>
            </div>
          </div>
        </a>
        <a href="" className="border-2 border-gray-700 rounded-lg flex flex-col justify-between
        bg-white/20 backdrop-blur-sm shadow-lg">
          <img src="/src/assets/images/database.jpg" alt="Portfolio" />
          <div className="p-2 flex-grow">
            <h3 className="text-2xl font-coda">Y86 ISA Simulator</h3>
            <p className="text-base font-coda">A Y86 ISA simulator written in C/C++. This was a project in which myself and a friend
              wrote a working simulation of a Y86 micro processor.
            </p>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap gap-1">
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">C</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">C++</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">Y86 Assembly</span>
            </div>
          </div>
        </a>
        <a href="" className="border-2 border-gray-700 rounded-lg flex flex-col justify-between
        bg-white/20 backdrop-blur-sm shadow-lg">
          <img src="/src/assets/images/database.jpg" alt="Portfolio" />
          <div className="p-2 flex-grow">
            <h3 className="text-2xl font-coda">Personal Portfolio</h3>
            <p className="text-base font-coda">This is my personal portfolio, where I showcase my projects and skills.</p>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap gap-1">
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">React</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">Tailwind CSS</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">JavaScript</span>
            </div>
          </div>
        </a>
        <a href="" className="border-2 border-gray-700 rounded-lg flex flex-col justify-between
        bg-white/20 backdrop-blur-sm shadow-lg">
          <img src="/src/assets/images/database.jpg" alt="Portfolio" />
          <div className="p-2 flex-grow">
            <h3 className="text-2xl font-coda">Personal Portfolio</h3>
            <p className="text-base font-coda">This is my personal portfolio, where I showcase my projects and skills.</p>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap gap-1">
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">React</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">Tailwind CSS</span>
              <span className="bg-forest-green/50 text-foreground px-2 py-1 rounded-md text-xs">JavaScript</span>
            </div>
          </div>
        </a>
        
      </div>
    </section>
  );
};

export default Projects;
