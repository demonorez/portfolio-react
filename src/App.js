import { Routes, Route } from 'react-router-dom'
import Landing from './components/Pages/Landing/Landing'
import About from './components/Pages/About/About'
import Contact from './components/Pages/Contact/Contact'
import Resume from './components/Pages/Resume/Resume'
import Projects from './components/Pages/Projects/Projects'
import Navbar from './components/NavBar/Navbar'
import ProjectDetails from './components/Pages/ProjectDetails/ProjectDetails'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:projectDetails' element={<ProjectDetails/>} />
        </Routes>
    </>
  )
}

export default App

