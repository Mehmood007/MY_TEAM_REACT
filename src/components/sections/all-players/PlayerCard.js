import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
    return (
        <Link to={{pathname:"/team-details",
        state:{player_id: props.player.cricmetric,cricinfo:props.player.cricinfo_id}}} style={{ textDecoration: "None" }}>
            <div className="card shadow-sm border-0 rounded mx-2">
                <div className="card-body p-0">
                    <img
                        src={props.player.picture}
                        alt=""
                        className="w-100 card-img-top"
                    />
                    <div className="p-4">

                        <h5 className="mb-0">{props.player.name}</h5>
                        <p>{props.player.role}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;