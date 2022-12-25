import React, { useState, useEffect } from "react";
import 'chart.js/auto';
import { Chart, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function Graph(props) {
  if (props.display_requirement == "innings") {
    const innings = {
      labels: [props.data.player1.name, props.data.player2.name],
      datasets: [{
        label: "Batting Innings",
        data: [props.data.player1.batting_innings, props.data.player2.batting_innings],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "Bowling Innings",
        data: [props.data.player1.bowling_innings, props.data.player2.bowling_innings],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      }
      ]
    }
    return (
      <>
        <div className={"my-3"}>
          <h3>Innings</h3>
          <Chart type='bar' data={innings} />
        </div>

      </>
    );
  } else if (props.display_requirement == "boundries") {
    const innings = {
      labels: [props.data.player1.name, props.data.player2.name],
      datasets: [{
        label: "6s",
        data: [props.data.player1.batting_6s, props.data.player2.batting_6s],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "4s",
        data: [props.data.player1.batting_4s, props.data.player2.batting_4s],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      }
      ]
    }
    return (
      <>
        <div className={"my-3"}>
          <h3>Boundries</h3>
          <Chart type='bar' data={innings} />
        </div>

      </>
    );
  } else if (props.display_requirement == "batting") {
    const innings = {
      labels: [props.data.player1.name, props.data.player2.name],
      datasets: [{
        label: "Average",
        data: [props.data.player1.batting_avg, props.data.player2.batting_avg],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "Strike Rate",
        data: [props.data.player1.batting_sr, props.data.player2.batting_sr],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      }
      ]
    }
    return (
      <>
        <div className={"my-3"}>
          <h3>Batting</h3>
          <Chart type='bar' data={innings} />
        </div>

      </>
    );
  } else if (props.display_requirement == "bowling") {
    const innings = {
      labels: [props.data.player1.name, props.data.player2.name],
      datasets: [{
        label: "Average",
        data: [props.data.player1.bowling_average, props.data.player2.bowling_average],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "Strike Rate",
        data: [props.data.player1.bowling_sr, props.data.player2.bowling_sr],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      }
      ]
    }
    return (
      <>
        <div className={"my-3"}>
          <h3>Bowling</h3>
          <Chart type='bar' data={innings} />
        </div>

      </>
    );
  } else if (props.display_requirement == "dots") {
    const innings = {
      labels: [props.data.player1.name, props.data.player2.name],
      datasets: [{
        label: "Batting Dots",
        data: [props.data.player1.batting_dots, props.data.player2.batting_dots],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "Bowling Dots",
        data: [props.data.player1.bowling_dots, props.data.player2.bowling_dots],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      }
      ]
    }
    return (
      <>
        <div className={"my-3"}>
          <h3>Dots</h3>
          <Chart type='bar' data={innings} />
        </div>

      </>
    );
  } else if (props.display_requirement == "position") {
    var batting_postions = []
    for (let i = 0; i < 12; i++) {
      batting_postions.push([[0, 0], [0, 0]])
    }
    for (let i = 1; i < props.data.p1_positional[0].length; i++) {
      const position = Number(props.data.p1_positional[0][i][0])
      batting_postions[position][0][0] = props.data.p1_positional[0][i][5];
      batting_postions[position][0][1] = props.data.p1_positional[0][i][6];
    }
    for (let i = 1; i < props.data.p2_positional[0].length; i++) {
      const position = Number(props.data.p2_positional[0][i][0])
      batting_postions[position][1][0] = props.data.p2_positional[0][i][5];
      batting_postions[position][1][1] = props.data.p2_positional[0][i][6];
    }
    const batting_stats = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      datasets: [{
        label: "P1Avg",
        data: batting_postions.map(position => position[0][0]).slice(1),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "P1SR",
        data: batting_postions.map(position => position[0][1]).slice(1),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      },
      {
        label: "P2Avg",
        data: batting_postions.map(position => position[1][0]).slice(1),
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgb(255, 205, 86)'
      },
      {
        label: "P2SR",
        data: batting_postions.map(position => position[1][1]).slice(1),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)'
      }
      ]
    }
    var bowling = false;
    var bowling_postions = []
    for (let i = 0; i < 12; i++) {
      bowling_postions.push([[0, 0], [0, 0]])
    }

    if(props.data.p1_positional.length==2){
      bowling = true;
      for (let i = 1; i < props.data.p1_positional[1].length; i++) {
        const position = Number(props.data.p1_positional[1][i][0])
        bowling_postions[position][0][0] = props.data.p1_positional[1][i][6];
        bowling_postions[position][0][1] = props.data.p1_positional[1][i][7];
      }
    }
    if(props.data.p2_positional.length==2){
      bowling = true;
      for (let i = 1; i < props.data.p2_positional[1].length; i++) {
        const position = Number(props.data.p2_positional[1][i][0])
        bowling_postions[position][1][0] = props.data.p2_positional[1][i][6];
        bowling_postions[position][1][1] = props.data.p2_positional[1][i][7];
      }
    }
    const bowling_stats = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      datasets: [{
        label: "P1Avg",
        data: bowling_postions.map(position => position[0][0]).slice(1),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: "P1SR",
        data: bowling_postions.map(position => position[0][1]).slice(1),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)'
      },
      {
        label: "P2Avg",
        data: bowling_postions.map(position => position[1][0]).slice(1),
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgb(255, 205, 86)'
      },
      {
        label: "P2SR",
        data: bowling_postions.map(position => position[1][1]).slice(1),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)'
      }
      ]
    }
    return (
      <>
        <div className={"my-3"}>
          <h3>Batting Postions</h3>
          <Chart type='bar' data={batting_stats} />
        </div>
        {bowling==true ? 
        <div className={"my-3"}>
        <h3>Bowling Positions</h3>
        <Chart type='bar' data={bowling_stats} />
      </div>:
      <></>}
      </>
    );
  }
}

export default Graph;