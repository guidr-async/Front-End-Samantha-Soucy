import React from "react";
import { Link } from "react-router-dom";

import InfoCard from "./InfoCard"

export default function HomePage(props) {
    return (
        <div>
            <header>
                <nav>
                    <Link to={`/user/${props.user.id}`}>Profile</Link>
                    <Link onClick={() => props.logout()} to={"/"}>Logout</Link>
                </nav>
                <div>
                {/* <img src={""} alt="" /> */}
                </div>
            </header>
            <div className="filter">
                <h4>Trip Type:</h4>
                <div onClick={ev => props.changeSelected(ev)} className="All">All</div>
                <div onClick={ev => props.changeSelected(ev)} className="All">Hiking</div>
                <div onClick={ev =>props.changeSelected(ev)} className="All">Back Packing</div>
                <div onClick={ev =>props.changeSelected(ev)} className="All">Rock Climbing</div>
                <div onClick={ev =>props.changeSelected(ev)} className="All">Cycling</div>
                <div onClick={ev =>props.changeSelected(ev)} className="All">Scuba Diving</div>
            </div>
            <section>
            {props.adventures.map(item => {return <InfoCard key={item.id} user={props.users.find(user=> user.id === item.user_id )} adventure={item} />})}
            </section>
        </div>
    )
}



