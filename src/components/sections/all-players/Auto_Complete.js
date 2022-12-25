import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { TextField } from "@mui/material";
import {Autocomplete} from "@mui/material";
import {Box} from "@mui/material";
import { Link,Redirect } from "react-router-dom";

function ComparisonSearch(props) {
    const players = props.players
    const [value,setvalue] = useState(null)
    
    
    if(value!==null){
        return <Redirect push to={{pathname:"/team-details",
        state:{player_id: value.cricmetric,cricinfo:value.cricinfo_id}}}
        ></Redirect>
    }
    return (
        <>
            
                <div className=" my-3">
                    <Autocomplete 
                        disablePortal
                        id="combo-box-demo"
                        options={players}
                        noOptionsText = {"No such player exists"}
                        getOptionLabel = {(players)=>players.name}
                        sx={{ width: "100%" }}
                        onChange={(event, value) => {if(value!==null){setvalue(value)}}}
                        renderInput={(params) => <TextField {...params} label="Search Player" />}
                        renderOption = {(props,players)=>(
                            <Box {...props} key={players.cricmetric}>
                                    <img src={players.picture} width="10%"></img>
                                    {players.name}
                                    <br/>
                                    {players.country}
                                    <br/>
                                    {players.role}
                            </Box>
                        )
                        

                        }
                    />
                </div>
            
        </>
    )
}

export default ComparisonSearch