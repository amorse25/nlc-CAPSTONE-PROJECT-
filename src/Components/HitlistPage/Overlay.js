/***** This component is a child of <Results />. It is responsible for setting the graph data points. 
 *     This component uses Plotly.js (React Version) to display all graphic visuals.
 *     Completes FR.3, 3.1, 3.3, 3.4
 *  *****/

import React, { Component } from "react";
import Plot from "react-plotly.js";

/***** Global Variables *****/
let xVar;     // X-axis values (absorbance)
let yVar;     // Y-axis values (wavelength)
let line1 = { x: [], y: [] };     // Holds key values for original
let line2 = { x: [], y: [] };     // Holds query values for original 
let line3 = { x: [], y: [] };     // Holds key values for modified (NLC)
let line4 = { x: [], y: [] };     // Holds query values for modified (NLC)

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: {
        x: [],
        y: []
      },
      line2: {
        x: [],
        y: []
      },
      line3: {
        x: [],
        y: []
      },
      line4: {
        x: [],
        y: []
      },
      g_id: 0
    };
  }

  /***** Is this still being used? *****/
  handleWrapperClick = e => {
    e.preventDefault(); // Let's stop this event.
    e.stopPropagation(); // Really this time.
  };

  /***** Function responsible for setting each line's data points *****/
  getGraphValues = () => {

    // State variable call that will hold data points
    line1 = { x: [], y: [] };     
    line2 = { x: [], y: [] };     
    line3 = { x: [], y: [] };     
    line4 = { x: [], y: [] };

    let firstIndex;     // Used to determine starting index
    let minDiff;        // Used to determine difference between line x and line y
    
    // Determine where the larger of the two lines starts
    let diff1_2Start = this.props.data2[9][0] - this.props.data1[9][0];

    // Determine where the larger of the two lines ends
    let diff1_2End = this.props.data2[this.props.data2.length -10][0] - this.props.data1[this.props.data1.length -10][0];

    // Determine where the larger of the two lines starts
    let diff3_4Start = this.props.data4[0][0] - this.props.data3[0][0];

    // Determine where the larger of the two lines ends
    let diff3_4End = this.props.data4[this.props.data4.length - 1][0] - this.props.data3[this.props.data3.length - 1][0];


    /***** Line 75 - 275 is checking if any line (query or selected file(file wanted to compare against query)) is not aligned with eachother.
     *     All check each possible position for any line between swapping from query to selected file. This process could very well be more
     *     efficient than how it is now. This was one of the last things implemented and just wanted a working solution.       *****/

    //if data2 starts and ends at a larger value than data1
    if(Math.sign(diff1_2Start) === 1 && Math.sign(diff1_2End) === 1) {
      firstIndex = 9;
      minDiff = Math.abs(this.props.data2[9][0] - this.props.data1[9][0]);
      while (Math.abs(this.props.data2[9][0] - this.props.data1[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data2[9][0] - this.props.data1[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = firstIndex; k < this.props.data1.length - 9; k++) {
        xVar = this.props.data1[k][0];
        yVar = this.props.data1[k][1];
        line1.x.push(xVar);
        line1.y.push(yVar);
      }
      for (let k = 9; k < this.props.data2.length - 9 - firstIndex; k++) {
        xVar = this.props.data2[k][0];
        yVar = this.props.data2[k][1];
        line2.x.push(xVar);
        line2.y.push(yVar);
      }
    }
    //if data1 starts and ends at a larger value than data2
    else if(Math.sign(diff1_2Start) === -1 && Math.sign(diff1_2End) === -1){
      firstIndex = 9;
      minDiff = Math.abs(this.props.data2[9][0] - this.props.data1[9][0]);
      while (Math.abs(this.props.data1[9][0] - this.props.data2[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data1[9][0] - this.props.data2[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = 9; k < this.props.data1.length - 9 - firstIndex; k++) {
        xVar = this.props.data1[k][0];
        yVar = this.props.data1[k][1];
        line1.x.push(xVar);
        line1.y.push(yVar);
      }
      for (let k = firstIndex; k < this.props.data2.length - 9; k++) {
        xVar = this.props.data2[k][0];
        yVar = this.props.data2[k][1];
        line2.x.push(xVar);
        line2.y.push(yVar);
      }
    }
    //if data2 starts at a larger value but ends at a smaller value
    else if(Math.sign(diff1_2Start) === 1 && Math.sign(diff1_2End) === -1) {
      firstIndex = 9;
      minDiff = Math.abs(this.props.data2[9][0] - this.props.data1[9][0]);
      while (Math.abs(this.props.data2[9][0] - this.props.data1[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data2[9][0] - this.props.data1[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = firstIndex; k < this.props.data1.length - 9 - firstIndex; k++) {
        xVar = this.props.data1[k][0];
        yVar = this.props.data1[k][1];
        line1.x.push(xVar);
        line1.y.push(yVar);
      }
      for (let k = 9; k < this.props.data2.length - 9; k++) {
        xVar = this.props.data2[k][0];
        yVar = this.props.data2[k][1];
        line2.x.push(xVar);
        line2.y.push(yVar);
      }
    }
    //if data2 starts at a lower value but ends at a larger value
    else if(Math.sign(diff1_2Start) === -1 && Math.sign(diff1_2End) === 1) {
      firstIndex = 9;
      minDiff = Math.abs(this.props.data1[9][0] - this.props.data2[9][0]);
      while (Math.abs(this.props.data1[9][0] - this.props.data2[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data1[9][0] - this.props.data2[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = 9; k < this.props.data1.length - 9; k++) {
        xVar = this.props.data1[k][0];
        yVar = this.props.data1[k][1];
        line1.x.push(xVar);
        line1.y.push(yVar);
      }
      for (let k = firstIndex; k < this.props.data2.length - 9 - firstIndex; k++) {
        xVar = this.props.data2[k][0];
        yVar = this.props.data2[k][1];
        line2.x.push(xVar);
        line2.y.push(yVar);
      }
    }
    else {
      for (let k = 9; k < this.props.data1.length - 9; k++) {
        xVar = this.props.data1[k][0];
        yVar = this.props.data1[k][1];
        line1.x.push(xVar);
        line1.y.push(yVar);
      }
      for (let k = 9; k < this.props.data2.length - 9; k++) {
        xVar = this.props.data2[k][0];
        yVar = this.props.data2[k][1];
        line2.x.push(xVar);
        line2.y.push(yVar);
      }
    }
    //if data4 starts and ends at a larger value
    if(Math.sign(diff3_4Start) === 1 && Math.sign(diff3_4End) === 1) {
      firstIndex = 0;
      minDiff = Math.abs(this.props.data4[0][0] - this.props.data3[0][0]);
      while (Math.abs(this.props.data4[0][0] - this.props.data3[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data4[0][0] - this.props.data3[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = firstIndex; k < this.props.data3.length; k++) {
        xVar = this.props.data3[k][0];
        yVar = this.props.data3[k][1];
        line3.x.push(xVar);
        line3.y.push(yVar);
      }
      for (let k = 0; k < this.props.data4.length - firstIndex; k++) {
        xVar = this.props.data4[k][0];
        yVar = this.props.data4[k][1];
        line4.x.push(xVar);
        line4.y.push(yVar);
      }
    }
    //if data3 starts and ends at a larger value
    else if(Math.sign(diff3_4Start) === -1 && Math.sign(diff3_4End) === -1) {
      firstIndex = 0;
      minDiff = Math.abs(this.props.data4[0][0] - this.props.data3[0][0]);
      while (Math.abs(this.props.data3[0][0] - this.props.data4[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data3[0][0] - this.props.data4[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = 0; k < this.props.data3.length - firstIndex; k++) {
        xVar = this.props.data3[k][0];
        yVar = this.props.data3[k][1];
        line3.x.push(xVar);
        line3.y.push(yVar);
      }
      for (let k = firstIndex; k < this.props.data4.length; k++) {
        xVar = this.props.data4[k][0];
        yVar = this.props.data4[k][1];
        line4.x.push(xVar);
        line4.y.push(yVar);
      }
    }
    //if data4 starts at a larger value but ends at a lower value
    else if(Math.sign(diff3_4Start) === 1 && Math.sign(diff3_4End) === -1) {
      firstIndex = 0;
      minDiff = Math.abs(this.props.data4[0][0] - this.props.data3[0][0]);
      while (Math.abs(this.props.data4[0][0] - this.props.data3[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data4[0][0] - this.props.data3[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = firstIndex; k < this.props.data3.length - firstIndex; k++) {
        xVar = this.props.data3[k][0];
        yVar = this.props.data3[k][1];
        line3.x.push(xVar);
        line3.y.push(yVar);
      }
      for (let k = 0; k < this.props.data4.length; k++) {
        xVar = this.props.data4[k][0];
        yVar = this.props.data4[k][1];
        line4.x.push(xVar);
        line4.y.push(yVar);
      }
    }
    //if data4 starts at a lower value but ends at a larger value
    else if(Math.sign(diff3_4Start) === -1 && Math.sign(diff3_4End) === 1) {
      firstIndex = 0;
      minDiff = Math.abs(this.props.data4[0][0] - this.props.data3[0][0]);
      while (Math.abs(this.props.data3[0][0] - this.props.data4[firstIndex][0])<=minDiff){
        minDiff = Math.abs(this.props.data3[0][0] - this.props.data4[firstIndex][0]);
        firstIndex++;
      }
      firstIndex--;
      for (let k = 0; k < this.props.data3.length; k++) {
        xVar = this.props.data3[k][0];
        yVar = this.props.data3[k][1];
        line3.x.push(xVar);
        line3.y.push(yVar);
      }
      for (let k = firstIndex; k < this.props.data4.length - firstIndex; k++) {
        xVar = this.props.data4[k][0];
        yVar = this.props.data4[k][1];
        line4.x.push(xVar);
        line4.y.push(yVar);
      }
    }
    else {
      for (let k = 0; k < this.props.data3.length; k++) {
        xVar = this.props.data3[k][0];
        yVar = this.props.data3[k][1];
        line3.x.push(xVar);
        line3.y.push(yVar);
      }
      for (let k = 0; k < this.props.data4.length; k++) {
        xVar = this.props.data4[k][0];
        yVar = this.props.data4[k][1];
        line4.x.push(xVar);
        line4.y.push(yVar);
      }
    }
  };


  /***** Function that controls the "toggle" of expanding a graph element *****/
  togGraph = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.makeGraph(i);      // Call makeGraph(i) to create and render the graph
  };

  render() {
    var keyName = this.props.name.split(".")[0];
    var queryName = this.props.query.split(".")[0];
    var GraphTitle =
      this.props.name.split(".")[0] + " vs " + this.props.query.split(".")[0];
    this.getGraphValues();
    var dataSet = [];

    /***** Data to be sent to Plotly for graphs *****/
    dataSet = [
      {
        name: keyName,
        x: line1.x,
        y: line1.y,
        mode: "lines",
        fill: "none",
        line: { color: "rgb(255, 0, 0)", width: 0.5 }
      },
      {
        name: queryName,
        x: line2.x,
        y: line2.y,
        mode: "lines",
        fill: "tonexty",
        line: { color: "rgb(0, 0, 255)", width: 0.5 },
        fillcolor: "rgba(0, 0, 255, 0.1)"
      },
      {
        name: keyName,
        x: line3.x,
        y: line3.y,
        mode: "lines",
        fill: "none",
        xaxis: "x2",
        yaxis: "y2",
        line: { color: "rgb(255, 0, 0)", width: 0.5 }
      },
      {
        name: queryName,
        x: line4.x,
        y: line4.y,
        mode: "lines",
        fill: "tonexty",
        xaxis: "x2",
        yaxis: "y2",
        line: { color: "rgb(0, 0, 255)", width: 0.5 },
        fillcolor: "rgba(0, 0, 255, 0.1)"
      }
    ];

    return (
      <div className="wrapper">
        <div className="title">
          <a
            href=""
            className="exit"
            onClick={e => this.togGraph(e, this.props.keyId)}
          >
            -
          </a>
        </div>
        <Plot
          key={this.props.keyId}
          data={dataSet}
          layout={{
            legend: { x: 0, y: 1.3, traceorder: "normal" },
            width: window.innerWidth * 0.7,     // Adjust the width of graphs 
            height: 400,                        // Adjust the height of graphs
            title: GraphTitle,
            grid: { rows: 1, columns: 2, pattern: "independent" }
          }}
        />
      </div>
    );
  }
}

export default Overlay;