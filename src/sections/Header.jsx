import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <section
      id="home"
      className="z-50 w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container px-4 sm:px-6 md:px-10"
    >
      <div className="sm:pt-20 md:pt-40 lg:pt-30 2xl:pt-60 w-full flex flex-col items-center text-center">
        {/* Headshot and Intro */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white">
          <div className="2xl:w-32 2xl:h-32 lg:w-24 lg:h-24 h-24 w-24 rounded-full overflow-hidden border-2 border-solid border-white">
            <img
              src="./assets/images/headshot.jpg"
              alt="Headshot"
              className="object-cover w-full h-full object-[center_-2%]"
            />
          </div>
          <div>
            <h1 className="font-subheader font-bold 2xl:text-4xl text-3xl">John Waugh.</h1>
            <p className="flex items-center 2xl:mt-1 font-body">
              <img
                src="./assets/icons/ncflag.png"
                alt="NC Flag"
                width={30}
                className="inline-block mr-2 rounded-sm"
              />
              Based in North Carolina
            </p>
          </div>
        </div>

        {/* Title Section */}
        <div className="mt-6 lg:mt-2 font-header font-bold text-white">
          <h1 className="text-6xl 2xl:text-8xl tracking-wide">SOFTWARE</h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <h1 className="text-6xl 2xl:text-8xl tracking-wide">DEVELOPER</h1>
            <Button label="Resume" link="./assets/documents/Resume - John Waugh.pdf"/>
          </div>
        </div>

        {/* Social Links */}
        <div className="2xl:mt-8 lg:mt-4 flex flex-wrap justify-center gap-6 text-white">
          {[
            { icon: faEnvelope, href: "mailto:johnmwaugh21@gmail.com" },
            { icon: faGithub, href: "https://github.com/johnwaugh1" },
            { icon: faLinkedin, href: "http://www.linkedin.com/in/john-waugh1" },
          ].map(({ icon, href }, index) => (
            <a key={index} href={href} className="group" target="_blank" rel="noopener noreferrer">
              <div className="border border-white/50 rounded-full w-20 h-20 md:h-16 md:w-16 md:text-sm flex items-center justify-center 
              group-hover:bg-green/50 group-hover:text-light-green transition-colors duration-500 backdrop-blur-sm bg-white/10 shadow-lg">
                <FontAwesomeIcon icon={icon} size="3x" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;