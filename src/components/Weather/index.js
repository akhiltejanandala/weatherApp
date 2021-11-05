import axios from 'axios'
import useState from 'react'

export default function Weather() {
  const state = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ]
  const [weather, setweather] = useState(['kerala'])

  function fetchWeather() {
    const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: {city: document.getElementById('State').event.target.value},
      headers: {
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': 'cb42ac1407msh73ddbcb797d01eap1d4d21jsnfc81e1a1b874',
      },
    }

    axios
      .request(options)
      .then(response => {
        setweather(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="weather-container">
      <label htmlFor="State">Select State</label>
      <div className="state">
        <select
          id="State"
          name="State"
          onChange={event => {
            fetchWeather(event)
          }}
        >
          {state.map(val => (
            <option value={val}>{val}</option>
          ))}
        </select>
      </div>
      <div className="weather-show">
        <div className="weather-wrapper">
          <div className="temp">
            <div className="title-temp">temperature</div>
            <div className="value-temp">{weather.temp}</div>
          </div>
          <div className="hum">
            <div className="title-hum">humidity</div>
            <div className="value-hum">{weather.humidity}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
