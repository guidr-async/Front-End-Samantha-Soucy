import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from "../components/UserProfile/UserProfile";
import { logOut } from "../actions";

export class UserProfileView extends Component {
    state = {
        editingProfile: false,
        isEditingTrip: false
    }
    editingPro = () => {
        console.log("click Pro")
        this.setState({ editingProfile: true })
    }
    editingTrip = () => {
        this.setState({isEditingTrip: true})
    }
    doneEditing = () => {
        console.log("click Done")
        this.setState({ editingProfile: false, isEditingTrip: false })
    }

    logout = () => {
        this.props.logOut()
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <UserProfile
                    user={this.props.user}
                    logout={this.logout}
                    editingProfile={this.state.editingProfile}
                    isEditingTrip={this.state.isEditingTrip}
                    editingPro={this.editingPro}
                    editingTrip={this.editingTrip}
                    doneEditing={this.doneEditing}
                    userAdventures={this.state.userAdventures}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
    user: state.user,
    userAdventures: state.userAdventures
})

const mapDispatchToProps = {
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);