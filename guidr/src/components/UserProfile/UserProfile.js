import React from "react";
import { Link } from "react-router-dom";
import InfoList from "./InfoList";

export default function UserProfile(props) {
    return (
        <>
            <div>
                <nav>
                    <Link to={"/homePage"}>Trip page</Link>
                    <Link to={"/addInfo"}>Add Trip</Link>
                    <Link onClick={ev => props.logout(ev)} to={"/"}>Logout</Link>
                </nav>
                <div>
                    <div>
                        <img src={""} alt="" />
                    </div>
                    
                    <div>
                        <div>
                            {props.editingProfile ?
                                (<i onClick={() => props.doneEditing()}></i>)
                                :
                                (<i onClick={() => props.editingPro()}></i>)
                            }
                            {props.editingProfile ?
                                (
                                    <>
                                        <div>
                                            <h4>Name: </h4>
                                            <input onChange={ev => props.handleChanges(ev)}
                                                id="username"
                                                type="text"
                                                name="title"
                                                placeholder="Name of your Trip"
                                            />
                                        </div>
                                        <div>
                                            <h4>Email: </h4>
                                            <input onChange={ev => props.handleChanges(ev)}
                                                id="username"
                                                type="text"
                                                name="title"
                                                placeholder="Name of your Trip"
                                            />
                                        </div>
                                        <div>
                                            <h4>Location: </h4>
                                            <input onChange={ev => props.handleChanges(ev)}
                                                id="username"
                                                type="text"
                                                name="title"
                                                placeholder="Name of your Trip"
                                            />
                                        </div>
                                        <div>
                                            <h4>Bio:
                                                <textarea rows="5" onChange={ev => props.handleChanges(ev)}
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
                                )}
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <InfoList
                    user={props.user}
                    userAdventures={props.userAdventures}
                    doneEditing={props.doneEditing}
                    isEditingTrip={props.isEditingTrip}
                    editingTrip={props.editingTrip}
                />
            </div>
        </>
    );
};