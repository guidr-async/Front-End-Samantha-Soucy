import React from "react";
import { Link } from "react-router-dom"

export default function InfoCard(props) {
    return (
        <div>
            <div>{props.adventure.title}</div>
            <p><span>Location: </span> {props.adventure.location}</p>
            <p><span>Type: </span> {props.adventure.adventure_type}</p>
            <p><span>Duration: </span> {props.adventure.duration}</p>
            <p><span>Work or Pleasure: </span> {props.adventure.professional ? "professional" : "pleasure"}</p>

            <div>
                <div>
                    <Link to={`/user/${props.user.id}`}>{props.user.username}</Link>
                    <p>{props.adventure.date}</p>
                </div>
            </div>
        </div>
    )
}


