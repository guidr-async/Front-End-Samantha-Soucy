import React from "react";
import Trip from "./Trip";
import {Link} from "react-router-dom"



export default function InfoList(props) {
    console.log(props)
    return (
        <div className="profilePage1">
            <h2>{props.user.name}'s Trips</h2>
            {props.userAdventures.length === 0
                ?
                
                (<>
                    <h3>No Adventures Available!</h3>
                    <Link className="addInfoInput" to={"/addInfo"}> Add Some Trip Info</Link>
                </>
                )
                : (props.userAdventures.map(trip =>
                    <Trip key={trip.id}
                        doneEditing={props.doneEditing}
                        isEditingTrip={props.isEditingTrip}
                        editingTrip={props.editingTrip}
                        updateAdventure={props.updateAdventure}
                        trip={trip}
                        deleteTrip={props.deleteTrip}
                        
                    />))
                }
        </div>
    )
}




                        
         