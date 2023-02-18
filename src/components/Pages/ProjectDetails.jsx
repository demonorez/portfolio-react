import findProject from "../../Utilities/findProject"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image}/>
      <button>{project.repositoryLink}</button>
      <button>{project.deploymentLink}</button>
    </>
  )
}

export default ProjectDetails