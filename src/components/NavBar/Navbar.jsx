import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg'

const Navbar = () => {
  return (
    <nav>
      <NavLink to={'/'}>Michael Robles</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/resume'}>Resume</NavLink>
      <NavLink to={'/projects'}>Projects</NavLink>
    </nav>
  )
}

export default Navbar