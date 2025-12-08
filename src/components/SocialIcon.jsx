import {  FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const SocialIcon = () => {
  return (
    <div className="flex gap-5 py-5">
    <Link 
      to="https://github.com/lokmansarkar99/" 
      target="_blank" 
      className="hover:shadow-2xl hover:scale-110 hover:shadow-amber-400 duration-300 rounded-full"
    >
      <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
        <FaGithub />
      </p>
    </Link>
    <Link 
      to="https://www.facebook.com/lokman.sarkar.382" 
      target="_blank" 
      className="hover:shadow-2xl hover:scale-110 hover:shadow-amber-400 duration-300 rounded-full"
    >
      <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
        <FaFacebook />
      </p>
    </Link>
    <Link 
      to="https://www.linkedin.com/in/lokman-sarkar/" 
      target="_blank" 
      className="hover:shadow-2xl hover:scale-110 hover:shadow-amber-400 duration-300 rounded-full"
    >
      <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
        <FaLinkedin />
      </p>
    </Link>
  </div>
  )
}

export default SocialIcon