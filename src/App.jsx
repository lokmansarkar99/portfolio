import {Route, Routes} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import ProjectDetails from './pages/ProjectDetails';
import ContactMe from './components/section/ContactMe';

const App = () => {
  return (
    <Routes>
<Route  path='/' element={<Layout />}>
<Route  index element={<Home />} />
<Route  path='about' element={<About />}/>
<Route  path='contact' element=  {<ContactMe />} />
<Route  path='project/:projectID' element={<ProjectDetails />} />


</Route>




    </Routes>
  )
}

export default App