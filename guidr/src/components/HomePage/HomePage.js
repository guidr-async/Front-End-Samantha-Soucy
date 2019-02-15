import React from "react";
import { Link } from "react-router-dom";

import InfoCard from "./InfoCard"

export default function HomePage(props) {
    return (
        <div>
            <header>
                <nav className= "nav">
                    <Link className="profileLink" to={`/user/${props.user.id}`}>Profile</Link>
                    <Link className="logoutLink" onClick={() => props.logout()} to={"/"}>Logout</Link>
                </nav>
                
            </header>
            <div >
                <h4>Trip Type:</h4>
            </div>
            <div className="all">
                
                <div onClick={ev => props.changeSelected(ev)}>All</div>
                <div onClick={ev => props.changeSelected(ev)} >Hiking</div>
                <div onClick={ev =>props.changeSelected(ev)} >Back Packing</div>
                <div onClick={ev =>props.changeSelected(ev)} >Rock Climbing</div>
                <div onClick={ev =>props.changeSelected(ev)} >Cycling</div>
                <div onClick={ev => props.changeSelected(ev)} >Scuba Diving</div>
                
            </div>
            <section className="allCards">
            {props.adventures.map(item => {return <InfoCard key={item.id} user={props.users.find(user=> user.id === item.user_id )} adventure={item} />})}
            </section>
        </div>
    )
}



