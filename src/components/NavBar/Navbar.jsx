import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class='nav'>
      <ul>
        <li><NavLink class='link' to={'/'}>Michael Robles</NavLink></li>
        <li><NavLink class='link' to={'/about'}>About</NavLink></li>
        <li><NavLink class='link' to={'/contact'}>Contact</NavLink></li>
        <li><NavLink class='link' to={'/resume'}>Resume</NavLink></li>
        <li><NavLink class='link' to={'/projects'}>Projects</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

