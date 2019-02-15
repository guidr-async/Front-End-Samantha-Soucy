import React from "react";
import AuthRegister from './Authorization/AuthRegister'

export default function SignUp(props) {
    return (
        <div className="registrationScreen w-full mx-auto flex flex-col justify-center h-screen">
           <AuthRegister {...props}/>
        </div>
    )
}

