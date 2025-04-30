import data from '../data/data'
import { useParams } from 'react-router'

import { FaTelegramPlane } from "react-icons/fa";

import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { projectID } = useParams()
  const project = data.find((project) => project.id === projectID)

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-semibold text-gray-600">
        Project not found
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl dark:text-gray-200 font-bold text-center mb-4 text-gray-800 leading-tight">
        {project.title}
      </h1>
     <div className='flex flex-col items-center justify-center mb-4'>
     <p  className='md:w-[60%]  text-sm text-gray-800 dark:text-gray-200 mb-4'>  {project.intro} </p>
     </div>

    <div className='w-full flex items-center justify-center mb-4'>
        <div className=' w-40 text-black flex bg-amber-400 hover:bg-amber-500 hover:transition-all duration-500  items-center justify-center rounded p-1' ><FaTelegramPlane />  <a  className='px-4 py-2' href="/contact">Hire Me</a></div></div>

<div className='flex flex-col md:flex-row gap-4 items-center justify-center'> 
<div id='details-side-card' className='min-h-96 w-full flex-1 bg-zinc-100 dark:bg-neutral-700 text-white p-4 rounded-lg shadow-lg mb-8'>

  <h2 className=' text-2xl  text-black dark:text-gray-400'>View Site On</h2>

       <div className="flex mt-5  items-center gap-6 ml-2 mb-4 text-black ">
        <div className="flex gap-2 items-center dark:text-amber-400 underline decoration-1 dark:decoration-amber-700 "><IoLinkOutline />  <a href={project.live_link}className=" dark:hover:text-amber-500 " target="_blank" >Live Link</a></div>
       <div className="flex gap-2 items-center dark:text-amber-400 underline decoration-1 dark:decoration-amber-700  "> <FaGithub /> <a className="dark:hover:text-amber-500  " href={project.github_link} >Github </a></div>

        </div>

<div className='pb-6 border-b border-gray-400 dark:border-white'></div>


        <h2 className=' text-2xl pt-4 text-black dark:text-gray-400'>Front End</h2>
        {project.frontend.map((tech, index) => {
          return (
            <span key={index} className="text-sm px-5 py-2  text-gray-800 dark:text-gray-200 ">
              {`- ${tech} `}
            </span>
          )
        })}
<div className='pb-6 border-b border-gray-400 dark:border-white'></div>

<h2 className=' text-2xl pt-4 text-black dark:text-gray-400'>Back End</h2>
        {project.backend.map((tech, index) => {
          return (
            <span key={index} className="text-sm px-5 py-2 text-gray-800 dark:text-gray-200   ">
              {` - ${tech} `}
            </span>
          )
        })}



</div>
<div className="rounded-lg overflow-hidden shadow-lg mb-8 flex-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>


</div>

<div id="project-details" className='text-gray-800 dark:text-gray-200 mb-4'>


<div id="project-summary" className='py-4'> 
<h2 className='text-3xl mb-2 dark:text-gray-100'>Project Summary </h2>
<p className='text-sm'> {project.project_summary} </p>

</div>



<div id="technology-details" className='py-4'>
<h2 className='text-3xl mb-2 dark:text-gray-100'>Technology Used </h2>
<p className='text-sm'> {project.tech_details} </p>

</div>

<div id="challanges" className='py-4'>
<h2 className='text-3xl mb-2 dark:text-gray-100'>Challanges </h2>
<p className='text-sm'> {project.challanges} </p>

</div>




<div id="limitation" className='py-4'>
<h2 className='text-3xl mb-2 dark:text-gray-100'>Limitaion </h2>
<p className='text-sm'> {project.Limitation} </p>

</div>


<div id="futulre-scopes" className='py-4'>
<h2 className='text-3xl mb-2 dark:text-gray-100'>Future Scopes </h2>
<p className='text-sm'> {project.future_scope} </p>

</div>


</div>

    </div>
  )
}

export default ProjectDetails
