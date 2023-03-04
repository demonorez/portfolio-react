import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to={'/'}>Michael Robles</NavLink>
      <NavLink className={styles.link} to={'/about'}>About</NavLink>
      <NavLink className={styles.link} to={'/contact'}>Contact</NavLink>
      <NavLink className={styles.link} to={'/resume'}>Resume</NavLink>
      <NavLink className={styles.link} to={'/projects'}>Projects</NavLink>
    </nav>
  )
}

export default Navbar