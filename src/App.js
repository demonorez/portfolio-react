import { Routes, Route } from 'react-router-dom'
import Landing from './components/Pages/Landing'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Resume from './components/Pages/Resume'
import ProjectsList from './components/Pages/ProjectsList'
import Navbar from './components/NavBar/Navbar'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Navbar />
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<ProjectsList/>} />

    </Routes>
  );
}

export default App;
