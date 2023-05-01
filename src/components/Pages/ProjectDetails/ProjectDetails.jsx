import findProject from "../../../Utilities/findProject"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <>
      <div class='projectDetails'>
      <h1>{project.title}</h1>
      <img class='projectImgDetails' src={project.image} alt='projectImage' />
      <p>{project.description}</p>
        <button>{project.repositoryLink}</button>
        <button>{project.deploymentLink}</button>
      </div>
    </>
  )
}

export default ProjectDetails