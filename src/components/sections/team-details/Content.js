import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Portfolio from './Portfolio';
import Pie_Chart from './pie_chart';
import IconLabelTabs from './chart_tabs';
import Table_Tabs from './table_tabs';
import ComparisonSearch from './Auto_Complete';

function Content(props) {

    const [matches, setmatches] = useState([]);

    function no_matches(stats) {
        if (stats.length > 1) {
            var total_matches = []
            for (let i = 0; i < stats[0].length; i++) {
                if (match_already_counted(stats[0][i][0], total_matches) == false) {
                    total_matches.push(stats[0][i][0])
                }
            }
            for (let i = 0; i < stats[1].length; i++) {
                if (match_already_counted(stats[1][i][0], total_matches) == false) {
                    total_matches.push(stats[1][i][0])
                }
            }
            setmatches(total_matches)
        } else {
            var total_matches = []
            for (let i = 0; i < stats[0].length; i++) {
                if (match_already_counted(stats[0][i][0], total_matches) == false) {
                    total_matches.push(stats[0][i][0])
                }
            }
            setmatches(total_matches);
        }
    }

    function match_already_counted(match_id, total_matches) {
        for (var i = 0; i < total_matches.length; i++) {
            if (total_matches[i] == match_id) {
                return true;
            }
        }
        return false;
    }

    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://127.0.0.1:5000/getPlayer/${props.playerid}`
            );
            const json = await response.json();
            no_matches(json.stats)
            setdata(json);
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
                            <div className="col-lg-5 col-md-9">
                                <div className="member-img">
                                    <img src={data.picture} alt={data.playername} />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-9">
                                <div className="member-information">
                                    <div className="member-info-top d-sm-flex align-items-center justify-content-between">
                                        <div className="title">
                                            <h2>{data.playername}</h2>
                                            <span>{data.country}</span>
                                        </div>
                                        <div className="link">
                                            {props.cricinfo === undefined || props.cricinfo === null ?
                                                <Link to={{ pathname: ('https://search.espncricinfo.com/ci/content/site/search.html?search=' + props.playerid) }} className="main-btn btn-filled" target="_blank">Cricinfo</Link> :
                                                <Link to={{ pathname: ('https://www.espncricinfo.com/player/' + props.cricinfo) }} className="main-btn btn-filled" target="_blank">Cricinfo</Link>}

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-8 col-md-9">
                                            <ul className="contact-list">

                                                <li >
                                                    <span className="title">Matches : </span>
                                                    <span>{matches.length}</span>
                                                </li>
                                                <li >
                                                    <span className="title">Role : </span>
                                                    <span>{data.role}</span>
                                                </li>
                                                <li >
                                                    <span className="title">Bowling Style : </span>
                                                    <span>{data.bowling_style}</span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className='col-xl-4 col-md-3 pt-4'>
                                            <Pie_Chart matches={matches} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <IconLabelTabs player_details={data} />
                        <Table_Tabs player_details={data} />
                        <ComparisonSearch playerid={props.playerid} />
                    </div>
                </section>}
            <Portfolio />

        </Fragment>
    );

}

export default Content;