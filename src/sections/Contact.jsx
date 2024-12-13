import { navLinks } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="w-full font-coda">
      <div className="w-full py-6 px-10 flex justify-between border rounded-xl border-white/20 backdrop-blur-sm bg-white/10 shadow-lg">
        <div className="pb-1 flex flex-col justify-end">
          <p className="text-6xl">
            John
            <br />
            Waugh.
          </p>
        </div>
        <div className="flex flex-row space-x-12 mt-3">
          <div className="">
            <h3 className="text-xl mb-2">Explore</h3>
            <ul className="flex flex-col text-white/50">
              {navLinks.map((item) => (
                <li key={item.label} className="">
                  <a
                    href={item.href}
                    className="hover:text-forest-green transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl mb-2">Let's Connect</h3>
            <ul className="flex flex-col text-white/50">
              <li>
                <a href="mailto:johnmwaugh21@gmail.com" className="hover:text-forest-green transition-colors">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/john-waugh1/" className="hover:text-forest-green transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/johnwaugh1" className="hover:text-forest-green transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 px-4 flex justify-between text-white/40">
        <p>@2024</p>
        <p>John Waugh</p>
      </div>
    </section>
  )
}

export default Contact