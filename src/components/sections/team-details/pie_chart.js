import React, { useState, useEffect } from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function Pie_Chart(props) {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  useEffect(() => {
    const setmatches = async () => {
      var league_matches=0,internation_matches=0;
      for(let i=0;i<props.matches.length;i++){
        if(props.matches[i].includes("_T20_")){
          internation_matches +=1;
        }else{
          league_matches +=1
        }
      }
      setBattingData({
        labels: ["Leagues", "Internationals"],
        datasets: [{
          label: "Matches",
          data: [league_matches, internation_matches],
          backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'],
          
          hoverOffset: 4
        }]
      });
    }
    setmatches();

  }, [])

  const [battingData, setBattingData] = useState({ datasets: [] });


  return (
    <div style={{ width: "100%" ,marginTop:3}}>
      <Chart type='pie' data={battingData} />
    </div>


  )
}

export default Pie_Chart;