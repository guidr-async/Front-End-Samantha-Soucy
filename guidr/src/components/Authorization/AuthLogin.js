import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';


const initialUser = {
  username: '',
  password: '',
}

class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
      isLoggedIn: false,
      isLoading: false
    }
  }

  inputHandler = ev => {
    const { name, value } = ev.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

    submitHandler = ev => {
        this.setState({isLoading: true})
        ev.preventDefault();
        axios.post("https://guidr2.herokuapp.com/login", this.state.user)
            .then(resp => {
                console.log("running token")
                localStorage.setItem('token', resp.data.token)
                this.setState({ isLoggedIn: true })
            })
            .then(() => {
                console.log("running token")
                return this.state.isLoggedIn ? this.loginUserTest() : null
            })
            .catch(function (error) {
                console.log(error);
            })
    };

  loginUserTest = (ev) =>{
    const trueUser = this.props.users.find(user=> user.username === this.state.user.username);
    console.log(trueUser)
    console.log(this.props)
    console.log(this.props.users)
    if(trueUser){
       this.props.setUser(trueUser)
       this.props.getUserAdventure(trueUser.id)
       localStorage.setItem('user', JSON.stringify(trueUser))
       this.props.history.push('/homePage')    
    } else{
      alert('Sorry, Please Register First ')
    } 
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.setState({ isLoggedIn: true })
    }
  }
  render() {
      return (

          <form onSubmit={this.submitHandler} autoComplete="on" >
              <div >
                  <label htmlFor="username">
                      Username
                </label>
                  <input
                      type="text"
                      id="username"
                      name="username"
                      value={this.state.user.username}
                      onChange={this.inputHandler}
    
                  />
              </div>
              <div >
                  <label htmlFor="password">
                      Password
                  </label>
                  <input
                      autoComplete="on"
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.user.password}
                      onChange={this.inputHandler}
                      placeholder="******************"
                  />
              </div>
              <div >
                  <button type="submit">
                      Sign In
                  </button>
                  <Link to={"/signUp"} href="#">
                      Need to Register?
                  </Link>
              </div>
          </form>
      )
    }
};


const mapStateToProps = (state) => ({
    username: state.username,
    isLoggedIn : state.isLoggedIn,
    error: state.error,
    users: state.users,
    user: state.user,
    userAdventures: state.userAdventures
  })
  
  const mapDispatchToProps = {
    
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)