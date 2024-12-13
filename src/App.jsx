import { About, Contact, Header, Projects, TechStack } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="h-full w-full bg-[radial-gradient(125%_125%_at_50%_0%,#030712_50%,#15803d_100%)] overflow-hidden">
    <Nav />
    <section
      id="home"
      className="max-h-screen flex items-center justify-center text-white">
      <Header />
    </section>
    <section
      id="about"
      className="max-h-screen scroll-mt-96 flex items-center justify-center text-white px-10"
      style={{ scrollMarginTop: "50vh" }}
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
      className="max-h-screen padding scroll-mt-96flex items-center justify-center text-white px-10"
    >
      <Projects />
    </section>
    <section
      id="contact"
      className="max-h-screen padding scroll-mt-96 text-white px-10"
    >
      <Contact />
    </section>
  </main>
);

export default App;
