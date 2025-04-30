import {  FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialIcon = () => {
  return (
    <div className="flex gap-5 py-5">
    <a 
      href="" 
      target="blank" 
      className="hover:shadow-2xl hover:scale-110 hover:shadow-amber-400 duration-300 rounded-full"
    >
      <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
        <FaGithub />
      </p>
    </a>
    <a 
      href="https://www.facebook.com/lokman.sarkar.382" 
      target="_blank" 
      className="hover:shadow-2xl hover:scale-110 hover:shadow-amber-400 duration-300 rounded-full"
    >
      <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
        <FaFacebook />
      </p>
    </a>
    <a 
      href="https://www.linkedin.com/in/lokman-sarkar/" 
      target="_blank" 
      className="hover:shadow-2xl hover:scale-110 hover:shadow-amber-400 duration-300 rounded-full"
    >
      <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
        <FaLinkedin />
      </p>
    </a>
  </div>
  )
}

export default SocialIcon