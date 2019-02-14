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
            <div>
                <h4>Trip Type:</h4>
                <div onClick={ev => props.changeSelected(ev)} className="All">All</div>
                <div onClick={ev => props.changeSelected(ev)} className="Hiking">Hiking</div>
                <div onClick={ev =>props.changeSelected(ev)} className="Back Packing">Back Packing</div>
                <div onClick={ev =>props.changeSelected(ev)} className="Rock Climbing">Rock Climbing</div>
                <div onClick={ev =>props.changeSelected(ev)} className="Cycling">Cycling</div>
                <div onClick={ev =>props.changeSelected(ev)} className="Scuba Diving">Scuba Diving</div>
            </div>
            <section>
            {props.adventures.map(item => {return <InfoCard key={item.id} user={props.users.find(user=> user.id === item.user_id )} adventure={item} />})}
            </section>
        </div>
    )
}



