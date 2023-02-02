import { projects } from "../../data/Projects"

const ProjectDetails = () => {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image}/>
      <button>{projects[0].repositoryLink}</button>
      <button>{projects[0].deploymentLink}</button>
    </>
  )
}

export default ProjectDetails