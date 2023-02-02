import { projects } from "../../data/Projects"

const ProjectsList = () => {
  return (
    <ul>
      {projects.map(project =>
        <li>{project.title}</li>
        )}
    </ul>
  )
}

export default ProjectsList