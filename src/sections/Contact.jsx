import { navLinks } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 md:px-10 pt-6"
    >
      <div className="w-full py-6 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between border rounded-xl border-white/20 backdrop-blur-[2px] bg-white/10 shadow-xl">
        <div className="pb-1 flex flex-col justify-end">
          <p className="text-6xl font-header">
            John
            <br />
            Waugh.
          </p>
        </div>
        <div className="flex flex-row space-x-12 mt-3">
          <div className="">
            <h3 className="text-xl mb-2 font-subheader font-semibold">Explore</h3>
            <ul className="flex flex-col text-white/50 font-body font-light">
              {navLinks.map((item) => (
                <li key={item.label} className="">
                  <a
                    href={item.href}
                    className="hover:text-light-green transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl mb-2 font-subheader font-semibold">Let's Connect</h3>
            <ul className="flex flex-col text-white/50 font-body font-light">
              <li>
                <a href="mailto:johnmwaugh21@gmail.com" className="hover:text-light-green transition-colors">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/john-waugh1/" className="hover:text-light-green transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/johnwaugh1" className="hover:text-light-green transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 px-4 flex justify-between text-white/40 text-xl font-body font-light">
        <p>@2024</p>
        <p>John Waugh</p>
      </div>
    </section>
  )
}

export default Contact