import { NavLink } from 'react-router-dom'
import s  from './Header.module.css'

export default function Header() {
  return (
  <header className={s.header}>
    <nav>
      <ul className={s.nav_list}>
      <li className={s.nav_item}>
      <NavLink className={s.nav_link} to ="/">Home</NavLink>
      </li>
      <li className={s.nav_item}>
        <NavLink className={s.nav_link}  to ="/works">Works</NavLink>
       </li>
       <li className={s.nav_item}>
        <NavLink className={s.nav_link} to ="/blog">Blog</NavLink>
        </li>
        <li className={s.nav_item}>
        <NavLink className={s.nav_link} to ="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  )
}
