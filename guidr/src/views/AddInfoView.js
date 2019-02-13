import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddInfo from "../components/AddInfo";
import { addAdventure, getHomePage } from "../actions";

class AddInfoView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newTrip: {
                "user_id": this.props.user.id,
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
        this.props.history.push(`/user/${this.props.user.id}`)
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

    submitAdventure = ev => {
        ev.preventDefault();
        this.props.addAdventure(this.state.newTrip)
        this.props.getHomePage();
        this.props.isAddingAdventure ? console.log("addVen") : this.props.history.push(`/user/${this.props.user.id}`) 
    }

    render() {
        return (
            <div>
                <AddInfo
                    clearform={this.clearform}
                    handleChanges={this.handleChanges}
                    newTrip={this.state.newTrip}
                    submitAdventure={this.submitAdventure}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    isAddingAdventure: state.isAddingAdventure
})
const mapDispatchToProps = {
    addAdventure,
    getHomePage
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInfoView)



