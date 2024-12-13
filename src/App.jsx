import { About, Contact, Header, Projects, TechStack } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative h-full w-full bg-[radial-gradient(ellipse_225%_225%_at_50%_0%,#000_0%,#15803d_100%)] overflow-hidden">
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    
    {/* Navigation */}
    <Nav />
    
    {/* Sections */}
    <section
      id="home"
      className="max-h-screen flex flex-col items-center justify-start text-white"
    >
      <Header />
    </section>
    <section
      id="about"
      className="max-h-screen scroll-mt-96 flex flex-col justify-start text-white"
    >
      <About />
    </section>
    <section
      id="techstack"
      className="max-h-screen pt-24 scroll-mt-96 flex items-center justify-center text-white px-10"
    >
      <TechStack />
    </section>
    <section
      id="projects"
      className="max-h-screen padding flex flex-col justify-start text-white"
    >
      <Projects />
    </section>
    <section
      id="contact"
      className="max-h-screen flex flex-col justify-start text-white px-6 py-16"
    >
      <Contact />
    </section>
  </main>
);

export default App;
