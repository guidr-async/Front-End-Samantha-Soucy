import React, { Component } from "react"
import { connect } from "react-redux";
import HomePage from "../components/HomePage/HomePage";
import { getHomePage, getUsers, logOut } from "../actions";

export class HomePageView extends Component {
    componentDidMount() {
        this.props.getHomePage()
    }
    logout = () => {
        this.props.logOut()
        this.props.history.push("/")
    }
    render() {
        console.log(this.props.users)
        return (
            <div>
                <HomePage
                    adventures={this.props.adventures}
                    users={this.props.users}
                    logout={this.logout}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchingInfo: state.fetchingInfo,
    adventures: state.adventures,
    error: state.error,
    users: state.users,
    loggedIn: state.loggedIn
    
})

const mapDispatchToProps = {
    getHomePage,
    getUsers,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageView)