import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function DlCalculator(props) {
    const session_id=localStorage.getItem("session_id")
    const [team1score, setteam1score] = useState("Platinium");
    const [remaining_overs, setremainingovers] = useState("Consistency");
    const [wickets_in_hand, setp_wicket_in_hands] = useState("Batsman");
    const [p_type, setp_type] = useState("Local");
    const [parscore, set_parscore] = useState(" ")

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    const handleteam1score = (event) => {
        const getteam1score = event.target.value;
        setteam1score(getteam1score);
    }



    const handleremainingovers = (event) => {
        const getremainingovers = event.target.value;
        setremainingovers(getremainingovers);
    }


    const handlewicketinhands = (event) => {
        const get_wicket_in_hands = event.target.value;
        setp_wicket_in_hands(get_wicket_in_hands);
    }

    

    function calculate_score() {
        const data = {
            "team1Score":team1score,
            "oversRemaining":remaining_overs,
            "wickets_in_hand":wickets_in_hand
        }
        
        fetch("http://127.0.0.1:5000/dl_calculator", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(data),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "session_id":session_id
            }
        })

            // Converting to JSON
            .then(response => response.json()).then(res => {
                set_parscore(res.required_score);
                
            })
    }

    return (
        <React.Fragment>
            <Container className="content">
                <div className="row my-3">
                    <div className="col-sm-12">
                        <h2 className="mt-4 mb-4 fw-bold">
                            Par Score Calculator
                        </h2>

                        <form className="row g-3" >

                            <div className="col-md-4">
                                <label className="form-label">Team 1 Score </label>
                                <input name="team1_score" type="number" className="form-select" onChange={(e) => handleteam1score(e)} >
                                </input>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Remaining Over</label>
                                <input className="form-select" type="number" name="remaining_overs" onChange={(e) => handleremainingovers(e)}>
                                </input>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Wickets in Hand</label>
                                <input className="form-select" type="number" name="wickets_in_hand" onChange={(e) => handlewicketinhands(e)}>
                                    
                                </input>
                            </div>


                            <div className="col-md-4">
                                <button type="button" className="btn btn-primary mt-4" onClick={() => calculate_score()}>Submit</button>
                            </div>



                        </form>
                    </div>
                    
                </div>
                <div className="row py-5 mb-1">
                    <div className="col-3 lead"><strong>Par Score</strong></div>
                    <div className="col-3 lead">{parscore}</div>
                </div>
            </Container>
            
        </React.Fragment>
        
    );
}

export default DlCalculator;