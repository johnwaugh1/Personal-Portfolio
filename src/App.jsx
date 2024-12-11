import { About, Contact, Footer, Header, Projects, TechStack } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Header />
    </section>
    <section className="padding">
      <About />
    </section>
    <section className="padding">
      <TechStack />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding">
      <Contact />
    </section>
    <section className="pading-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;