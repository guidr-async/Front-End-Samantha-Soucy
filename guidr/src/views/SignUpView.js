import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "../components/SignUp";

import { addUser, getUsers } from "../actions";

export class SignUpView extends Component{
    state = {
        newUser: {
            username: "",
            email: "",
            password: "",
            password2: "",
            name: "",
            location: "",
            bio: "",
            professional: false
        }
    }
    clearForm = ev => {
        ev.preventDefault();
        this.setState({
            username: "",
            email: "",
            password: "",
            password2: "",
            name: "",
            location: "",
            bio: "",
            professional: false
        })
        this.props.history.push("/")
    }

    handleSubmit = (ev) => {
        const newUserLocal = {
            username: this.state.newUser.username,
            email: this.state.newUser.email,
            password: this.state.newUser.password,
            name: this.state.newUser.name,
            location: this.state.newUser.location,
            bio: this.state.newUser.bio,
            professional: this.state.newUser.professional
        }
        ev.preventDefault()
        if (this.state.password === this.state.password2) {
            this.props.addUser(newUserLocal)
            this.props.error ? alert(this.props.error) : this.clearForm(ev);
        } else {
            alert("Passwords do not match. Please Try Again")
        }
        this.props.getUsers();
    }

        handleChange = (ev) => {
            console.log(ev.target.name, ev.target.value)
            if (ev.target.name === "professional") {
                this.setState({newUser:{...this.state.newUser, professional: !this.state.professional }})
            } else {
                this.setState({newUser:{...this.state.newUser, [ev.target.name]: ev.target.value}})
            }
        }
        render(){
            return (
                <div>
                    <SignUp
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        clearForm={this.clearForm}
                        {...this.props}
                        />
                </div>
            )
        }
    }
    const mapStateToProps = (state) => ({
        error: state.error
    })
    const mapDispatchToProps = {
        addUser,
        getUsers
    }
    export default connect(mapStateToProps, mapDispatchToProps)(SignUpView)


    
