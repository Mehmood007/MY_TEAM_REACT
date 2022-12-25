import React, { useState, useEffect } from "react";
import { Container,Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";


function Retention(props){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const session_id = localStorage.getItem("session_id")
    const [suggested,set_suggested] = useState([])
    function suggestions() {
        const data = {
            "squad": props.franchise.team
        };
        fetch("http://127.0.0.1:5000/suggest_retention", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(data),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "session_id": session_id
            }
        })

            // Converting to JSON
            .then(response => response.json()).then(res => {
                console.log(res)
                if(res.message !==undefined){
                    alert(res.message)
                }else{
                    set_suggested(res)
                }

            })
    }
    function select_retention() {
        const data = {
            "selected_players": suggested
        };
        fetch("http://127.0.0.1:5000/select_retention", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(data),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "session_id": session_id
            }
        })

            // Converting to JSON
            .then(response => response.json()).then(res => {
                console.log(res)
                if(res.message!=='Player retained'){
                    alert(res.message)
                }else{
                window.location.reload();
                }

            })
    }
    return (
        <>
        <div className='container'>
          <Button onClick={()=> suggestions()}>Player Retention</Button>
        </div>
         <div className="container py-5">
         <Carousel responsive={responsive}>
             {suggested.map((player) => (


                 <div className="card shadow-sm border-0 rounded mx-2">
                     <div className="card-body p-0">
                         <img
                             src={player.picture}
                             alt=""
                             className="w-100 card-img-top"
                         />
                         <div className="p-4">

                             <h5 className="mb-0">{player.name}</h5>
                             <p>{player.p_type}</p>
                             <h5 className="mb-0">{player.category}</h5>
                             <p><strong>Availability: </strong>{player.availability}</p>
                             <label className="form-label">Availability</label>
                             
                         
                         </div>
                     </div>
                 </div>
             ))}
         </Carousel>
         {suggested.length===0 ? <></> :
         <Button onClick={()=>select_retention()}>Retain Suggested Player</Button>}
     </div></>
    )
}


export default Retention;