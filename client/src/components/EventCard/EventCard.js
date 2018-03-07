import React from 'react';
import "./EventCard.css";
// import EventModal from "../EventModal";



const EventCard = (props) => (

			<div className="view view-first" >
				    <img src={`data:image/jpeg;base64,${props.image}`}/>
				<div className="main">
                  
                    <div className="mask">
                        <h2>{props.date}</h2>
                        <p>{props.title}</p>
                        <a href= "#" className="info" onClick={()=>{props.onOpenModal()}}>More Info</a>
                    </div>
                </div> 
            </div> 
)			
export default EventCard;