import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";

function SelectTextFields(props) {
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
    const [category, setcategory] = useState("Platinium");
    const [speciality, setspeciality] = useState("Consistency");
    const [role, setrole] = useState("Batsman");
    const [p_type, setp_type] = useState("Local");
    const [venues, setvenues] = useState("Any");
    const [position, setposition] = useState("Any");
    const [suggested_players, set_suggested] = useState([])

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    const handlecategory = (event) => {
        const getcategory = event.target.value;
        setcategory(getcategory);
    }



    const handlerole = (event) => {
        const getrole = event.target.value;
        setrole(getrole);
    }


    const handlep_type = (event) => {
        const get_p_type = event.target.value;
        setp_type(get_p_type);
    }

    const handlespecaility = (event) => {
        const get_speciality = event.target.value;
        setspeciality(get_speciality);
    }

    const handlevenues = (event) => {
        const get_venues = event.target.value;
        setvenues(get_venues);
    }

    const handleposition = (event) => {
        const get_position = event.target.value;
        setposition(get_position);
    }

    const handleavailability = (event) => {
        const get_availability = event.target.value;
        alert(get_availability)
    }

    function player_selected(player) {
        fetch("http://127.0.0.1:5000/select_player", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({ selected_player: player }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "session_id": session_id
            }
        })

            // Converting to JSON
            .then(response => response.json()).then(res => {
                if(res.message!=='Player added to team'){
                    alert(res.message)
                }else{
                window.location.reload();
                }
            })
    }

    function player_rejected(player) {
        fetch("http://127.0.0.1:5000/reject_player", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({ selected_player: player }),

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


    function change_availability(player,availability) {
        console.log(player)
        fetch("http://127.0.0.1:5000/change_availability", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({ selected_player: player,availability:availability.target.value }),

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

    function suggestions() {
        const data = {
            "category": category,
            "role": role,
            "p_type": p_type,
            "speciality": speciality,
            "venues": venues,
            "position": position,
            "draft": props.players_stats
        };
        fetch("http://127.0.0.1:5000/suggest_players", {

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
                if(res.message !=="No such player available in draft"){
                    res = removeDuplicates(res);
                    if (res.length <= 6) {
                        set_suggested(res)
                    } else {
                        set_suggested(res.slice(0, 6))
                    }
                }

            })
    }

    return (
        <React.Fragment>
            <Container className="content">
                <div className="row my-3">
                    <div className="col-sm-12">
                        <h2 className="mt-4 mb-4 fw-bold">
                            Add player specification to get suggestion
                        </h2>

                        <form className="row g-3" >

                            <div className="col-md-3">
                                <label className="form-label">Category </label>
                                <select name="category" className="form-select" onChange={(e) => handlecategory(e)} >

                                    <option value="Platinium">Platinium </option>
                                    <option value="Daimond">Daimond </option>
                                    <option value="Gold">Gold </option>
                                    <option value="Silver">Silver </option>

                                </select>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Role</label>
                                <select className="form-select" name="role" onChange={(e) => handlerole(e)}>

                                    <option value="Batsman">Batsman</option>
                                    <option value="Bowler">Bowler</option>
                                    <option value="All-Rounder">All-Rounder</option>
                                    <option value="Wicket-Keeper">Wicket-Keeper</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Player Type</label>
                                <select className="form-select" name="p_type" onChange={(e) => handlep_type(e)}>
                                    <option value="Local">Local</option>
                                    <option value="Foreigner">Foreigner</option>

                                </select>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label">Speciality</label>
                                <select className="form-select" name="speciality" onChange={(e) => handlespecaility(e)}>
                                    <option value="Consistency">Consistency</option>
                                    <option value="Power-Hitting">Power-Hitting</option>
                                    <option value="Economical">Economical</option>
                                    <option value="Wicket-Taking">Wicket-Taking</option>
                                </select>
                            </div>
                            <div className="col-md-6 my-3">
                                <label className="form-label">Venues</label>
                                <select className="form-select" name="venue" onChange={(e) => handlevenues(e)}>
                                    <option value="Any">Any</option>
                                    <option value="League Venues">League Venues</option>
                                </select>
                            </div>

                            <div className="col-md-6 my-3">
                                <label className="form-label">Position</label>
                                <select className="form-select" name="venue" onChange={(e) => handleposition(e)}>
                                    <option value="Any">Any</option>
                                    {(() => {
                                        const options = [];

                                        for (let i = 1; i <= 10; i++) {
                                            options.push(<option value={i}>{i}</option>);
                                        }

                                        return options;
                                    })()}
                                </select>
                            </div>

                            <div className="col-md-3">
                                <button type="button" className="btn btn-primary mt-4" onClick={() => suggestions()}>Submit</button>
                            </div>



                        </form>
                    </div>
                </div>
            </Container>
            <div className="container py-5">
                <Carousel responsive={responsive}>
                    {suggested_players.map((player) => (


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
                                    <button type="button" className="btn btn-outline-primary mx-1" onClick={() => player_selected(player)}>Pick</button>
                                    <button type="button" class="btn btn-outline-danger" onClick={() => player_rejected(player)}>Drop</button>
                                    <label className="form-label">Availability</label>
                                    <select className="form-select" name="venue" onChange={(e) => change_availability(player,e)}>
                                    <option value={player.availability}>{player.availability}</option>
                                    {(() => {
                                        const options = [];

                                        for (let i = 13; i >= 1; i--) {
                                            options.push(<option value={i}>{i}</option>);
                                        }

                                        return options;
                                    })()}
                                </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </React.Fragment>

    );
}

export default SelectTextFields;