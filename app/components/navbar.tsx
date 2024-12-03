import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <nav className='flex p-4 h-14 shadow-md gap-4'>
      <NavLink to='/' end viewTransition>
        {({ isActive }) => <span className={isActive ? "text-red-400" : ""}>Home</span>}
      </NavLink>
      <NavLink to='/about' end viewTransition>
        {({ isActive }) => <span className={isActive ? "text-red-400" : ""}>About</span>}
      </NavLink>
    </nav>
  )
}
