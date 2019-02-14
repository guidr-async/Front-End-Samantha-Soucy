import React from "react";

const AddInfo = props => {
    return (
        <div>
            <form onSubmit={ev => props.submitAdventure(ev)}>
                <h1>Add Trip Information!</h1>
                <div>
                    <label htmlFor="username">
                        Title
                    </label>
                    <input onChange={ev => props.handleChanges(ev)}
                        id="username"
                        type="text"
                        name="title"
                        placeholder="Name your Trip"
                    />
                </div>
                <div>
                    <label htmlFor="username">
                        Date
                    </label>
                    <input onChange={ev => props.handleChanges(ev)}
                        type="date"
                        name="date"
                    />
                </div>
                <div>
                    <label htmlFor="username">
                        Location
                    </label>
                    <input onChange={ev => props.handleChanges(ev)}
                        id="username"
                        type="text"
                        name="location"
                        placeholder="Went to?"
                    />
                </div>
                <div>
                    <label htmlFor="username">
                        Duration
                    </label>
                    <input onChange={ev => props.handleChanges(ev)}
                        id="username"
                        type="text"
                        name="duration"
                        placeholder="how long was the Trip?"
                    />
                </div>
                <div>
                <label htmlFor="username">
                    type
                </label>
                <div>
                <input onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="trip_type"
                        value="back_packing"
                    />
                    <label>
                        Back Packing
                    </label>
                </div>
                <div>
                <input onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="trip_type"
                        value="Hiking"
                    />
                    <label>
                        Hiking
                    </label>
                </div>
                <div>
                <input onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="trip_type"
                        value="White water rafting"
                    />
                    <label>
                        Cycling
                    </label>
                </div>
                <div>
                <input onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="trip_type"
                        value="Rock Climbing"
                    />
                    <label>
                        Climbing
                    </label>
                </div>
                <div>
                <input onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="trip_type"
                        value="Diving"
                    />
                    <label>
                        Diving
                    </label>
                </div>
                </div>
                    <div>
                        <label htmlFor="username">
                            Professional or Pleasure
                        </label>
                        <div>
                            <input
                                type="radio"
                                name="professional"
                                value="professional"
                                onChange={ev => props.handleChanges(ev)}
                            />
                            <label>
                                Professional
                            </label><br />
                            <input
                                type="radio"
                                name="professional"
                                value="personal"
                                onChange={ev => props.handleChanges(ev)}
                            />
                            <label>
                                Pleasure
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username">
                            Drscription/Notes
                        </label>
                        <textarea rows="5" onChange={ev => props.handleChanges(ev)}
                            id="username"
                            type="text"
                            name="description"
                            spellCheck="true"
                            placeholder="Additional Info"
                            />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                    {/* <button onClick={ev=> props.clearForm(ev)} type="button">Cancel</button> */}
                    </div>
            </form>
        </div>
    )
}
export default AddInfo;




