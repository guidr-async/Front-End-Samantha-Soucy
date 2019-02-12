import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { userLogin, getUsers, getSingleUser, setUser, getUserAdventure } from "../actions";

export class LoginView extends Component {
    state = {
        userLoggingIn: {
            username: "",
            password: ""
        }
    }
    
    loginUserTest = (ev) => {
        ev.preventDefault();
        const trueUser = this.props.users.find(user=> user.username === this.state.userLoggingIn.username);
        if (trueUser) {
            this.submitLogin(trueUser)
            this.props.getUserAdventure(trueUser.id)
        } else {
            alert("sorry, you must register first")
        }
    }
    componentDidMount() {
        this.props.getUsers();
    }

    handleChange = (ev) => {
        // console.log(ev.target.name, ev.target.value)
        this.setState({userLoggingIn:{...this.state.userLoggingIn, [ev.target.name]: ev.target.value}})
    }
    submitLogin = user => {
        this.props.setUser(user)
        this.props.error ? alert(this.props.error) : this.props.history.push("/homePage");
    }
    render() {
        return (
            <div>
                <Login
                    loginUserTest={this.loginUserTest}
                    submitLogin={this.submitLogin}
                    handleChange={this.handleChange}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.username,
    loggedIn: state.loggedIn,
    error: state.error,
    user: state.user,
    users: state.users
})

const mapDispatchToProps = {
    userLogin,
    getUsers,
    getSingleUser,
    setUser,
    getUserAdventure
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
