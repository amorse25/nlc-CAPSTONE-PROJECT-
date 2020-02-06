/***** This component is rendered upon visiting localhost:3000/home. Responsible for the ability 
 *     to select a query from uploaded files, display graphs, and display similarity score.  *****/

import React, { Component } from "react";
import "./App.css";
import Results from "./Results";
import FileUploadApp from "./FileUploadApp";
import { calculateScore } from "../../HitList";
import Footer from '../Footer';
import Button from 'react-bootstrap/Button'

var stateObj = require("../../AppState");     // Import state store
let Papa = require("papaparse/papaparse.min.js");     // Import PapaParse file parser

/***** Global Variable *****/
var names = [];     // Used for file download
var scores = [];    // Store the values returned from calculateScore()

/*****  UploadPage that renders upon visiting localhost:3000/home *****/
class App extends Component {
  constructor(props) {
    super(props);

    // Set state based on values in the store
    const stateSetter = stateObj.fetchData();
    this.state = {
      data: {
        counter: stateSetter.counter,
        spectra: stateSetter.spectra,
        retList1: stateSetter.retList1,
        query: stateSetter.query
      }
    };
    this.handleQuery = this.handleQuery.bind(this);     // Binded function call for handling query
    this.routeToHome = this.routeToHome.bind(this);
    
  };

  /***** Executed upon every instance <App /> component mounts.
  /*     Fetch state values from inside the store and set state *****/
  componentDidMount = () => {
    document.getElementById('ResultsButton').disabled = true;
    const stateSetter = stateObj.fetchData();
    this.setState({
      data: stateSetter
    });
    this.enableButtons();
  };

  /***** Function to determine if saving results is a valid option *****/
  enableButtons = () => {
    const stateSetter = stateObj.fetchData();
    if(stateSetter.counter > 0) {
      document.getElementById('ResultsButton').disabled = false;
    }
  }

  /***** Executed upon every instance <App /> component updates.
  /*     Send data to the store (only initiated for when a query change occurs) *****/
  componentDidUpdate = () => {
    stateObj.setData(this.state.data);
  };

  /***** Function to route back to upload files page (home) *****/
  routeToHome() {
		let path = `/`;
		this.props.history.push(path);
	}

  /***** Function to allow local download to machine *****/
  download = (filename, text) => {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:application,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
  };

  /***** Function to save results as a csv file *****/
  exportResultsToSave = () => {
    var exportResults = false;

    // Check that NLC has been ran before allowing the ability to save results
    if(this.state.data.retList1.length > 0) {
      exportResults = true;
    } 
    if(exportResults === true) {
      scores = calculateScore(
        this.state.data.retList1,
        this.state.data.spectra,
        this.state.data.query
      );
      names = Object.keys(this.state.data.spectra);
      var query = names[this.state.data.query];
      var csv = Papa.unparse({
        "fields": ["Score", "Filename"],
        "data" : scores
      });
      this.download(`${query}`, csv);
    } else {
      document.getElementById("ResultsButton").disabled = true;
    }
    
  };

  /***** Function to handle a query selection by the user. Triggered by an event click 
   *     found inside <FileUploadApp />.     *****/
  handleQuery = e => {
    this.setState({
      data: {
        query: e.target.value,
        counter: this.state.data.counter,
        spectra: this.state.data.spectra,
        retList1: this.state.data.retList1
      }
    });
  };

  render() {
    return (
      <div className="App">
        <body>
          <div id="mainBody">
          <div className='row justify-content-right'>
            <div>
							<Button id={'HomeButton'} variant="info" onClick={this.routeToHome}> Home </Button>
              {' '}
							<Button id='ResultsButton' variant="info" onClick={this.exportResultsToSave}> Save Results </Button>
            </div>
          </div>
            <FileUploadApp
              AppState={this.state.data}
              handleQuery={this.handleQuery}
              key={
                parseInt(this.state.data.query) +
                parseInt(this.state.data.counter)
              }
            />
            
          </div>
          <div id='resultsSection'>
          <Results
            AppState={this.state.data}
            key={
              parseInt(this.state.data.query) +
              parseInt(this.state.data.counter)
            }
            addGraph={this.addGraph}
          />

          
          </div>
          
        <Footer></Footer>
        </body>
      </div>
    );
  }
}

export default App;
