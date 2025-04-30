import SocialIcon from "../SocialIcon"
import avatar from '../../assets/avatar.png'

const Hero = () => {
  return (
    <section id="home"
    className="w-full flex flex-col md:flex-row justify-between  gap-10 md:py-20"
  >
    <div id="hero-text" className="order-2 md:order-1 flex-1">
      <h1 className="  dark:text-gray-400 text-5xl  py-2">Hello, I`m</h1>
      <h1 className="text-amber-400 text-4xl py-2 md:text-5xl">
        Lokman Sarkar
      </h1>
      <h1 className="text-blue-400 dark:text-gray-200 text-3xl md:text-5xl  py-2">
        MERN Stack Enthusiast
      </h1>
      <p className="py-5 text-gray-900 font-semibold   dark:text-gray-400 md:w-[90%]">
        Creating seamless and engaging web solutions with expertise in
        React, Tailwind CSS,  Node, Express, MongoDB and mySQL.
      </p>

   <SocialIcon  />

      <div id="info-btn" className="flex gap-1 mt-5">
        <button className="bg-amber-400   px-4 py-3 text-xl  text-black hover:text-white font-semibold hover:bg-amber-500 transition-all duration-500 ">
          Hire Me{" "}
        </button>

        <button className="bg-slate-400 px-4 py-3 text-xl text-black hover:text-white font-semibold hover:bg-slate-500 transition-all duration-500 ">
          Download CV <span></span>
        </button>
      </div>
    </div>

    <div id="hero-image" className=" order-1 md:order-2 flex-1 flex  justify-center">
      <img className="w-[80%] md:relative md:-top-10" src={avatar} alt="avatar"  />
    </div>
  </section>
  )
}

export default Hero