import React from "react";

const AddInfo = props => {
    return (
        <div>
            <h1>Add Trip Information!</h1>
            <form className="addTripForm" onSubmit={ev => props.submitAdventure(ev)}>
                <div>
                    <label className="heading" htmlFor="username"><strong>
                        Title
                    </strong></label>
                    <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        id="username"
                        type="text"
                        name="title"
                        placeholder="Name your Trip"
                    />
                </div>
                <div>
                    <label className="heading" htmlFor="username"><strong>
                        Date
                    </strong></label>
                    <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        type="text"
                        name="date"
                        placeholder="Date"
                    />
                </div>
                <div>
                    <label className="heading" htmlFor="username"><strong>
                        Location
                    </strong></label>
                    <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        id="username"
                        type="text"
                        name="location"
                        placeholder="Went to?"
                    />
                </div>
                <div>
                    <label className="heading" htmlFor="username"><strong>
                        Duration
                        </strong></label>
                    <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        id="username"
                        type="text"
                        name="duration"
                        placeholder="how long was the Trip?"
                    />
                </div>
                <div>
                <label className="heading1" htmlFor="username"><strong>
                    Type
                    </strong></label>
                <div>
                <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="adventure_type"
                        value="back packing"
                    />
                    <label className="heading"><strong>
                        Back Packing
                        </strong></label>
                </div>
                <div>
                <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="adventure_type"
                        value="Hiking"
                    />
                    <label className="heading"><strong>
                        Hiking
                    </strong></label>
                </div>
                <div>
                <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="adventure_type"
                        value="White water rafting"
                    />
                    <label className="heading"><strong>
                        Cycling
                    </strong></label>
                </div>
                <div>
                <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="adventure_type"
                        value="Rock Climbing"
                    />
                    <label className="heading"><strong>
                        Climbing
                    </strong></label>
                </div>
                <div>
                <input className="addInfoInput" onChange={ev => props.handleChanges(ev)}
                        type="radio"
                        name="adventure_type"
                        value="Diving"
                    />
                    <label className="heading"><strong>
                        Diving
                    </strong></label>
                </div>
                </div>
                    <div>
                        <label className="heading"  htmlFor="username"><strong>
                            Professional or Pleasure
                        </strong></label>
                        <div>
                            <input className="addInfoInput"
                                type="radio"
                                name="professional"
                                value="professional"
                                onChange={ev => props.handleChanges(ev)}
                            />
                            <label className="heading"><strong>
                                Professional
                            </strong></label><br />
                            <input className="addInfoInput"
                                type="radio"
                                name="professional"
                                value="personal"
                                onChange={ev => props.handleChanges(ev)}
                            />
                            <label className="heading"><strong>
                                Pleasure
                            </strong></label>
                        </div>
                    </div>
                    <div>
                        <label className="heading" htmlFor="username"><strong>
                            Drscription/Notes
                        </strong></label>
                        <textarea className="addInfoInput" rows="5"
                            id="username"
                            type="text"
                            name="description"
                            spellCheck="true"
                            onChange={ev => props.handleChanges(ev)}
                            placeholder="Additional Info"
                            />
                    </div>
                    <div>
                        <button className="submitButton" type="submit">Submit</button>
                        <button className="submitButton" onClick={ev=> props.clearForm(ev)} type="button">Clear</button>
                    </div>
            </form>
        </div>
    )
}
export default AddInfo;




