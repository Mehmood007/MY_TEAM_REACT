import React, { Fragment } from "react";
import ReactLoading from "react-loading";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Carousels from "./Carousels";
import Auto_Complete from "./Auto_Complete"


function Content() {
    const [players, setPlayers] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:5000/allplayers`
            );
            const json = await response.json();
            setPlayers(json);
            setloading(false)
        };
        fetchData().catch(console.error);
    }, []);
    
    return (
        <Fragment>
            {loading == true ?
                <div className="d-flex algin-items center justify-content-center m-5 p-5">
                    <ReactLoading
                        type="spinningBubbles"
                        color="blue"
                        height={100}
                        width={50}
                    /> </div>
                :
                
                <div className=" my-3 mx-5">
                    <Auto_Complete players ={players} />
                    <Carousels players={players}/>
                </div>
            }
        </Fragment>
    );
}

export default Content;