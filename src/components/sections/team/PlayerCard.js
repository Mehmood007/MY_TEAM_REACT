import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
    const session_id = localStorage.getItem("session_id")
    function drop_player(){
        if(props.purpose==='squad'){
            player_drop_squad();
        }
        if(props.purpose==='playing_xi'){
            player_drop_playing_xi();
        }
    }
    function player_drop_squad() {
        fetch("http://127.0.0.1:5000/drop_player", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({ selected_player: props.player }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "session_id": session_id
            }
        })

            // Converting to JSON
            .then(response => response.json()).then(res => {
                console.log(res);
                window.location.reload();

            })
    }

    function player_drop_playing_xi() {
        fetch("http://127.0.0.1:5000/drop_playing_xi_player", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({ selected_player: props.player }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "session_id": session_id
            }
        })

            // Converting to JSON
            .then(response => response.json()).then(res => {
                console.log(res);
                window.location.reload();

            })
    }
    return (
        
            <div className="card shadow-sm border-0 rounded mx-2">
                <div className="card-body p-0">
                    <img
                        src={props.player.picture}
                        alt=""
                        className="w-100 card-img-top"
                    />
                    <div className="p-4">

                        <h5 className="mb-0">{props.player.name}</h5>
                        <p>{props.player.p_type}</p>
                        <h5 className="mb-0">{props.player.category}</h5>
                        <Link to={{pathname:"/team-details",
        state:{player_id: props.player.playerid,cricinfo:props.player.playerid}}} style={{ textDecoration: "None" }}>
                        <button type="button" className="btn btn-outline-primary mx-1">View</button>
                        </Link>
                        <button type="button" class="btn btn-outline-danger" onClick={() => drop_player()}>Drop</button>
                    </div>
                </div>
            </div>
        
    );
}

export default Card;