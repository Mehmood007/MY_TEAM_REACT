import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function Table(props) {
  if (props.display_filter == "Complete") {
    var batting_stats = []
    var bowling_stats = []
    for (let i = 1; i < props.player_stats[0].length; i++) {
      const match_link = "http://www.cricmetric.com/match/"+props.player_stats[0][i][0]
      batting_stats.push(
        { match: <a href={match_link} target="_blank">{props.player_stats[0][i][0]}</a>, balls: props.player_stats[0][i][3], runs: props.player_stats[0][i][2], dots: props.player_stats[0][i][12], date: props.player_stats[0][i][13] }
      )
    }


    const batting_columns = [
      { dataField: "match", text: "Match", sort: true },
      { dataField: "balls", text: "Balls", sort: true },
      { dataField: "runs", text: "Runs", sort: true },
      { dataField: "dots", text: "Dots", sort: true },
      { dataField: "date", text: "Date", sort: true }
    ];
    var bowling_columns=[];
    if(props.player_stats.length>1){
      for (let i = 1; i < props.player_stats[1].length; i++) {
        const match_link = "http://www.cricmetric.com/match/"+props.player_stats[1][i][0]
        bowling_stats.push(
          { match: <a href={match_link} target="_blank">{props.player_stats[1][i][0]}</a>, overs: props.player_stats[1][i][2], runs: props.player_stats[1][i][3], wickets: props.player_stats[1][i][4], date: props.player_stats[1][i][13] }
        )
      }
      bowling_columns = [
        { dataField: "match", text: "Match", sort: true },
        { dataField: "overs", text: "Balls", sort: true },
        { dataField: "runs", text: "Runs", sort: true },
        { dataField: "wickets", text: "Dots", sort: true },
        { dataField: "date", text: "Date", sort: true }
      ]
    }

    const defaultSorted = [
      {
        dataField: "match"
      }
    ];

    const pagination = paginationFactory({
      page: 1,
      sizePerPage: 5,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
      showTotal: true,
      alwaysShowAllBtns: true,
      onPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      },
      onSizePerPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      }
    });

    return (
      <div className="App">
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Batting Stats</h2>

        <BootstrapTable
          bootstrap4
          keyField="match"
          data={batting_stats}
          columns={batting_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />

        {props.player_stats.length>1 ? 
          <>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Bowling Stats</h2>
          <BootstrapTable
          bootstrap4
          keyField="match"
          data={bowling_stats}
          columns={bowling_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
          </> :
        <></>
      }
      </div>
    );
  }else if (props.display_filter == "League") {
    var batting_stats = []
    var bowling_stats = []
    for (let i = 1; i < props.player_stats[0].length; i++) {
      if(props.player_stats[0][i][0].indexOf("_T20_")==-1){
        const match_link = "http://www.cricmetric.com/match/"+props.player_stats[0][i][0]
      batting_stats.push(
        { match: <a href={match_link} target="_blank">{props.player_stats[0][i][0]}</a>, balls: props.player_stats[0][i][3], runs: props.player_stats[0][i][2], dots: props.player_stats[0][i][12], date: props.player_stats[0][i][13] }
      )
      }
      
    }


    const batting_columns = [
      { dataField: "match", text: "Match", sort: true },
      { dataField: "balls", text: "Balls", sort: true },
      { dataField: "runs", text: "Runs", sort: true },
      { dataField: "dots", text: "Dots", sort: true },
      { dataField: "date", text: "Date", sort: true }
    ];
    var bowling_columns=[];
    if(props.player_stats.length>1){
      for (let i = 1; i < props.player_stats[1].length; i++) {
        if(props.player_stats[1][i][0].indexOf("_T20_")==-1){
          const match_link = "http://www.cricmetric.com/match/"+props.player_stats[1][i][0]
        bowling_stats.push(
          { match: <a href={match_link} target="_blank">{props.player_stats[1][i][0]}</a>, balls: props.player_stats[1][i][3], runs: props.player_stats[1][i][2], dots: props.player_stats[1][i][12], date: props.player_stats[1][i][13] }
        )
        }
      }
      bowling_columns = [
        { dataField: "match", text: "Match", sort: true },
        { dataField: "overs", text: "Balls", sort: true },
        { dataField: "runs", text: "Runs", sort: true },
        { dataField: "wickets", text: "Dots", sort: true },
        { dataField: "date", text: "Date", sort: true }
      ]
    }

    const defaultSorted = [
      {
        dataField: "match"
      }
    ];

    const pagination = paginationFactory({
      page: 1,
      sizePerPage: 5,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
      showTotal: true,
      alwaysShowAllBtns: true,
      onPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      },
      onSizePerPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      }
    });

    return (
      <div className="App">
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Batting Stats</h2>

        <BootstrapTable
          bootstrap4
          keyField="match"
          data={batting_stats}
          columns={batting_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />

        {props.player_stats.length>1 ? 
          <>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Bowling Stats</h2>
          <BootstrapTable
          bootstrap4
          keyField="match"
          data={bowling_stats}
          columns={bowling_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
          </> :
        <></>
      }
      </div>
    );
  }else if (props.display_filter == "Positional") {
    var batting_stats = []
    var bowling_stats = []
    for (let i = 1; i < props.player_stats[0].length; i++) {
      
      batting_stats.push(
        { position: Number(props.player_stats[0][i][0]), innings: Number(props.player_stats[0][i][1]), avg: Number(props.player_stats[0][i][5]).toFixed(2), sr: Number(props.player_stats[0][i][6]).toFixed(2), f50s: props.player_stats[0][i][8],h100s: props.player_stats[0][i][9] }
      )
      
    }
    const batting_columns = [
      { dataField: "position", text: "Position", sort: true },
      { dataField: "innings", text: "Innings", sort: true },
      { dataField: "avg", text: "Average", sort: true },
      { dataField: "sr", text: "Strike-Rate", sort: true },
      { dataField: "f50s", text: "50s", sort: true },
      { dataField: "h100s", text: "100s", sort: true }
    ];
    
    const bowling_columns = [
      { dataField: "position", text: "Position", sort: true },
      { dataField: "innings", text: "Innings", sort: true },
      { dataField: "overs", text: "Overs", sort: true },
      { dataField: "runs", text: "Runs", sort: true },
      { dataField: "wickets", text: "Wickets", sort: true },
      { dataField: "economy", text: "Economy", sort: true }
    ]
    if(props.player_stats.length>1){
      for (let i = 1; i < props.player_stats[1].length; i++) {
        
        bowling_stats.push(
          { position: Number(props.player_stats[1][i][0]), innings: props.player_stats[1][i][1], overs: Number(props.player_stats[1][i][2]).toFixed(0), runs: props.player_stats[1][i][3], wickets: props.player_stats[1][i][4],economy:Number(props.player_stats[1][i][5]).toFixed(2) }
        )
        
      }
    }

    const defaultSorted = [
      {
        dataField: "position"
      }
    ];

    const pagination = paginationFactory({
      page: 1,
      sizePerPage: 5,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
      showTotal: true,
      alwaysShowAllBtns: true,
      onPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      },
      onSizePerPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      }
    });
    
    return (
      <div className="App">
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Batting Stats</h2>
        <BootstrapTable
          bootstrap4
          keyField="position"
          data={batting_stats}
          columns={batting_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
        {props.player_stats.length>1 ? 
          <>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Bowling Stats</h2>
          <BootstrapTable
          bootstrap4
          keyField="position"
          data={bowling_stats}
          columns={bowling_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
          </> :
        <></>
      }
      
      </div>
    );
  }else if (props.display_filter == "International") {
    var batting_stats = []
    var bowling_stats = []
    for (let i = 1; i < props.player_stats[0].length; i++) {
      if(props.player_stats[0][i][0].includes("_T20_")){
        const match_link = "http://www.cricmetric.com/match/"+props.player_stats[0][i][0]
      batting_stats.push(
        { match: <a href={match_link} target="_blank">{props.player_stats[0][i][0]}</a>, balls: props.player_stats[0][i][3], runs: props.player_stats[0][i][2], dots: props.player_stats[0][i][12], date: props.player_stats[0][i][13] }
      )
      }
      
    }


    const batting_columns = [
      { dataField: "match", text: "Match", sort: true },
      { dataField: "balls", text: "Balls", sort: true },
      { dataField: "runs", text: "Runs", sort: true },
      { dataField: "dots", text: "Dots", sort: true },
      { dataField: "date", text: "Date", sort: true }
    ];
    var bowling_columns=[];
    if(props.player_stats.length>1){
      for (let i = 1; i < props.player_stats[1].length; i++) {
        if(props.player_stats[1][i][0].includes("_T20_")){
          const match_link = "http://www.cricmetric.com/match/"+props.player_stats[1][i][0]
        bowling_stats.push(
          { match: <a href={match_link} target="_blank">{props.player_stats[1][i][0]}</a>, balls: props.player_stats[1][i][3], runs: props.player_stats[1][i][2], dots: props.player_stats[1][i][12], date: props.player_stats[1][i][13] }
        )
        }
      }
      bowling_columns = [
        { dataField: "match", text: "Match", sort: true },
        { dataField: "overs", text: "Balls", sort: true },
        { dataField: "runs", text: "Runs", sort: true },
        { dataField: "wickets", text: "Dots", sort: true },
        { dataField: "date", text: "Date", sort: true }
      ]
    }

    const defaultSorted = [
      {
        dataField: "match"
      }
    ];

    const pagination = paginationFactory({
      page: 1,
      sizePerPage: 5,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
      showTotal: true,
      alwaysShowAllBtns: true,
      onPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      },
      onSizePerPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
      }
    });

    return (
      <div className="App">
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Batting Stats</h2>

        <BootstrapTable
          bootstrap4
          keyField="match"
          data={batting_stats}
          columns={batting_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />

        {props.player_stats.length>1 ? 
          <>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Detailed Bowling Stats</h2>
          <BootstrapTable
          bootstrap4
          keyField="match"
          data={bowling_stats}
          columns={bowling_columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
          </> :
        <></>
      }
      </div>
    );
  }
}

export default Table;
