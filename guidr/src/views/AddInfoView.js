import React, { Component } from 'react';
import AddInfo from "../components/AddInfo";

export default class AddInfoView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newTrip: {
                "adventure_type": "",
                "title": "",
                "location": "",
                "duration": "",
                "descriptioon": "",
                "professional": false,
                "date": null

            }
        }
    }

    clearform = ev => {
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
        this.props.history.push("/user")
    }
    handleChanges = ev => {
        console.log(ev.target.value)
        if (ev.target.name === "adventure_type") {
            this.setState({
                newTrip: ({
                    ...this.state.newTrip,
                    "adventure_type": ev.target.value
                })
            })
        }
        else if (ev.target.value === "professional") {
            this.setState({
                newTrip: ({
                    ...this.state.newTrip,
                    "professional": true
                })
            })
        }
        else if (ev.target.value === "personal") {
            this.setState({
                newTrip: ({
                    ...this.state.newTrip,
                    "professional": false
                })
            })
        
        }else {
            this.setState({
                newTrip: ({
                    ...this.state.newTrip,
                    [ev.target.name]: ev.target.value
                })
            })
        }
    }

    render() {
        return (
            <div>
                <AddInfo
                    clearform={this.clearform}
                    handleChanges={this.handleChanges}
                    newTrip={this.state.newTrip}
                />
            </div>
        )
    }

}