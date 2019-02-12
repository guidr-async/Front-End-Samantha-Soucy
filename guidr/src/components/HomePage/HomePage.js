import React from "react";
import { Link } from "react-router-dom";

import InfoCard from "./InfoCard"

export default function HomePage(props) {
    return (
        <div>
            <header>
                <nav>
                    <Link to={"/user/:id"}>Portfolio</Link>
                    <Link onClick={() => props.logout()} to={"/"}>Logout</Link>
                </nav>
            </header>
            <div>
                <h4>Trip Type:</h4>
                <div>Hiking</div>
                <div>Back Packing</div>
                <div>Rock Climbing</div>
                <div>Cycling</div>
                <div>Scuba Diving</div>
            </div>
            <section>
                {props.adventures.map(item => {return <InfoCard key={item.id} user={props.users.find(user => user.id === item.user_id)} adventure={item} />})}
            </section>
        </div>
    )
}