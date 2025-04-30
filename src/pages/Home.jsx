
import Hero from "../components/section/Hero";
import AboutMe from "../components/section/AboutMe";
import Skills from "../components/section/Skills";
import Education from "../components/section/Education";
import Portfolio from "../components/section/Portfolio";
import ProjectGrid from "../components/ProjectGrid";
import ContactMe from "../components/section/ContactMe";

const Home = () => {



  return (
    <div className="container mx-auto px-5 md:px-10 py-10">
     <Hero />

  <AboutMe />

     <Skills />
<Education />

<Portfolio />

<ProjectGrid />


<ContactMe />



    </div>
  );
};

export default Home;
