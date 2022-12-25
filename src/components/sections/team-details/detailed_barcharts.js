import React, { useState, useEffect } from "react";
import 'chart.js/auto';
import { Chart, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function Graph(props) {
  useEffect(() => {
    if (props.required == "Complete") {
      const setbatting_stats = async () => {

        setBattingData({
          labels: props.player_stats[0].map(match => match[13]),
          datasets: [{
            label: "Runs",
            data: props.player_stats[0].map(match => match[2]),
            borderColor: '#F70000',
            backgroundColor: '#F70000'
          },
          {
            label: "Strike Rate",
            data: props.player_stats[0].map(match => match[6]),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)'
          }
          ]
        });
      }
      const setbowling_stats = async () => {

        setBowlingData({
          labels: props.player_stats[1].map(match => match[13]),
          datasets: [{
            label: "Overs",
            data: props.player_stats[1].map(match => match[2]),
            borderColor: 'rgb(0, 0, 192)',
            backgroundColor: 'rgb(0, 0, 192)'
          },
          {
            label: "Runs",
            data: props.player_stats[1].map(match => match[3]),
            borderColor: 'rgb(0,192, 0)',
            backgroundColor: 'rgb(0,192, 0)'
          },
          {
            label: "Wickets",
            data: props.player_stats[1].map(match => match[4]),
            borderColor: 'rgb(192,0, 0)',
            backgroundColor: 'rgb(192,0, 0)'
          }
          ]
        });
      }
      setbatting_stats();
      if (props.player_stats.length > 1) {
        setbowling_stats();
      }
    }else if(props.required=="Positional"){
      const setbatting_stats = async () => {

        setBattingData({
          labels: props.player_stats[0].map(match => match[0]),
          datasets: [{
            label: "Average",
            data: props.player_stats[0].map(match => match[5]),
            borderColor: '#F70000',
            backgroundColor: '#F70000'
          },
          {
            label: "Strike Rate",
            data: props.player_stats[0].map(match => match[6]),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)'
          }
          ]
        });
      }
      const setbowling_stats = async () => {

        setBowlingData({
          labels: props.player_stats[1].map(match => match[0]),
          datasets: [{
            label: "Average",
            data: props.player_stats[1].map(match => match[6]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)'
          },
          {
            label: "Strike Rate",
            data: props.player_stats[1].map(match => match[7]),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)'
          },
          {
            label: "Wickets",
            data: props.player_stats[1].map(match => match[4]),
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgb(255, 205, 86)'
          }
          ]
        });
      }
      setbatting_stats();
      if (props.player_stats.length > 1) {
        setbowling_stats();
      }
    }else if(props.required=="League-International"){
      var league_runs = 0;
      var league_balls = 0;
      var league_outs = 0;
      var international_runs = 0;
      var international_balls = 0;
      var international_outs = 0;
      for(let i=1;i<props.player_stats[0].length;i++){
        if(props.player_stats[0][i][0].includes("_T20_")){
          international_runs += Number(props.player_stats[0][i][2]);
          international_balls += Number(props.player_stats[0][i][3]);
          international_outs += Number(props.player_stats[0][i][4]);
        }else{
          league_runs += Number(props.player_stats[0][i][2]);
          league_balls += Number(props.player_stats[0][i][3]);
          league_outs += Number(props.player_stats[0][i][4]);
        }
      }
      if(international_outs == 0){
        international_outs=1;
      }
      if(league_outs == 0){
        league_outs=1;
      }
      const setbatting_stats = async () => {

        setBattingData({
          labels: ["Internationals","Leagues"],
          datasets: [{
            label: "Average",
            data: [international_runs/international_outs,league_runs/league_outs],
            borderColor: '#F70000',
            backgroundColor: '#F70000'
          },
          {
            label: "Strike Rate",
            data:[((international_runs/international_balls)*100),((league_runs/league_balls)*100)],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)'
          }
          ]
        });
      }
      const setbowling_stats = async () => {
      var league_runs = 0;
      var league_balls = 0;
      var league_wickets = 0;
      var league_5w = 0;
      var international_runs = 0;
      var international_balls = 0;
      var international_wickets = 0;
      var internatioal_5w = 0
      for(let i=1;i<props.player_stats[1].length;i++){
        if(props.player_stats[1][i][0].includes("_T20_")){
          international_runs += Number(props.player_stats[1][i][3]);
          const match_balls = props.player_stats[1][i][2].split(".")
          international_balls += (Number(match_balls[0])*6)+Number(match_balls[1]);
          international_wickets += Number(props.player_stats[1][i][4]);
          internatioal_5w += Number(props.player_stats[1][i][8]);
        }else{
          league_runs += Number(props.player_stats[1][i][3]);
          const match_balls = props.player_stats[1][i][2].split(".")
          league_balls += (Number(match_balls[0])*6)+Number(match_balls[1]);
          league_wickets += Number(props.player_stats[1][i][4]);
          league_5w += Number(props.player_stats[1][i][8]);
        }
      }
      if(international_wickets == 0){
        international_wickets=1;
      }
      if(league_wickets == 0){
        league_wickets=1;
      }

        setBowlingData({
          labels: ["Internationals","Leagues"],
          datasets: [{
            label: "Average",
            data: [international_runs/international_wickets,league_runs/league_wickets],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)'
          },
          {
            label: "Strike Rate",
            data: [(international_runs/international_balls)*100,(league_runs/league_balls)*100],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)'
          },
          {
            label: "Wickets",
            data: [internatioal_5w,league_5w],
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgb(255, 205, 86)'
          }
          ]
        });
      }
      setbatting_stats();
      if (props.player_stats.length > 1) {
        setbowling_stats();
      }
    }
  }, [])

  const [battingData, setBattingData] = useState({
    datasets: [],
  });
  const [bowlingData, setBowlingData] = useState({
    datasets: [],
  });

  return (
    <>
    {props.required==="Complete" ? 
    <>
    <div style={{ width: "100%", marginTop: 5 }}>
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Batting Stats</h2>
      <Chart type='line' data={battingData} />
    </div>
    {props.player_stats.length == 1 ?
      <></> :
      <div style={{ width: "100%", marginTop: 5 }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Bowling Stats</h1>
        <Chart type='bar' data={bowlingData} />
      </div>}
  </> :
  <>
  <div style={{ width: "100%", marginTop: 5 }}>
    <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Batting Stats</h2>
    <Chart type='bar' data={battingData} />
  </div>
  {props.player_stats.length == 1 ?
    <></> :
    <div style={{ width: "100%", marginTop: 5 }}>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Bowling Stats</h1>
      <Chart type='bar' data={bowlingData} />
    </div>}
</>  
  }
    </>

  )
}

export default Graph;