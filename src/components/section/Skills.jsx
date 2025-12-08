

const Skills = () => {
  return (
    <section id="skills" className="py-20">
    <p className="capitalize text-gray-500 pb-2">my skills</p>

    <h1 className="md:text-4xl text-2xl font-bold">
      Let’s Explore My <br />{" "}
      <span className="text-amber-500">Skills &amp; Experience</span>
    </h1>

    <div className="space-y-2 pt-5 text-gray-800  dark:text-gray-400">
      <p>
        Experienced in building full-stack applications using the MERN stack
        (MongoDB, Express.js, React.js, Node.js).{" "}
      </p>
      Frontend: Proficient in HTML, CSS, Tailwind CSS,  and
      React.js, focusing on responsive, dynamic UIs and state management
      with Redux (basic).
      <p>
        Backend: Skilled in developing RESTful APIs using Node.js and
        Express.js, with strong knowledge of MongoDB for NoSQL and mySQL for SQL  database
        management.
      </p>
      <p>
        Authentication &amp; APIs: Familiar with JWT for secure user
        authentication and Axios for efficient API calls. Dedicated to
        creating scalable, responsive, and secure web applications using
        modern technologies.
      </p>
    </div>

    <div className="py-10" >
      <h1 className="text-3xl">Front-End Development</h1>
      <div className="flex flex-wrap gap-5 my-5">

      <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-orange-500 hover:bg-orange-600 hover:text-white transition duration-300">
            HTML
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-blue-600 hover:bg-blue-700 hover:text-white transition duration-300">
            CSS
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-white transition duration-300">
            JavaScript
          </span>
        </div>

        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-cyan-300 hover:bg-cyan-400 hover:text-white transition duration-300">
            Tailwind
          </span>
        </div>

        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">
            ReactJs
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
            NextJs
          </span>
        </div>
          <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-purple-400 hover:bg-purple-500 hover:text-white transition duration-300">
            RTK
          </span>
        </div>

          <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-amber-400 hover:bg-amber-500 hover:text-white transition duration-300">
            Tanstack Query
          </span>
        </div>
      

     
      </div>
      <h1 className="text-3xl">Backend Development</h1>
      <div className="flex flex-wrap gap-5 my-5">
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-green-600 hover:bg-green-700 hover:text-white transition duration-300">
            NodeJs
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-gray-400 hover:bg-gray-500 hover:text-white transition duration-300">
            ExpressJs
          </span>
        </div>
    
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-orange-400 hover:bg-orange-500 hover:text-white transition duration-300">
           
            Firebase
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-purple-400 hover:bg-purple-500 hover:text-white transition duration-300">
            jwt
          </span>
        </div>
      </div>


      <h1 className="text-3xl">Database and ORM</h1>
      <div className="flex flex-wrap gap-5 my-5">
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-white transition duration-300">
            MongoDB
          </span>
        </div>
             <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-red-400 hover:bg-red-400 hover:text-white transition duration-300">
            Mongoose
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-blue-600 hover:bg-blue-800 hover:text-white transition duration-300">
            MySQL
          </span>
        </div>

             <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-indigo-500 hover:bg-indigo-800 hover:text-white transition duration-300">
            Prisma
          </span>
        </div>

       
      </div>

      <h1 className="text-3xl">DevOps and Cloud</h1>
      <div className="flex flex-wrap gap-5 my-5">
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-orange-500 hover:bg-orange-600 hover:text-white transition duration-300">
            Git
          </span>
        </div>
        <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-gray-400 hover:bg-gray-400 hover:text-white transition duration-300">
            Github
          </span>
        </div>
           <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-green-400 hover:bg-green-600 hover:text-white transition duration-300">
           nginx
          </span>
        </div>
        

                <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-purple-400 hover:bg-purple-600 hover:text-white transition duration-300">
           VPS
          </span>
        </div>


                <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-white hover:bg-yellow-600 hover:text-black transition duration-300">
           Render
          </span>
        </div>


                <div>
          <span className="px-3 py-2 rounded-lg text-black font-bold bg-amber-400 hover:bg-amber-500 hover:text-white transition duration-300">
          Vercel
          </span>
        </div>


      </div>
    </div>
  </section>
  )
}

export default Skills