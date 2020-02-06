/***** This component is a child of <App />. Responsible for displaying the selected query
 *     when the user is navigated to localhost:3000/home. Also allows for the ability to 
 *     change the query with a drop down box HTML element.     *****/

import React, { Component } from "react";

/***** Global Variable *****/
let names = [];     // Storage for state variable spectra{} mapping

class FileUploadApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.AppState.counter,
      spectra: this.props.AppState.spectra,
      query: this.props.AppState.query
    };
  };

  render() {
    let content = <h2>Please Upload Files</h2>;
    let options = undefined;

    // If files > 0 - and - length of names of files > 0
    if (this.state.counter > 0 && Object.keys(this.state.spectra).length > 0) {
      // Title that gets rendered based on query selection
      content = (
        <h2>Query: {Object.keys(this.state.spectra)[this.state.query]}</h2>
      );

      // Names of files
      names = Object.keys(this.state.spectra);
      options = names.map((name, i) => {
        return (
          <option key={i} value={i}>
            {" "}
            {name}{" "}
          </option>
        );
      });
    }
    return (
      <div>
        <div id="queryDiv">
          <p>{content}</p>
        </div>
          <div id="selectDiv">
            {' '}
            <select id='select-app' onChange={this.props.handleQuery}>
              <option selected disabled>Select Query</option>
              {options}
            </select>
          </div>
        
      </div>
    );
  }
}

export default FileUploadApp;
