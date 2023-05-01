const Resume = () => {
  return (
    <>
      <h1>Feel free to download my resume below.</h1>
      <div class='resume'>
        <img src={'/Resume.png'}></img>
      </div>
        <a href="/MyResume.pdf" download>
          <button>Click here to download my Resume</button>
        </a>
    </>
  )
}

export default Resume