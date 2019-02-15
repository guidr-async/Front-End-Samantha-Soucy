import React from "react";
// import { Link } from "react-router-dom"

export default function InfoCard(props) {
    return (
        <div className="cards">
            <div><strong>Title: </strong>{props.adventure.title}</div>
            <p><span><strong>Location: </strong></span> {props.adventure.location}</p>
            <p><span><strong>Type: </strong></span> {props.adventure.adventure_type}</p>
            <p><span><strong>Duration: </strong></span> {props.adventure.duration}</p>
            <p><span><strong>Work or Pleasure: </strong></span> {props.adventure.professional ? "professional" : "pleasure"}</p>

            <div>
                <div>
                    {/* <Link to={`/user/${props.user.id}`}>{props.user.username}</Link> */}
                    {/* <Link to="/user/:id">{props.user.username}</Link> */}
                    <p><strong>{props.adventure.date}</strong></p>
                </div>
            </div>
        </div>
    )
}


