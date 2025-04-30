import { FaCode } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";

import av2 from '../../assets/av2.jpg'

const AboutMe = () => {
  return (
    <section id="about-me"
        className="px-4 md:px-20  py-15 bg-zinc-100 dark:bg-neutral-900 rounded-lg hover:shadow-2xl hover:shadow-amber-400 transition-all duration-300"
      >
        <h1 className="text-5xl border-b-2 border-amber-400 p-2 text-center text-amber-400 uppercase font-semibold  text-center">
          About Me
        </h1>

        <div
          id="about-main"
          className="flex flex-col items-center justify-center gap-10 md:flex-row pt-10"
        >
          <div id="about-img">
            <div className="w-50 border-amber-400 border-6">
              <img
                className="relative right-4 top-4"
                src={av2}
                alt="avatar"
                width="100%"
              />
            </div>
          </div>

          <div id="about-text" className="">
            <h2 className="text-4xl text-gray-800 dark:text-gray-200">
              Full-Stack Web Developer
            </h2>
            <p className=" dark:text-gray-400 py-4">
              Hi! I’m Lokman Sarkar, a passionate MERN stack developer with
              expertise in React, Node.js, MongoDB, Tailwind CSS, and more. I
              specialize in building modern, user-focused web applications that
              deliver seamless experiences. Currently pursuing my studies at
              TMSS Polytechnic Institute, I’m fueled by creativity and inspired
              by innovation. Beyond coding, I enjoy drawing, traveling, gaming,
              sipping coffee, and continuously learning to enhance my skills.
              Let’s collaborate to bring your ideas to life!
            </p>

            <div className="personal-info py-4 ">
              <p className="text-amber-600 dark:text-amber-400 font-bold">
                Name: 

                <span className="text-gray-800 dark:text-gray-400 font-semibold">
                   Lokman Sarkar
                </span>
              </p>
              <p className="text-amber-600 dark:text-amber-400 font-bold">
                Nationality:{" "}
                <span className="text-gray-800 dark:text-gray-400 font-semibold">
                  Bangladesh
                </span>
              </p>
              <p className="text-amber-600 dark:text-amber-400 font-bold">
                Address:{" "}
                <span className="text-gray-800 dark:text-gray-400 font-semibold">
                  Joypurhat, Bangladesh
                </span>
              </p>
              <p className="text-amber-600 dark:text-amber-400 font-bold">
                Phone:{" "}
                <span className="text-gray-800 dark:text-gray-400 font-semibold">
                  +880 1331457642
                </span>
              </p>
              <p className="text-amber-600 dark:text-amber-400 font-bold">
                Email:{" "}
                <span className="text-gray-800 dark:text-gray-400 font-semibold">
                  lokmansarkar608@gmail.com
                </span>
              </p>
              <p className="text-amber-600 dark:text-amber-400 font-bold">
                Education:{" "}
                <span className="text-gray-800 dark:text-gray-400 font-semibold">
                  Diploma In Computer Science & Technology
                </span>
              </p>
            </div>

            <div id="interest">
              <h2 className="text-4xl md:text-5xl text-amber-500 mt-10 font-semibold">
                My Interest In
              </h2>

              <div
                id="interest-section"
                className="flex flex-wrap gap-5  items-center mt-5"
              >
                <div id="interest-item " className=" ">
                  <div
                    className="group w-[60px] h-[60px] border-2 border-amber-500 rounded-full inline-flex 
      items-center justify-center
      hover:shadow-2xl hover:shadow-amber-400 hover:bg-amber-500 transition-all duration-300 hover:text-white"
                  >
                    <FaCode className="text-amber-400 text-2xl group-hover:text-white" />
                  </div>
                  <p>Coding</p>
                </div>

                <div id="interest-item " className=" ">
                  <div
                    className="group w-[60px] h-[60px] border-2 border-amber-500 rounded-full inline-flex 
      items-center justify-center
      hover:shadow-2xl hover:shadow-amber-400 hover:bg-amber-500 transition-all duration-300 hover:text-white"
                  >
                    <MdOutlineTravelExplore className="text-amber-400 text-2xl group-hover:text-white" />
                  </div>
                  <p>Explore</p>
                </div>

                <div id="interest-item " className=" ">
                  <div
                    className="group w-[60px] h-[60px] border-2 border-amber-500 rounded-full inline-flex 
      items-center justify-center
      hover:shadow-2xl hover:shadow-amber-400 hover:bg-amber-500 transition-all duration-300 hover:text-white"
                  >
                    <FaBookReader className="text-amber-400 text-2xl group-hover:text-white" />
                  </div>
                  <p>Learing</p>
                </div>

                <div id="interest-item " className=" ">
                  <div
                    className="group w-[60px] h-[60px] border-2 border-amber-500 rounded-full inline-flex 
      items-center justify-center
      hover:shadow-2xl hover:shadow-amber-400 hover:bg-amber-500 transition-all duration-300 hover:text-white"
                  >
                    <IoAirplaneSharp className="text-amber-400 text-2xl group-hover:text-white" />
                  </div>
                  <p>Travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe