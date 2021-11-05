import {Component} from 'react'

import './index.css'

class AddUser extends Component {
  state = {
    username: '',
    email: '',
    phone: '',
    dob: '',
    countrystate: 'Select State',
  }

  submitForm = event => {
    event.preventDefault()
    const {username, email, phone, dob, countrystate} = this.state
    const userDetails = {username, email, phone, dob, countrystate}
    localStorage.setItem('user data', JSON.stringify(userDetails))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhone = event => {
    this.setState({phone: event.target.value})
  }

  onChangeDob = event => {
    this.setState({dob: event.target.value})
  }

  onChangeState = event => {
    this.setState({countrystate: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderEmail = () => {
    const {email} = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  renderPhone = () => {
    const {phone} = this.state
    return (
      <>
        <label className="input-label" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="input-field"
          value={phone}
          onChange={this.onChangePhone}
          placeholder="Phone"
        />
      </>
    )
  }

  renderDob = () => {
    const {dob} = this.state
    return (
      <>
        <label className="input-label" htmlFor="dob">
          DOB
        </label>
        <div>
          <input
            type="text"
            id="dob"
            className="input-field"
            value={dob}
            onChange={this.onChangeDob}
            placeholder="dd/mm/yyyy"
          />
          <img src="" alt="calender" className="calender-icon" />
        </div>
      </>
    )
  }

  renderState = () => {
    const {countrystate} = this.state
    return (
      <>
        <label>
          <select value={countrystate} onChange={this.onChangeState}>
            <option value="1">Andhra Pradesh</option>
            <option value="2">Arunachal Pradesh</option>
            <option value="3">Assam</option>
            <option value="4">Bihar</option>
            <option value="5">Chattisgarh</option>
            <option value="6">Goa</option>
            <option value="7">Gujarat</option>
            <option value="8">Haryana</option>
            <option value="9">Himachal Pradesh</option>
            <option value="10">Jammu and Kashmir</option>
            <option value="11">Jharkhand</option>
            <option value="12">Karnataka</option>
            <option value="13">Kerala</option>
            <option value="14">Madhya Pradesh</option>
            <option value="15">Maharastra</option>
            <option value="16">Manipur</option>
            <option value="17">Meghalaya</option>
            <option value="18">Mizoram</option>
            <option value="19">Nagaland</option>
            <option value="20">Odisha</option>
            <option value="21">Punjab</option>
            <option value="22">Rajastan</option>
            <option value="23">Sikkim</option>
            <option value="24">Tamil Nadu</option>
            <option value="25">Telangana</option>
            <option value="26">Tripura</option>
            <option value="27">Uttarakhand</option>
            <option value="28">Uttar Pradesh</option>
            <option value="29">West Bengal</option>
            <option value="30">Andaman and Nicobar Islands</option>
            <option value="31">Chandigarh</option>
            <option value="32">Dadra and Nagar Haveli</option>
            <option value="33">Daman and Diu</option>
            <option value="34">Delhi</option>
            <option value="35">Lakshadweep</option>
            <option value="36">Puducherry</option>
          </select>
        </label>
      </>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsername()}</div>
          <div className="input-container">{this.renderEmail()}</div>
          <div className="input-container">{this.renderPhone()}</div>
          <div className="input-container">{this.renderDob()}</div>
          <div className="input-container">{this.renderState()}</div>
          <button type="submit" className="create-user">
            Create User
          </button>
        </form>
      </div>
    )
  }
}

export default AddUser
