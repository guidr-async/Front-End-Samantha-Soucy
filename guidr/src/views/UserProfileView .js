import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from "../components/UserProfile/UserProfile";
import { logOut } from "../actions";

export class UserProfileView extends Component {
    state = {
        editingProfile: false
    }
    editingPro = () => {
        console.log("click Pro")
        this.setState({ editingProfile: true })
    }
    doneEditing = () => {
        console.log("click Done")
        this.setState({ editingProfile: false })
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
                    editingPro={this.editingPro}
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