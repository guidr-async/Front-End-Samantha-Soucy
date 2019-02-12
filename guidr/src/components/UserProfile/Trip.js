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
  
export default function Trip() {
    return (
        <div>
            <button onClick={ev => showDescription(ev)} Location></button>
            <div>
                <div>
                    <div>
                        <h4>Title: </h4>
                        <p>Hike</p>
                    </div>
                    <div>
                        <h4>Location: </h4>
                        <p>Man in the Mountain</p>
                    </div>
                    <div>
                        <h4>Duraction: </h4>
                        <p> 4 hrs</p>
                    </div>
                    <div>
                        <h4> Type of Trip: </h4>
                        <p>Personal Hike</p>
                    </div>
                    <div>
                        <h4> Professional or Pleasure:</h4>
                        <p>Pleasure</p>
                    </div>
                    <div>
                        <h4> Notes: <span>Rladjbsfkjdfv.kjabdvkjbdkjvdb.kjas.kjbvkjbskjs.panljba.</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
  