import React from "react";
import { Link } from "react-router-dom";
import InfoList from "./InfoList";

export default function UserProfile(props) {
   return (
            <>
                <div>
                    <nav>
                        <Link className="homePageLink" to={"/homePage"}>Trip page</Link>
                       
                        <Link className="addInfoLink" to={"/addInfo"}>Add Trip</Link> 
                        
                        <Link className="logoutLink" onClick={ev => props.logout(ev)} to={"/"}>Logout</Link>
                    </nav>
                    <div>
                        
                    <div>
                            <div className="profilePage">
                                
                            {props.isEditingProfile ? 
                                        (<i onClick={() => props.doneEditing()}></i>)
                                        :
                                        (<i onClick={() => props.editingPro()}></i>)
                                    
                                }
                                
                                {props.isEditingProfile ? 
                                        (
                                            <>
                                                
                                                <div >
                                                    <h4>Name: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                       
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Email: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="email"
                                                        placeholder="Email"
                                                        
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Location: </h4>
                                                    <input onChange={ev => this.handleChanges(ev)}
                                                        id="username"
                                                        type="text"
                                                        name="location"
                                                        placeholder="Where were you"
                                                        
                                                    />
                                                </div>
                                                <div>
                                                    <h4>Bio:
                                                <textarea rows="5" cols="100" onChange={ev => props.handleChanges(ev)}
                                                            id="username"
                                                            type="text"
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
                        isEditingTrip={props.isEditingTrip}
                        editingTrip={props.editingTrip}
                        deleteTrip ={props.deleteTrip}
                    />
                </div>
            </>
        )
    }






