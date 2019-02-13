import React, { Component } from "react"
import { connect } from "react-redux";
import HomePage from "../components/HomePage/HomePage";
import { getHomePage, getUsers, logOut } from "../actions";

export class HomePageView extends Component {

    state = {
        selected: "All"
    }
    componentDidMount() {
        this.props.getHomePage()
    }

    changeSelected = (ev) => {
        console.log(ev.target.innerText)
        this.setState({selected: ev.target.innerText});
    }
    // filterInfo = () => {
    //     const filtered = this.props.adventures.filter(adventure => {
    //         if (this.state.selected === "All") {
    //             return this.props.adventures
    //         }
    //         else if (this.state.selected === adventure.adventure_type) {
    //             return adventure
    //         }
    //     }
    //     );
    //     return (filtered)
    // }

    

    logout = () => {
        localStorage.clear();
        this.props.logOut()
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <HomePage
                    // adventures={this.filterInfo()}
                    users={this.props.users}
                    logout={this.logout}
                    user={this.props.user}
                    changeSelected={this.changeSelected}
                    selected ={this.state.selected}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetchingInfo: state.isFetchingInfo,
    adventures: state.adventures,
    error: state.error,
    users: state.users,
    isLoggedIn: state.isLoggedIn,
    user: state.user
    
})

const mapDispatchToProps = {
    getHomePage,
    getUsers,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageView)


