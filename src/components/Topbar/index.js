import './index.css'
import userIcon from '../Images/user-icon.png'

function Topbar() {
  const date = new Date()
  const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthList = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ]
  const month = date.getMonth()
  const day = date.getDay()
  const dates = date.getDate()

  function formattedDate() {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const meridian = hours >= 12 ? 'PM' : 'AM'
    const hour = hours % 12 || 12
    const strTime = `${hour}:${minutes} ${meridian}`
    return strTime
  }
  const finalDate = `${dayList[day]} ${dates} ${
    monthList[month]
  } ${formattedDate(date)}`

  return (
    <div className="Topbar-container">
      <div className="date">{finalDate}</div>
      <div className="welcome">
        <p className="welcome-note">welcome John</p>{' '}
        <img src={userIcon} alt="user-icon" />{' '}
      </div>
    </div>
  )
}

export default Topbar
