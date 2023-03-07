const Resume = () => {
  return (
    <>
      <h1>Feel free to download my resume below.</h1>
      <div class='resume'>
        <embed src='MyResume.pdf' type='application/pdf' id='resume' class='resume' />
        <br />
        <a href="/MyResume.pdf" download>
          <button>Click here to download my Resume</button>
        </a>
      </div>
    </>
  )
}

export default Resume