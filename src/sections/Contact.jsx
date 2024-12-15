import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";

// Easing function to smooth transitions
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

// Function to scramble text based on progress
const smoothScrambleText = (text, progress) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return text
    .split("")
    .map((char) => {
      if (char === " ") return " "; // Preserve spaces
      const randomness = easeInOutQuad(progress);
      const shouldShowOriginal = Math.random() < randomness;
      return shouldShowOriginal ? char : characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");
};

const Contact = () => {
  const [headerText, setHeaderText] = useState({ line1: "John", line2: "Waugh." });
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const originalText = { line1: "John", line2: "Waugh." };
      let iterations = 0;
      const maxIterations = 20; // Total number of iterations

      const interval = setInterval(() => {
        const progress = iterations / maxIterations; // Normalize progress to range [0, 1]
        if (iterations < maxIterations) {
          setHeaderText({
            line1: smoothScrambleText(originalText.line1, progress),
            line2: smoothScrambleText(originalText.line2, progress),
          });
          iterations++;
        } else {
          clearInterval(interval);
          setHeaderText(originalText);
          setIsAnimating(false); // Animation ends
        }
      }, 50); // Adjust the speed of scrambling here

      // Cleanup the interval if the component unmounts
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsAnimating(true); // Start the animation only once per hover
      clearTimeout(timerRef.current);
    }
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-10 pt-6">
      <div className="w-full py-6 px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between border rounded-xl border-white/20 backdrop-blur-[2px] bg-white/10 shadow-xl">
        <div
          className="pb-1 flex flex-col justify-end cursor-pointer"
          onMouseEnter={handleMouseEnter}
        >
          <p className="text-6xl font-header whitespace-pre-line">
            {headerText.line1}
            <br />
            {headerText.line2}
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
                <a
                  href="mailto:johnmwaugh21@gmail.com"
                  className="hover:text-light-green transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/john-waugh1/"
                  className="hover:text-light-green transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/johnwaugh1"
                  className="hover:text-light-green transition-colors"
                >
                  GitHub
                </a>
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
  );
};

export default Contact;
