import React from "react";
import { Link } from "react-router-dom";


export default function Login(props) {
    return (
        <div>
            <form onSubmit={ev => props.loginUserTest(ev)} autoComplete="on">
                <div>
                    <div>
                        Username
                    </div>
                    <input onChange={ev => props.handleChange(ev)}
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <div>
                        Password
                    </div>
                    <input autoComplete="on" onChange={ev => props.handleChange(ev)}
                       id="password"
                       type="password"
                       name="password"
                       placeholder="****************"
                   /> 
                </div>
                <div>
                    <button>
                        Log In
                    </button>
                    <Link to={"/signUp"} href="#">
                        Need to Sign Up?
                    </Link>
                </div>
            </form>
        </div>
    )
}