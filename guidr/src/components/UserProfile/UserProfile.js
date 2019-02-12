import React from "react";
import { Link } from "react-router-dom";
import InfoList from "./InfoList";

export default function UserProfile() {
    return (
        <>
            <div>
                <nav>
                    <Link to={"/homePage"}>Trip page</Link>
                    <Link to={"/addInfo"}>Add Trip</Link>
                    <Link to={"/"}>Logout</Link>
                </nav>
                <div>
                    <div>
                        <img src={""} alt="" />
                    </div>
                    
                <div>
                    <div>
                        <i></i>
                        <div></div>
                        <div>
                            <h4>Name: </h4>
                            <p>Josh Soucy</p>
                        </div>
                        <div>
                            <h4>Email: </h4>
                            <p>1234@gmail.com</p>
                        </div>
                        <div>
                            <h4>Location: </h4>
                            <p>Turner, ME</p>
                        </div>
                        <div>
                            <h4>Bio: <span>KJHkajbfk.khabvkiweuf.ooqoiw.bjkhwd.</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <InfoList />
        </div>
        </>
    )
}