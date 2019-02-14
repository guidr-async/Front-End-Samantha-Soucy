import React from "react";
import { Link } from "react-router-dom"

export default function InfoCard(props) {
    return (
        <div>
            <div>{props.adventure.title}</div>
            <p>Location: {props.adventure.location}</p>
            <p>Type: {props.adventure.adventure_type}</p>
            <p>Duration: {props.adventure.duration}</p>
            <p>>Work or Pleasure: {props.adventure.professional ? "professional" : "pleasure"}</p>

            <div>
                <div>
                    <Link to={`/user/${props.user.id}`}>{props.user.username}</Link>
                    <p>{props.adventure.date}</p>
                </div>
            </div>
        </div>
    )
}


