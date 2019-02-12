import React from "react";
import { Link } from "react-router-dom"

export default function InfoCard(props) {
    return (
        <div>
            <div>{props.adventure.title}</div>
            <p>Location: {props.adventure.location}</p>
            <p>Type: {props.adventure.trip_type}</p>
            <p>Duration: {props.adventure.duratio}</p>
            <p>Work or Play: {props.adventure.professional ? "professional" : "pleasure"}</p>

            <div>
                <div>
                    <Link to="/user/:id"></Link>
                    <p>{props.adventure.date}</p>
                </div>
            </div>
        </div>
    )
}