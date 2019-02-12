import React from 'react'
import { TweenMax } from "gsap/TweenMax";

const showDescription = ev => {
    ev.preventDefault();
    const target = ev.target.nextSibling;
    if(target.classList.contains('hidden')){
      target.classList.toggle("hidden")
      TweenMax.from(target, .75, {yPercent: -20, opacity: 0})
      TweenMax.to(target, .5, { yPercent: 0,  opacity: 1});
    }else{
      TweenMax.from(target, 1, {yPercent: 0, opacity: 1})
      TweenMax.to(target, 1, { yPercent: -20,  opacity: 0});
      setTimeout( () =>{
        target.classList.toggle("hidden")
      }, 650)
  
    }
  
}
  
export default function Trip(props) {
    console.log(props)
    return (
        <div>
            <button onClick={ev => showDescription(ev)}>{props.trip.title}; {props.trip.date}; {props.trip.location}</button>
            <div>
                <div>
                    <div>
                        <h4>Title: </h4>
                        <p>{props.trip.title}</p>
                    </div>
                    <div>
                        <h4>Location: </h4>
                        <p>{props.trip.location}</p>
                    </div>
                    <div>
                        <h4>Duraction: </h4>
                        <p>{props.trip.duration}</p>
                    </div>
                    <div>
                        <h4> Type of Trip: </h4>
                        <p>{props.trip.adventure_type}</p>
                    </div>
                    <div>
                        <h4> Professional or Pleasure:</h4>
                        <p>{props.trip.professional ? "Professional" : "Pleasure"}</p>
                    </div>
                    <div>
                        <h4> Notes: <span>{props.trip.decription}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
  