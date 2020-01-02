import React from "react";
import AuthLogin from './Authorization/AuthLogin'
import Logo from "../images/img1.png"


export default function Login(props) {
    return (
        <div className="login">
            <img src={Logo} alt=""/>
            <AuthLogin {...props}/>
        </div>
    )
}

