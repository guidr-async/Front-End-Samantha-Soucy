import React from "react";
import { Link } from "react-router-dom";
import InfoList from "./InfoList";

export default function UserProfile(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profile: {
    //             name: '',
    //             email: '',
    //             location: '',
    //             bio: '',
    //         },
            // mainUserPage: false,
            // pageUser: "",
            // pageUserAdventures: [],
            // id: this.props.match.params.id
    //     }
    // }

    // componentDidMount(){
    //     this.setState({profile: {
    //       name: this.props.user.name,
    //       email: this.props.user.email,
    //       location: this.props.user.location,
    //       bio: this.props.user.bio,
    
    //     } })
    //   }
    // handleChanges = ev => {
    //     this.setState({
    //         profile: ({
    //             ...this.state.profile,
    //             [ev.target.name]: ev.target.value
    //         })
    //     })
    // }
    // toggleMain = () => {
    //     this.state.mainUserPage = true
    // }

    // submitEditedProfile = ev => {
    //     ev.preventDefault()
    //     this.props.doneEditing()
    //     this.props.updateUser(this.props.user.id, this.state.pageUser);
    //     this.props.getUserAdventure(this.state.pageUser.id)
    // }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.location.key !== this.props.location.key) {
    //         this.setState({
    //             pageUser: {
    //                 ...this.props.user
    //             }
    //         })
    //         this.props.getUserAdventure(this.props.user.id)
    //     }
    // }
    // render() {

        return (
            <>
                <div>
                    <nav>
                        <Link to={"/homePage"}>Trip page</Link>
                        {/* { {this.state.mainUserPage ?  */}
                        <Link to={"/addInfo"}>Add Trip</Link> 
                         {/* : <Link onClick={()=>this.toggleMain()} to={`/user/${this.props.user.id}`}>Profile</Link>}  */}
                        <Link onClick={ev => props.logout(ev)} to={"/"}>Logout</Link>
                    </nav>
                    <div>
                        <div>
                            {/* <img src={""} alt="" /> */}
                        </div>
                    
                        <div>
                            <div>
                                
                            {props.isEditingProfile ? 
                                        (<i onClick={() => props.doneEditing()}></i>)
                                        :
                                        (<i onClick={() => props.editingPro()}></i>)
                                    
                                }
                                
                                {props.isEditingProfile ? 
                                        (
                                            <>
                                                
                                                <div>
                                                    <h4>Name: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        // value={this.state.pageUser.name}
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Email: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email"
                                                        // value={this.state.pageUser.email}
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Location: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="location"
                                                        placeholder="Where were you"
                                                        // value={this.state.pageUser.location}
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Bio:
                                                <textarea rows="5" cols="100" onChange={ev => props.handleChanges(ev)}
                                                            id="username"
                                                            type="text"
                                                            // value={this.state.pageUser.bio}
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
                                                    <p>{props.user.name}</p>
                                                </div>
                                                <div>
                                                    <h4>Email: </h4>
                                                    <p>{props.user.email}</p>
                                                </div>
                                                <div>
                                                    <h4>Location: </h4>
                                                    <p>{props.user.location}</p>
                                                </div>
                                                <div>
                                                    <h4>Bio: <span>{props.user.bio}</span></h4>
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
                        pageUser={props.pageUser}
                        mainUserPage={props.mainUserPage}
                        updateAdventure={props.updateAdventure}
                        user={props.user}
                        userAdventures={props.userAdventures}
                        doneEditing={props.doneEditing}
                        // isEditingTrip={this.props.isEditingTrip}
                        editingTrip={props.editingTrip}
                        deleteTrip ={props.deleteTrip}
                    />
                </div>
            </>
        )
    }


// export default UserProfile;



