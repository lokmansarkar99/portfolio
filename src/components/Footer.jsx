
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/lokmanlogo.png'

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-900-c  shadow shadow-gray-400 dark:shadow-zinc-800-c ">
      <section className="footer max-w-screen-2xl mx-auto text-gray-900 dark:text-gray-400 p-10 flex flex-col  gap-10 md:flex-row justify-between items-start ">
        {/* Logo Column */}
        <nav className="h-full flex flex-col justify-center">
          <img 
            className="w-80" 
            src={logo}
            alt="React Developer Logo"
          />
        </nav>
        
        {/* Quick Access Links */}
        <nav>
          <h6 className="footer-title mb-2 text-lg text-gray-500">Quick Access</h6>
          <div className="flex flex-col gap-2">
                      <HashLink
                        to="/#hero"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-amber-600 transition-colors duration-200"
                      >
                        Home
                      </HashLink>
            
                      <HashLink
                        smooth
                        to="/#about-me"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-amber-600 transition-colors duration-200"
                      >
                        About
                      </HashLink>
            
                      <HashLink
                        smooth
                        to="/#skills"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-amber-600 transition-colors duration-200"
                      >
                        Skills
                      </HashLink>
            
                      <HashLink   
                        smooth
                        to="/#portfolio"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-amber-600 transition-colors duration-200"
                      >
                        Portfolio
                      </HashLink>
            
                      <HashLink
                        smooth
                        to="/#contact-me"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-amber-600 transition-colors duration-200"
                      >
                        Contact
                      </HashLink>
          </div>
        </nav>
        
        {/* Address and Contact Info */}
        <nav>
          <h6 className="footer-title mb-2 text-lg text-gray-500">Address</h6>
          <a className="flex items-center gap-2">
            <span className="text-amber-500">
              <FaMapMarkerAlt />
            </span>
           Mirpur, Dhaka-1216, Bangladesh
          </a>
          <a className="flex items-center gap-2"  href="mailto: lokmansarker608@gmail.com">
            <span className="text-amber-500">
              <MdEmail />
            </span>
            lokmansarkar608@gmail.com
          </a>
          <a className="flex items-center gap-2" href="tel:+8801331457642">
            <span className="text-amber-500">
              <FaPhone />
            </span>
            +88013 31457642
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;