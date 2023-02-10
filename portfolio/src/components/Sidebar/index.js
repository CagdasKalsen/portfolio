import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <h2 className="first">Cagdas</h2>
          <h2 className="last">Kalsen</h2>
        </Link>
      </div>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
      </nav>
    </>
  )
}

export default Sidebar
