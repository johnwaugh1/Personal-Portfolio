import { About, Contact, Header, Projects, TechStack } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative flex flex-col space-y-5 h-full w-full bg-[radial-gradient(ellipse_250%_250%_at_50%_0%,#0d0208_0%,#008f11_100%)] overflow-hidden">
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

    {/* Navigation */}
    <Nav />

    {/* Sections */}
    <section
      id="home"
      className="z-50 w-full flex flex-col 2xl:flex-row justify-center min-h-screen gap-10 max-container px-4 sm:px-6 md:px-10"
    >
      <Header />
    </section>
    <section
      id="about"
      className="w-full sm:px-8 md:px-12 lg:px-16 2xl:px-24 lg:scroll-mt-60 2xl:scroll-mt-80 text-white"
    >
      <About />
    </section>
    <section
      id="techstack"
      className="w-full py-10 px-4 sm:px-6 md:px-10 lg:scroll-mt-60 2xl:scroll-mt-80 text-white"
    >
      <TechStack />
    </section>
    <section
      id="projects"
      className="w-full py-10 px-4 sm:px-6 md:px-10 lg:scroll-mt-32 text-white"
    >
      <Projects />
    </section>
    <section
      id="contact"
      className="w-full font-coda px-4 sm:px-6 md:px-10 pt-6 lg:pb-10 text-white"
    >
      <Contact />
    </section>
  </main>
);

export default App;
