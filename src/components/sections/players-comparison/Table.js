import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function Table(props){
        var batting_stats = []
        for (let i = 1; i < props.p1_to_p2.length; i++) {
          const match_link = "http://www.cricmetric.com/match/"+props.p1_to_p2[i][0]
          batting_stats.push(
            { match: <a href={match_link} target="_blank">{props.p1_to_p2[i][0]}</a>, balls: props.p1_to_p2[i][2], runs: props.p1_to_p2[i][1], dots: props.p1_to_p2[i][4],f4s: props.p1_to_p2[i][5], s6s: props.p1_to_p2[i][6],outs: props.p1_to_p2[i][3] }
          )
        }
    
    
        const batting_columns = [
          { dataField: "match", text: "Match", sort: true },
          { dataField: "balls", text: "Balls", sort: true },
          { dataField: "runs", text: "Runs", sort: true },
          { dataField: "dots", text: "Dots", sort: true },
          { dataField: "s6s", text: "Sixes", sort: true },
          { dataField: "f4s", text: "Fours", sort: true },
          { dataField: "outs", text: "Outs", sort: true }
        ];
        
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
            <BootstrapTable
              bootstrap4
              keyField="match"
              data={batting_stats}
              columns={batting_columns}
              defaultSorted={defaultSorted}
              pagination={pagination}
            />
          </div>
        );
      
}

export default Table;