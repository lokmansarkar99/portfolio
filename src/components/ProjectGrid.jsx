import data from '../data/data.js'
import ProjectCard from './ProjectCard.jsx';
const ProjectGrid = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" style={{ opacity: 1, transform: 'none' }}>
        {data.map(project => (
          <ProjectCard key={project.id} project={project}  />
        ))}
      </div>
    );
  };

  export default ProjectGrid;