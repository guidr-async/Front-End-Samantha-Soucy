import React from "react";

export default function SignUp(props) {
    return (
        <div>
            <form>
                <h1>Sign Up Form</h1>
                <div>
                    <div>
                        <input on onChange={(ev) => props.handleChanges(ev)} 
                            id="unsername"
                            type="text"
                            name="username"
                            placeholder="Username" required
                        />
                    </div>
                    <div>
                        <div>
                            <input onChange={(ev) => props.handleChanges(ev)}
                                 id="email"
                                 type="email"
                                 name="email"
                                 placeholder="Email" required
                             />
                        </div>
                        <div>
                            <input onChange={(ev) => props.handleChanges(ev)} 
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password" required
                            />
                        </div>
                        <div>
                        <input onChange={(ev) => props.handleChanges(ev)} 
                                id="password2"
                                type="password"
                                name="password2"
                                placeholder="Retype Password" required
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                        <input onChange={(ev) => props.handleChanges(ev)} 
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                        <input onChange={(ev) => props.handleChanges(ev)} 
                                id="location"
                                type="text"
                                name="location"
                                placeholder="Location"
                            /> 
                        </div>
                        <div>
                        <textarea onChange={(ev) => props.handleChanges(ev)} 
                                id="bio"
                                type="text"
                                name="bio"
                                placeholder="About Me" 
                            /> 
                        </div>
                        <div>
                            <label htmlFor="text">
                                Professional? 
                                <input onChange={(ev) => props.handleChanges(ev)} 
                                id="professional"
                                type="checkbox"
                                name="professional"
                                placeholder="Professional"
                            /> 
                            </label>
                        </div>
                    </div>
                </div>
            </form>

            <div>
                <button onClick={ev => props.clearForm(ev)}>Clear</button>
            </div>
        </div>
    )
}