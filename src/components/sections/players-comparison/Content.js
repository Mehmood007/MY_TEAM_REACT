import React, { Fragment, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Graph from './Comparison_Graph';
import Table from './Table';
import Chart_Tabs from './chart_tabs'

function Content(props) {
    
    const [roles,setroles] = useState([]);

    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:5000/compare_players/${props.player1id}/${props.player2id}`
            );
            const json = await response.json();
            setdata(json);
            var p_roles = []
            if(json.player1.Bowler && json.player1.Batsman){
                p_roles.push("All-Rounder")
            }else if(json.player1["Wicket-Keeper"]){
                p_roles.push("Wicket-Keeper Batsman")
            }else if(json.player1.Batsman){
                p_roles.push("Batsman")
            }else if(json.player1.Bowler){
                p_roles.push("Bowler")
            }
            if(json.player2.Bowler && json.player2.Batsman){
                p_roles.push("All-Rounder")
            }else if(json.player2["Wicket-Keeper"]){
                p_roles.push("Wicket-Keeper Batsman")
            }else if(json.player2.Batsman){
                p_roles.push("Batsman")
            }else if(json.player2.Bowler){
                p_roles.push("Bowler")
            }
            setroles(p_roles)
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
                <section className="team-details pt-150 pb-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-4">
                                <div className="member-img">
                                    <img src={data.player1.picture} alt={data.player1.name} />
                                </div>
                            </div>
                            <div className="col-md-4 align-items-center justify-content-center">
                            <div className="member-img">
                                    <img src="https://www.pngmart.com/files/11/Versus-PNG-Pic.png" alt={data.player1.name} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="member-img">
                                    <img src={data.player2.picture} alt={data.player2.name} />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center my-1 bg-light font-weight-bold bg-gradient">
                            <div className="col-md-4">
                                <div className="member-img lead text-right">
                                    {data.player1.name}
                                </div>
                            </div>
                            <div className="col-md-4 align-items-center justify-content-center">
                            <div className="member-img lead text-center font-weight-bolder">
                                    <b>Name</b>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="member-img lead">
                                    {data.player2.name}
                                </div>
                            </div>
                            
                        </div>
                        <div className="row align-items-center justify-content-center my-1 bg-light font-weight-bold bg-gradient">
                            <div className="col-md-4">
                                <div className="member-img lead text-right">
                                    {data.player1.country}
                                </div>
                            </div>
                            <div className="col-md-4 align-items-center justify-content-center">
                            <div className="member-img lead text-center font-weight-bolder">
                                    <b>Country</b>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="member-img lead">
                                    {data.player2.country}
                                </div>
                            </div>
                            
                        </div>
                        <div className="row align-items-center justify-content-center my-1 bg-light font-weight-bold bg-gradient">
                            <div className="col-md-4">
                                <div className="member-img lead text-right">
                                    {roles[0]}
                                </div>
                            </div>
                            <div className="col-md-4 align-items-center justify-content-center">
                            <div className="member-img lead text-center font-weight-bolder">
                                    <b>Role</b>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="member-img lead">
                                    {roles[1]}
                                </div>
                            </div>
                            
                        </div>
                        <Chart_Tabs data={data}/>
                        {data.p1_to_p2.length>=1 ? 
                        <div>
                            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color:"blue" }}>{data.player1.name} to {data.player2.name}</h3>
                            <Table p1_to_p2={data.p1_to_p2.length===1?data.p1_to_p2[0]:data.p1_to_p2}></Table>
                        </div> 
                        :<></>}
                        {data.p2_to_p1.length>=1 ? 
                        <div>
                            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:"blue" }}>{data.player2.name} to {data.player1.name}</h3>
                            <Table p1_to_p2={data.p2_to_p1.length===1?data.p2_to_p1[0]:data.p2_to_p1}></Table>
                        </div> 
                        :<></>}
                    </div>
                </section>}
              
        </Fragment>
    );

}

export default Content;