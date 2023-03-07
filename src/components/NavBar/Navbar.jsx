import { NavLink } from 'react-router-dom'

import styles from "./NavBar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink className={styles.link} to={'/'}>Mike</NavLink></li>
        <li><NavLink className={styles.link} to={'/about'}>About</NavLink></li>
        <li><NavLink className={styles.link} to={'/contact'}>Contact</NavLink></li>
        <li><NavLink className={styles.link} to={'/resume'}>Resume</NavLink></li>
        <li><NavLink className={styles.link} to={'/projects'}>Projects</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

