import {useState, React} from 'react'
import './index.css'
import userIcon from '../Images/user-icon.png'

export default function Users() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('user data')),
  )

  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setSearchResults(event.target.value)
  }

  React.useEffect(() => {
    const results = userData.filter(() =>
      userData.toLowerCase().includes(searchTerm),
    )
    setSearchResults(results)
  }, [userData, searchTerm])

  return (
    <div className="users-container">
      <div className="search">
        <label className="search-label" htmlFor="search">
          Search
        </label>
        <div className="searchbar-wrapper">
          <input
            type="text"
            id="search"
            value={searchTerm}
            className="search"
            placeholder="Search user by name...."
            onChange={handleChange}
          />
        </div>
      </div>
      <label className="card-view-label" htmlFor="cardview">
        Card view
      </label>
      <div className="card-view" id="cardview">
        <div className="row">
          {userData.map(val => (
            <div className="column">
              <div className="card">
                <img src={userIcon} alt="user icon" />
                <div className="card-info">
                  {val.username}
                  <br />
                  {val.age}
                  <br />
                  {val.state}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <label className="card-view-label" htmlFor="listview">
        List view
      </label>
      <div className="list-view" id="listview">
        {userData.map(val => (
          <div className="list-view-row">
            <img src={userIcon} className="list-icon" alt="user-icon" />
            {val.username}-{val.age}-{val.state}
          </div>
        ))}
      </div>
    </div>
  )
}
