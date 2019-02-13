import React from "react";
import { Link } from "react-router-dom";
import InfoList from "./InfoList";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                name: '',
                email: ' ',
                location: '',
                bio: '',
            }
        }
    }
    componentDidMount() {
        this.setState({
            profile: {
                name: this.props.user.name,
                email: this.props.user.email,
                location: this.props.user.location,
                bio: this.props.user.bio
            }
        })
    }
    handleChanges = ev => {
        this.setState({
            profile: ({
                ...this.state.profile,
                [ev.target.name]: ev.target.value
            })
        })
    }
    render() {

        return (
            <>
                <div>
                    <nav>
                        <Link to={"/homePage"}>Trip page</Link>
                        <Link to={"/addInfo"}>Add Trip</Link>
                        <Link onClick={ev => this.props.logout(ev)} to={"/"}>Logout</Link>
                    </nav>
                    <div>
                        <div>
                            <img src={""} alt="" />
                        </div>
                    
                        <div>
                            <div>
                                {this.props.editingProfile ?
                                    (<i onClick={() => this.props.doneEditing()}></i>)
                                    :
                                    (<i onClick={() => this.props.editingPro()}></i>)
                                }
                                {this.props.editingProfile ?
                                    (
                                        <>
                                            <div>
                                                <h4>Name: </h4>
                                                <input onChange={ev => this.handleChanges(ev)}
                                                    id="username"
                                                    type="text"
                                                    name="title"
                                                    placeholder="Name of your Trip"
                                                />
                                            </div>
                                            <div>
                                                <h4>Email: </h4>
                                                <input onChange={ev => this.handleChanges(ev)}
                                                    id="username"
                                                    type="text"
                                                    name="title"
                                                    placeholder="Name of your Trip"
                                                />
                                            </div>
                                            <div>
                                                <h4>Location: </h4>
                                                <input onChange={ev => this.handleChanges(ev)}
                                                    id="username"
                                                    type="text"
                                                    name="title"
                                                    placeholder="Name of your Trip"
                                                />
                                            </div>
                                            <div>
                                                <h4>Bio:
                                                <textarea rows="5" onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="decription"
                                                        spellCheck="true"
                                                        placeholder="About You"
                                                    />
                                                </h4>
                                            </div>
                                        </>

                                                
                                    )
                                    :
                                    (
                                        <>
                                        
                                            <div>
                                                <h4>Name: </h4>
                                                <p>{this.state.profile.name}</p>
                                            </div>
                                            <div>
                                                <h4>Email: </h4>
                                                <p>{this.state.profile.email}</p>
                                            </div>
                                            <div>
                                                <h4>Location: </h4>
                                                <p>{this.state.profile.location}</p>
                                            </div>
                                            <div>
                                                <h4>Bio: <span>{this.state.profile.bio}</span></h4>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <InfoList
                        user={this.props.user}
                        userAdventures={this.props.userAdventures}
                        doneEditing={this.props.doneEditing}
                        isEditingTrip={this.props.isEditingTrip}
                        editingTrip={this.props.editingTrip}
                    />
                </div>
            </>
        )
    }
}

export default UserProfile;