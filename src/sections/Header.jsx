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
      <div className="sm:pt-20 md:pt-20 lg:pt-30 2xl:pt-60 w-full flex flex-col items-center text-center">
        {/* Headshot and Intro */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="2xl:w-32 2xl:h-32 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-solid">
            <img
              src="src/assets/images/headshot.jpg"
              alt="Headshot"
              className="object-cover w-full h-full object-[center_-2%]"
            />
          </div>
          <div>
            <h1 className="font-subheader font-bold 2xl:text-4xl sm:text-3xl">John Waugh.</h1>
            <p className="flex items-center 2xl:ml-0 lg:ml-3 mt-1 font-body">
              <img
                src="src/assets/icons/ncflag.png"
                alt="NC Flag"
                width={30}
                className="inline-block mr-2 rounded-sm"
              />
              Based in North Carolina
            </p>
          </div>
        </div>

        {/* Title Section */}
        <div className="mt-6 font-header font-bold">
          <h1 className="text-5xl md:text-6xl lg:text-8xl tracking-wide">SOFTWARE</h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <h1 className="text-5xl md:text-6xl lg:text-8xl tracking-wide">DEVELOPER</h1>
            <Button label="Contact Me"/>
          </div>
        </div>

        {/* Social Links */}
        <div className="2xl:mt-8 lg:mt-4 flex flex-wrap justify-center gap-6">
          {[
            { icon: faEnvelope, href: "mailto:johnmwaugh21@gmail.com" },
            { icon: faGithub, href: "https://github.com/johnwaugh1" },
            { icon: faLinkedin, href: "http://www.linkedin.com/in/john-waugh1" },
          ].map(({ icon, href }, index) => (
            <a key={index} href={href} className="group">
              <div className="border border-white/50 rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center 
              group-hover:bg-forest-green/50 transition-colors duration-500 backdrop-blur-sm bg-white/10 shadow-lg">
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