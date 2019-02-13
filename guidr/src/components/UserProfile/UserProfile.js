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
            },
            mainUserPage: false,
            pageUser: "",
            pageUserAdventures: [],
            id: this.props.match.params.id
        }
    }

    // getUserFromURL = () => {
    //     const user = this.props.users.find(user => `${user.id}` === this.state.id)
    //     this.setState({ pageUser: user })
    //     user.id === this.props.user.id ? this.setState({ mainUserPage: true }) : this.setState({ mainUserPage: false })
    //     this.props.getUserAdventure(user.id)
    //     console.log("USERADVENTURES UP", this.props.userAdventures)
    // }
    // componentDidMount() {
    //     this.getUserFromURL();
        
    // }
    handleChanges = ev => {
        this.setState({
            pageUser: ({
                ...this.state.pageUser,
                [ev.target.name]: ev.target.value
            })
        })
    }
    // toggleMain = () => {
    //     this.state.mainUserPage = true
    // }

    submitEditedProfile = ev => {
        ev.preventDefault()
        this.props.doneEditing()
        this.props.updateUser(this.props.user.id, this.state.pageUser);
        this.props.getUserAdventure(this.state.pageUser.id)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.key !== this.props.location.key) {
            this.setState({
                pageUser: {
                    ...this.props.user
                }
            })
            this.props.getUserAdventure(this.props.user.id)
        }
    }
    render() {

        return (
            <>
                <div>
                    <nav>
                        <Link to={"/homePage"}>Trip page</Link>
                        {this.state.mainUserPage ? <Link to={"/addInfo"}>Add Trip</Link>
                         : <Link to={`/user/${this.props.user.id}`}>Profile</Link>} 
                        <Link onClick={ev => this.props.logout(ev)} to={"/"}>Logout</Link>
                    </nav>
                    <div>
                        <div>
                            <img src={""} alt="" />
                        </div>
                    
                        <div>
                            <div>
                                
                                        {this.state.mainUserPage ? 
                                        this.props.isEditingProfile ? 
                                        (<i onClick={(ev) => this.submitEditedProfile(ev)}></i>)
                                        :
                                        (<i onClick={() => this.props.editingPro()}></i>)
                                    : null
                                }
                                
                                        {this.state.mainUserPage ? 
                                        this.props.isEditingProfile ? 
                                        (
                                            <>
                                                
                                                <div>
                                                    <h4>Name: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="title"
                                                        placeholder="Name of your Trip"
                                                        value={this.state.pageUser.name}
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Email: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={this.state.pageUser.email}
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Location: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="location"
                                                        placeholder="Where were you"
                                                        value={this.state.pageUser.location}
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Bio:
                                                <textarea rows="5" cols="100" onChange={ev => this.handleChanges(ev)}
                                                            id="username"
                                                            type="text"
                                                            value={this.state.pageUser.bio}
                                                            name="bio"
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
                                                    <p>{this.state.pageUser.name}</p>
                                                </div>
                                                <div>
                                                    <h4>Email: </h4>
                                                    <p>{this.state.pageUser.email}</p>
                                                </div>
                                                <div>
                                                    <h4>Location: </h4>
                                                    <p>{this.state.pageUser.location}</p>
                                                </div>
                                                <div>
                                                    <h4>Bio: <span>{this.state.pageUser.bio}</span></h4>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                         <>
                                            <div>
                                                <h4>Name: </h4>
                                                <p>{this.state.pageUser.name}</p>
                                            </div>
                                            <div>
                                                <h4>Email: </h4>
                                                <p>{this.state.pageUser.Email}</p>
                                            </div>
                                            <div>
                                                <h4>Location: </h4>
                                                <p>{this.state.pageUser.Location}</p>
                                            </div>
                                            <div>
                                                <h4>Bio: <span>{this.state.pageUser.bio}</span></h4>
                                            </div>
                                        </>
                                    )
                                }
        
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <InfoList
                        pageUser={this.state.pageUser}
                        mainUserPage={this.state.mainUserPage}
                        updateAdventure={this.props.updateAdventure}
                        user={this.props.user}
                        userAdventures={this.props.userAdventures}
                        doneEditing={this.props.doneEditing}
                        isEditingTrip={this.props.isEditingTrip}
                        editingTrip={this.props.editingTrip}
                        deleteTrip ={this.props.deleteTrip}
                    />
                </div>
            </>
        )
    }
}

export default UserProfile;



