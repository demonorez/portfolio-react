import { projects } from "../../data/Projects"
import ProjectPreview from './ProjectPreview'
const ProjectsList = () => {
  return (
    <ul>
      {projects.map((project) =>
        <ProjectPreview key={project.title} title={project.title} image={project.image} />
        )}
    </ul>
  )
}

export default ProjectsList