import React, { Component } from 'react'
import axios from 'axios'
import Logo from "../../images/img1.png"


const initialUser = {
  username: '',
  password: '',
  password2: '',
  email: '',
  name: '',
  location: '',
  bio: '',
  professional: false,
}

class AuthRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: { ...initialUser },
      message: ''
    }
    }
    
    componentDidMount() {
        const target = document.querySelector("form");
        target.classList.toggle("hidden")
    }

  inputHandler = (ev) => {
    const { name, value } = ev.target;
    this.setState({ newUser: { ...this.state.newUser, [name]: value } })
    if (name === "professional") {
      this.setState({ newUser: { ...this.state.newUser, professional: !this.state.professional } })
    }
  }

  submitHandler = (ev) => {
    ev.preventDefault();
    const newUserOff = {
      username: this.state.newUser.username,
      password: this.state.newUser.password,
      email: this.state.newUser.email,
      name: this.state.newUser.name,
      location: this.state.newUser.location,
      bio: this.state.newUser.bio,
      professional: this.state.newUser.professional,
    }
    console.log(newUserOff)
    axios.post("https://guidr2.herokuapp.com/register", newUserOff)
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            message: 'Registration Successful',
            newUser: { ...initialUser },
          })
          this.props.history.push('/')
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <form  autoComplete="on" onSubmit={this.submitHandler}>
          <h1>Sign Up <br/> For</h1>
          <div>
          <img src={Logo} alt=""/>
          </div>
          <div className="regForm">
            <div>
                <div>
                <label htmlFor="username">
                Username
              </label>
                <input className="regInput"
                  type='text'
                  id='username'
                  name='username'
                  value={this.state.newUser.username}
                  onChange={this.inputHandler}
                  placeholder="UserName"
                  required
                 />
              </div>
                <div>
                <label htmlFor="username">
                Email
              </label>
                <input className="regInput"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.newUser.email}
                  onChange={this.inputHandler}
                  required
                />
              </div>

                <div>
                <label htmlFor="username">
                Password
                </label>
                <input className="regInput"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="**********"
                  value={this.state.newUser.password}
                  onChange={this.inputHandler}
                  required
                  />
              </div>
             
                <div>
                <label htmlFor="username">
                Retype Password
                </label>
                <input className="regInput"
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Retype Password"
                  value={this.state.newUser.password2}
                  onChange={this.inputHandler}
                  required
                 />
              </div>
            </div>

            <div>
                <div>
                <label htmlFor="username">
                Full Name
                </label>
                <input className="regInput"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type='text'
                  value={this.state.newUser.name}
                  onChange={this.inputHandler}
                  required
                  />
              </div>
                <div>
                <label htmlFor="username">
                Location
                </label>
                <input className="regInput"
                  id="location"
                  name="location"
                  placeholder="Location"
                  type='text'
                  value={this.state.newUser.location}
                  onChange={this.inputHandler}
                  required
                  />
              </div>
                <div>
                <label htmlFor="username">
                Bio
                </label>
                <textarea className="regInput"
                  id="bio"
                  type="text"
                  name="bio"
                  placeholder="About You!"
                  maxLength="400"
                  value={this.state.newUser.bio}
                  onChange={this.inputHandler}
                  required
                  />
                <label htmlFor="text">
                  Professional?
                  <input className="regInput" onChange={this.inputHandler} value={this.state.newUser.professional} id="professional" type="checkbox" name="professional" placeholder="Professional" />
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className="regButton" hover onClick={ev => this.submitHandler(ev)} type="submit" >
              Submit
        </button>
            <button className="regButton" onClick={ev => this.props.clearForm(ev)} type="button">
              Cancel
        </button>
          </div>
        </form>
      </>
    )
  }
}

export default AuthRegister;