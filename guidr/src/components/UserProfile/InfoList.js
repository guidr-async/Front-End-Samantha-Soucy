import React from "react";
import Trip from "./Trip";
import {Link} from "react-router-dom"



export default function InfoList(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.user.name}'s Trips</h2>
            {props.userAdventures.length === 0
                ?
                (<>
                    <h3>No Adventures Available</h3>
                    <Link to={"/addInfo"}> Add some Info</Link>
                </>
                )
                : (props.userAdventure.map(trip =>
                    <Trip key={trip.id}
                        doneEditing={props.doneEditing}
                        isEditingTrip={props.isEditingTrip}
                        editingTrip={props.editingTrip}
                        trip={trip} />))
                }
        </div>
    )
}
                        
         