import ProjectsList from "../ProjectsList/ProjectsList"
import { projects } from "../../../data/Projects"

const Projects = () => {
  return (
    <>
      <ProjectsList projects={projects}/>
    </>
  )
}

export default Projects