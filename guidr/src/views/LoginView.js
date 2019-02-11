import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { userLogin } from "../actions";

export class LoginView extends Component {
    state = {
        loggingIn: {
            username: "",
            password: ""
        }
    }

    handleChange = (ev) => {
        console.log(ev.target.name, ev.target.value)
        this.setState({loggingIn:{...this.loggingIn, [ev.target.name]: ev.target.value}})
    }
    submitLogin = ev => {
        ev.preventdefault();
        this.props.userLogin(this.state.loggingIn)
        this.props.error ? alert(this.props.error) : this.props.history.push("/homePage");
    }
    render() {
        return (
            <div>
                <Login
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
    error: state.error
})

const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
