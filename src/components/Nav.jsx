import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-[999] w-full">
      <nav className="flex justify-center items-center max-container">
        <ul className="flex flex-wrap justify-center items-center 
        gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 py-3 border border-white/50 rounded-full 
        bg-white/20 backdrop-blur-md shadow-lg">
          {navLinks.map((item) => (
            <li key={item.label} className="text-center">
              <a
                href={item.href}
                className="font-coda leading-normal text-sm sm:text-base md:text-lg text-white 
                hover:text-forest-green transition-colors duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
