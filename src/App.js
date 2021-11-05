import './App.css'
import {Component} from 'react'
import {Router, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Weather from './components/Weather'
import AddUser from './components/AddUser'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <Router>
            <Sidebar />
            <Topbar />

            <Route path="/addusers">
              <AddUser />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
