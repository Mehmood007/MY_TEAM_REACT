import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { TextField } from "@mui/material";
import {Autocomplete} from "@mui/material";
import {Box} from "@mui/material";
import { Link,Redirect } from "react-router-dom";

function ComparisonSearch(props) {
    const [players, setPlayers] = useState([]);
    const [value,setvalue] = useState(null)
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
    }, [])
    if(value!==null){
        return <Redirect push to={{pathname:"/comparison",
        state:{player1id: props.playerid,player2id: value.cricmetric}}}
        ></Redirect>
    }
    return (
        <>
            {loading == true ?
                <div className="d-flex algin-items center justify-content-center m-5 p-5">
                    <ReactLoading
                        type="spinningBubbles"
                        color="blue"
                        height={100}
                        width={50}
                    /> </div>
                :
                <div className=" my-3">
                    <Autocomplete 
                        disablePortal
                        id="combo-box-demo"
                        options={players}
                        noOptionsText = {"No such player exists"}
                        getOptionLabel = {(players)=>players.name}
                        sx={{ width: "100%" }}
                        onChange={(event, value) => {if(value!==null){setvalue(value)}}}
                        renderInput={(params) => <TextField {...params} label="Compare Player" />}
                        renderOption = {(props,players)=>(
                            <Box {...props} key={players.cricmetric}>
                                    <img src={players.picture} width="10%"></img>
                                    {players.name}
                            </Box>
                        )
                        

                        }
                    />
                </div>
            }
        </>
    )
}

export default ComparisonSearch