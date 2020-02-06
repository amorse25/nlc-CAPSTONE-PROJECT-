/***** This component is a child of <App />. Responsible for creating graphs and
 *     displaying the similarity scores for each IR spectra against the chosen query.
 *     Completes FR.2  
 * *****/

import React, { Component } from "react";
import Overlay from "./Overlay.js";
import { calculateScore } from "../../HitList";

/***** Global Variables *****/
var names = [];     // Store the name of chosen query
var scores = [];    // Store the values returned from calculateScore()

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.AppState.counter,
      spectra: this.props.AppState.spectra,
      query: this.props.AppState.query,
      retList1: this.props.AppState.retList1
    };
    this.makeGraph = this.makeGraph.bind(this);     // Binded function for making graphs
  }

  /***** Function responsible for closing an opened graph element *****/
  exitResultItem = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    let liElement = document.querySelector(`.viewTitleList > ul > #l_${i}`);
    liElement.classList.toggle("toggleGraph");
  };

  /***** Function responsible for creating a graph element *****/
  makeGraph = i => {
    let e = document.querySelector(`.viewTitleList > ul > li > #g_${i}`);
    let e2 = document.querySelector(`.viewTitleList > ul > #l_${i}`);
    e2.classList.toggle("toggleGreen");
    e.classList.toggle("toggleGraph");
  };

  /***** Function to prevent default action of clicking a graph element *****/
  handleDivClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    var hitList = undefined;

    // If there are files - and - list of names > 0 - and - there is a query - and - there are modified nlc values
    if (
      this.props.AppState.counter > 0 &&
      Object.keys(this.props.AppState.spectra).length > 0 &&
      this.props.AppState.query !== undefined &&
      this.state.retList1.length > 0
    ) {
      // Call calculateScore ("Similarity Score algorithm")
      scores = calculateScore(
        this.props.AppState.retList1,
        this.props.AppState.spectra,
        this.props.AppState.query
      );
      names = Object.keys(this.props.AppState.spectra);
      var query = names[this.props.AppState.query];

      // Graph data sets
      var modGraphValues;
      var graphValues;
      modGraphValues = this.props.AppState.retList1;
      graphValues = Object.keys(this.props.AppState.spectra).map(
        k => this.props.AppState.spectra[k]
      );
      hitList = (
        <ul id='graphsList'>
          {scores.map((score, i) => {
            if (score[0] === 1 || i > 40 || !this.props.AppState.query) {     // Set i > n to determine how many results render on the hitlist
              return undefined;
            } else {
              let key = score[2];
              let keyName = score[1];
              var data4 = modGraphValues[this.props.AppState.query];
              var data3 = modGraphValues[key];
              var data2 = graphValues[this.props.AppState.query];
              var data1 = graphValues[key];
              return (
                <li
                  key={i}
                  id={`l_${i}`}
                  onClick={() => this.makeGraph(i.toString())}
                  
                >
                  {score[1].split(".")[0]} :{" "}
                  {(score[0] * 100).toPrecision(4) + "%"}
                  <div
                    className={"exitResultItem"}
                    onClick={e => this.exitResultItem(e, i)}
                  >
                    x
                  </div>
                  <div
                    key={i}
                    className={"toggleGraph"}
                    id={`g_${i}`}
                    onClick={e => this.handleDivClick(e)}
                  >
                    <p />
                    <Overlay
                      keyId={i}
                      makeGraph={this.makeGraph}
                      name={keyName}
                      query={query}
                      data1={data1}
                      data2={data2}
                      data3={data3}
                      data4={data4}
                    />
                  </div>
                </li>
              );
            }
          })}
        </ul>
      );
    }
    return <div class="viewTitleList">{hitList}</div>;
  }
}

export default Results;
