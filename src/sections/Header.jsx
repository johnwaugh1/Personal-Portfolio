import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="pt-60 px-4 md:px-0 z-50 w-full flex flex-col items-center">
        <div className="pt-2 text-center flex items-center justify-center gap-1">
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-solid border-2">
            <img
              src="src/assets/images/headshot.jpg"
              alt="Headshot"
              width={100}
              height={100}
              className="object-cover w-full h-full object-[center_-2%]" />
          </div>
          <div className="px-5 mt-3">
            <h1 className="font-coda text-4xl text-left leading-5">
              John Waugh
              <br />
              <br />
              <span className="text-base">
                <img
                  src="src/assets/icons/ncflag.png"
                  alt="NC Flag"
                  width={40}
                  className="inline-block mr-3 -mt-1 ml-0.5 rounded-sm"
                />
                Based in North Carolina
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 pt-3">
          <h1 className="text-8xl md:text:4xl font-coda">
            SOFTWARE
          </h1>
        </div>
        <div className="flex items-center justify-center gap-1 -mt-3">
          <h1 className="text-8xl md:text:4xl font-coda px-3">
            DEVELOPER
          </h1>
          <Button
            label="Contact Me" />
        </div>
        <div className="pt-2 text-center flex justify-center gap-6">
          <a href="">
            <div className="border-2 border-gray-500 rounded-full w-20 h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </div>
          </a>
          <a href="">
            <div className="border-2 border-gray-500 rounded-full w-20 h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </div>
          </a>
          <a href="">
            <div className="border-2 border-gray-500 rounded-full w-20 h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header