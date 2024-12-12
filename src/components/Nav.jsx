import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-[999] w-full">
      <nav className="flex justify-center items-center max-container">
        <ul className="flex justify-center items-center gap-16 px-6 py-3 
        border border-white/50 rounded-full bg-white/30 backdrop-blur-md shadow-lg">
          {navLinks.map((item) => (
            <li key={item.label} className='text-center'>
              <a href={item.href} className='font-coda leading-normal text-lg text-white'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav