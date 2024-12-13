import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <section
      id="home"
      className="z-50 w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="pt-60 px-6 md:px-0 w-full flex flex-col items-center text-center">
        {/* Headshot and Intro */}
        <div className="flex items-center gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-solid">
            <img
              src="src/assets/images/headshot.jpg"
              alt="Headshot"
              className="object-cover w-full h-full object-[center_-2%]"
            />
          </div>
          <div>
            <h1 className="font-coda text-4xl">
              John Waugh
            </h1>
            <p className="flex items-center text-base mt-1 font-coda">
              <img
                src="src/assets/icons/ncflag.png"
                alt="NC Flag"
                width={40}
                className="inline-block mr-2 rounded-sm"
              />
              Based in North Carolina
            </p></div>
        </div>

        {/* Title Section */}
        <div className="mt-6">
          <h1 className="text-8xl md:text-8xl font-coda tracking-wide">
            SOFTWARE
          </h1>
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-8xl md:text-8xl font-coda tracking-wide mt-1">
              DEVELOPER
            </h1>
            <Button label="Contact Me"/>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          {[
            { icon: faEnvelope, href: "mailto:johnmwaugh21@gmail.com" },
            { icon: faGithub, href: "https://github.com/johnwaugh1" },
            { icon: faLinkedin, href: "http://www.linkedin.com/in/john-waugh1" },
          ].map(({ icon, href }, index) => (
            <a key={index} href={href} className="group">
              <div className="border border-white/50 rounded-full w-16 h-16 md:w-20 md:h-20 
              flex items-center justify-center group-hover:bg-forest-green/50 transition-colors 
              duration-500 backdrop-blur-sm bg-white/10 shadow-lg">
                <FontAwesomeIcon icon={icon} size="2x" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
