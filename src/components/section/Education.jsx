const Education = () => {
  return (
    <section
      id="education"
      className="px-4 md:px-20  py-10 bg-zinc-100 dark:bg-neutral-900 rounded-lg hover:shadow-2xl hover:shadow-amber-400 transition-all duration-300"
    >
      <h1 className="text-5xl border-b-2 border-amber-400-c p-2 text-center text-amber-400 uppercase font-semibold  text-center">
        Education
      </h1>

      <div id="edication-main" className="  pt-10">
        <div id="edication-text" className="">
          <h1 className="text-3xl pb-2">
            Diploma In Computer Science and Technology
          </h1>
          <p className="font-bold dark:text-gray-500 pb-5">
            TMSS Polytechnic Institute --- (2021 - 2025)
          </p>

          <p className="text-gray-800 dark:text-gray-400">
            My education focuses on developing a strong foundation in computer
            science, covering subjects like programming, data structures,
            algorithms, networking, and software development. Throughout my
            studies, I have gained both theoretical knowledge and practical
            experience in various technologies, working on projects that enhance
            my problem-solving and critical thinking skills. This program has
            helped me understand the fundamentals of system design, database
            management, and modern web technologies, preparing me for a career
            in the dynamic field of technology
          </p>
          <br />

          <p className="text-gray-800 dark:text-gray-400">
            <span className="text-amber-600 dark:text-amber-400 font-bold">Institute</span>: TMSS
            Polytechnic Institute <br />
            <span className="text-amber-600 dark:text-amber-400 font-bold">Location</span>: Parulia,
            Joyurhat, Bangladesh <br />
            <span className="text-amber-600 dark:text-amber-400 font-bold">Depertment</span>:
            Computer Science &amp; Technology <br />
            <span className="text-amber-600 dark:text-amber-400 font-bold">EIIN No</span>: 19086
            <br />
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              Core Skills I Learn Here
            </span>
            : Python, Java, Data Structure And Algorithm, DBMS, Networking,
            Computer Architecture, Business Communication, Web Development(PHP,
            Javascript ) and more <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
