import { About, Contact, Footer, Header, Projects, TechStack } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="flex flex-col items-center relative inset-0 -z-10 h-full w-full items-center px-5 py-10 
  bg-[radial-gradient(125%_125%_at_50%_0%,#030712_50%,#15803d_100%)]">
    <Nav />
    <section className="xl:padding-l wide:padding-r text-white">
      <Header />
    </section>
    <section className="px-10 text-white">
      <About />
    </section>
    <section className="text-white">
      <TechStack />
    </section>
    <section className="padding text-white">
      <Projects />
    </section>
    <section className="padding text-white">
      <Contact />
    </section>
    <section className="pading-x padding-t pb-8 text-white">
      <Footer />
    </section>
  </main>
);

export default App;
