const About = () => {
  return (
    <section
      id="about"
      className="w-full py-6 px-4 sm:px-6 md:px-10 border rounded-xl border-white/20 backdrop-blur-[2px] bg-white/10 shadow-lg"
    >
      <h1 className="text-4xl text-center font-subheader">Hi, I'm John Waugh.</h1>
      <br />
      <p className="text-base sm:text-lg md:text-2xl text-center font-body font-extralight leading-7 sm:leading-8">
        A student currently pursuing a Bachelor's in Computer Science and Master's in Data Science and Visual Computing.<br />
        Also, I'm an Embedded Systems Engineer and Operations Lead at Team Sunergy, the Appalachian State Solar Vehicle Team.<br />
        I am currently seeking an internship in AI/ML, data science, web development, or embedded systems.
      </p>
    </section>
  );
};

export default About;