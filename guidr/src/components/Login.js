import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <div>
            <form onSubmit={ev => props.submitLogin(ev)}>
                <div>
                    <label>
                        Username
                    </label>
                    <input onChange={ev => props.handleChange(ev)}
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <label>
                        Password
                    </label>
                    <input onChange={ev => props.handleChange(ev)}
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