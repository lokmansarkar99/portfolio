import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-zinc-200 dark:bg-zinc-800 p-5 transition-shadow hover:shadow-amber-500 hover:shadow-xl rounded-xl duration-1000">
      <div className="relative">
        <img
          className="md:h-96 md:object-cover w-full rounded-xl"
          src={project.image}
          alt={project.title}
        />
        <a
          className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex flex-col justify-center items-center"
          href={`/project/${project.id}`}
          data-discover="true"
          target="_blank"
        >
          <p className="text-amber-500 text-3xl -rotate-45 hover:rotate-0 duration-500 hover:bg-amber-500 hover:text-black p-3 border rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </p>
          <p className="text-2xl text-white">see details</p>
        </a>
      </div>

      <div className="flex mt-5  items-center gap-6 ml-2 ">
        <div className="flex gap-2 items-center dark:text-amber-400 underline decoration-1 dark:decoration-amber-700 ">
          <IoLinkOutline />{" "}
          <a
            href={project.live_link}
            className=" dark:hover:text-amber-500 "
            target="_blank"
          >
            Live Link
          </a>
        </div>
        <div className="flex gap-2 items-center dark:text-amber-400 underline decoration-1 dark:decoration-amber-700  ">
          {" "}
          <FaGithub />{" "}
          <a className="dark:hover:text-amber-500  " href={project.github_link}>
            Github{" "}
          </a>
        </div>

        <div className="flex gap-2 items-center dark:text-amber-400 underline decoration-1 dark:decoration-amber-700  ">
          {" "}
          <CgDetailsMore />{" "}
          <a className="dark:hover:text-amber-500  " href={`/project/${project.id}`} target="_blank">
            Details
          </a>
        </div>

      </div>

      <div className="mt-10 mb-3 gap-5 flex flex-wrap">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-5 py-2 rounded-3xl border hover:bg-amber-500 hover:text-black duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <h1 className="py-3 text-2xl text-gray-800 dark:text-white">
          {project.title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;
