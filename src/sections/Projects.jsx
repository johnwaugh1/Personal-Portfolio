const projectsData = [
  {
    type: 'video',
    source: './assets/videos/portfolio.mp4',
    alt: 'Portfolio Demo',
    href: '',
    title: 'Personal Portfolio',
    description: 'This is my personal portfolio, where I showcase my projects and skills.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    type: 'image',
    source: './assets/images/lstm.jpg',
    alt: 'LSTM Diagram',
    href: 'https://github.com/johnwaugh1/RunoffForecasting-2.0',
    title: 'Runoff Forecasting 2.0',
    description: 'Using deep learning (RNN, LSTM, Transformer) to post-process and correct systematic errors in National Water Model (NWM) runoff forecasts.',
    tags: ['Python', 'Jupyter', 'AI/ML'],
  },
  {
    type: 'image',
    source: './assets/images/y86.jpg',
    alt: 'Y86 ISA Simulator',
    href: 'https://github.com/johnwaugh1/Y86-Simulator',
    title: 'Y86 ISA Simulator',
    description: 'A Y86 ISA simulator written in C/C++. This was a project in which myself and a friend wrote a working simulation of a Y86 microprocessor.',
    tags: ['C', 'C++', 'Y86 Assembly'],
  },
  {
    type: 'image',
    source: './assets/images/lambdacalc.jpg',
    alt: 'Typed Lambda Interpreter',
    href: 'https://github.com/johnwaugh1/Typed-Lambda-Interpreter',
    title: 'Typed Lambda Interpreter',
    description: 'A small project which interprets a typed lambda calculus language similar to PCF in Haskell.',
    tags: ['Haskell'],
  },
  {
    type: 'image',
    source: './assets/images/database.jpg',
    alt: 'Database System',
    href: 'https://github.com/johnwaugh1/CS3430-Database-System',
    title: 'Database System',
    description: 'A database management system designed for a fictional company.',
    tags: ['MySQL'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 md:px-10">
      <h1 className="text-4xl text-center font-subheader mb-8">Projects</h1>

      <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-screen-lg">
        
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.href}
            className="w-full sm:w-[48%] lg:w-[47%] border border-white/30 rounded-lg flex flex-col justify-between bg-white/20 backdrop-blur-[2px] shadow-xl hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.type === 'video' ? (
              <video
                src={project.source}
                alt={project.alt}
                className="h-48 w-full object-cover rounded-t-lg border-b border-white/30 opacity-90"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={project.source}
                alt={project.alt}
                className="h-48 w-full object-cover rounded-t-lg border-b border-white/30 opacity-90"
              />
            )}
            <div className="p-4 flex-grow">
              <h3 className="text-2xl font-subheader">{project.title}</h3>
              <p className="text-base font-body font-extralight">
                {project.description}
              </p>
            </div>
            <div className="p-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body bg-green/50 text-foreground px-2 py-1 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;