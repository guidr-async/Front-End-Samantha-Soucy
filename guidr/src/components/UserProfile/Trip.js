import React from 'react'




class Trip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trip: {
                "adventure_type": "",
                "title": "",
                "location": "",
                "duration": "",
                "description": " ",
                "professional": false,
                "date": null
            }
        }
    }
    componentDidMount() {
        this.setState({ trip: this.props.trip })
    }
    handleChanges = ev => {
        console.log(ev.target.value)
        console.log(ev.target.name)
        if (ev.target.name === "adventure_type") {
            this.setState({
                trip: ({
                    ...this.state.trip,
                    "adventure_type": ev.target.value
                })
            })
        }
        else if (ev.target.value === "professional") {
            this.setState({
                trip: ({
                    ...this.state.trip,
                    "professional": true
                })
            })
        }
        else if (ev.target.value === "personal") {
            this.setState({
                trip: ({
                    ...this.state.trip,
                    "professional": false
                })
            })
        } else {
            this.setState({
                trip: ({
                    ...this.state.trip,
                    [ev.target.name]: ev.target.value
                })
            })
        }

    }
    submitEditedAdventure = ev => {
        ev.preventDefault()
        this.props.doneEditing()
        this.props.updateAdventure(this.props.trip.id, this.state.trip);
    }
    deleteAdventure = () => {
        this.props.deleteTrip(this.props.trip.id)
    }
    

    render() {
        return (
            <div>
              
                <div>
                    <div>
                        
                    {this.props.isEditingTrip ? 
                            (<i onClick={(ev) => this.submitEditedAdventure(ev)}></i>)
                            :
                            <div>
                                <button className= "updateButt" onClick={() => this.props.editingTrip()}>Update</button>
                                
                                <button className="delete" onClick={() => this.deleteAdventure()}> Delete</button>
                            </div>
                            
                    }
                        {this.props.isEditingTrip ?
                            (<>
                                <form className="tripForm" onSubmit={ev => this.submitEditedAdventure(ev)}>
                                
                                <div>
                                    <h4>Title: </h4>
                                    <input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        id="username"
                                        type="text"
                                        name="title"
                                        value={this.state.trip.title}
                                        placeholder="Name of Trip"
                                    />
                                    </div>
                                    <div>
                                        <h4>Date: </h4>
                                        <input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                            id="username"
                                            type="text"
                                            name="date"
                                            value={this.state.trip.date}
                                            placeholder="date of Trip"
                                            />

                                    </div>
                                <div>
                                    <h4>Location: </h4>
                                    <input  className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        id="username"
                                        type="text"
                                        name="location"
                                        value={this.state.trip.location}
                                        placeholder="Name of Location"
                                    />
                                </div>
                                <div>
                                    <h4>Duration: </h4>
                                    <input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        id="username"
                                        type="text"
                                        name="duration"
                                        value={this.state.trip.duraction}
                                        placeholder="Length of Trip"
                                    />
                                </div>
                                <div>
                                    <h4>Type of trip: </h4>
                                    <div>
                                        <input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        type="radio"
                                        name="adventure_type"
                                        value="Back Packing" />
                                        <label>Back Packing</label>
                                    </div>

                                    <div>
                                        <input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        type="radio"
                                        name="adventure_type"
                                        value="Hiking" />
                                        <label>Hiking</label>
                                    </div>
                                
                                    <div>
                                        <input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        type="radio"
                                        name="adventure_type"
                                        value="white water rafting" />
                                        <label>white water rafting</label>
                                    </div>

                                    <div><input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        type="radio"
                                        name="adventure_type"
                                        value="Rock Climbing" />
                                        <label>Rock Climbing</label>
                                    </div>

                                    <div><input className="inputInfo" onChange={ev => this.handleChanges(ev)}
                                        type="radio"
                                        name="adventure_type"
                                        value="Diving" />
                                        <label>Diving</label>
                                        </div>
                                    </div>
                           
                                <div>
                                    <h4>Professional or Pleasure: </h4>
                                    <div>
                                        <input className="inputInfo" type="radio" name="professional" value="professional"
                                            onChange={ev => this.handleChanges(ev)} />
                                        <label>Professional</label><br />
                                        <input className="inputInfo" type="radio" name="professional" value="personal"
                                            onChange={ev => this.handleChanges(ev)} />
                                        <label>Pleasure</label>
                                    </div>
                                </div>
                                <div>
                                    <h4>Notes: <textarea className="inputInfo" cols="100" rows="5" onChange={ev => this.handleChanges(ev)}
                                        id="username"
                                        type="text"
                                        name="description"
                                        value={this.state.trip.description}
                                        spellCheck="true"
                                        placeholder="About Trip"
                                    /></h4>
                                    </div>
                                    <button className="doneButt" onClick={(ev) => this.props.doneEditing(ev, this.state.trip.id, this.state.trip)}>Done</button>
                                        </form>
                            </>)
                            :
                            (
                                <>
                                    <div>
                                        <h4>Title: </h4>
                                        <p>{this.state.trip.title}</p>
                                    </div>
                                    <div>
                                        <h4>Date: </h4>
                                        <p>{this.state.trip.date}</p>
                                    </div>
                                    <div>
                                        <h4>Location: </h4>
                                        <p>{this.state.trip.location}</p>
                                    </div>
                                    <div>
                                        <h4>Duration: </h4>
                                        <p>{this.state.trip.duration}</p>
                                    </div>
                                    <div>
                                        <h4> Type of Trip: </h4>
                                        <p>{this.state.trip.adventure_type}</p>
                                    </div>
                                    <div>
                                        <h4> Professional or Pleasure:</h4>
                                        <p><strong>{this.state.trip.professional ? "Professional" : "Pleasure"}</strong></p>
                                    </div>
                                    <div>
                                        <h4> Notes: {this.state.trip.description}</h4>
                                    </div>
                                </>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Trip;




  