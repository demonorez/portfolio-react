import { Link } from "react-router-dom"
import hyphenateWords from "../../../Utilities/hyphenateWords"

const ProjectPreview = (props) => {
  return (
    <>
      <div class='projectsPass'>
        <section>
        <img
          class='projectImg'
          src={props.image}
          alt={props.title}
        />
          <h3>
            {props.title} 
          </h3>
          <Link to={hyphenateWords(props.title)}>
          <button>Learn more</button>
          </Link>
        </section>
      </div>
    </>
  )
}

export default ProjectPreview