import './index.css'
import {withRouter, Link} from 'react-router-dom'
import users from '../Images/users.png'
import weather from '../Images/weather.png'
import logo from '../Images/Logo.png'

function Sidebar() {
  return (
    <div className="Sidebar-container">
      <div className="logo-div">
        <img src={logo} alt="users" className="logo" />
      </div>

      <Link to="/AddUser">
        <button className="sidebar-button" type="button">
          <img className="logo-sub" src={users} alt="users" />
          Add users
        </button>
      </Link>
      <Link to="/users">
        <button className="sidebar-button" type="button">
          <img className="logo-sub" src={users} alt="users" />
          Users
        </button>
      </Link>
      <Link to="/weather">
        <button className="sidebar-button" type="button">
          <img className="logo-sub" src={weather} alt="users" />
          Weather
        </button>
      </Link>
    </div>
  )
}

export default withRouter(Sidebar)
