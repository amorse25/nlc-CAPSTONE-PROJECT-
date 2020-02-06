/***** This component is rendered upon initial visit to the web app. It is found at localhost:3000.
 *     Responsible for the ability to upload files, process files into JSON, and execute the
 *     wave transformation algorithm Normalized Local Change (NLC). It is a parent component
 *     to <FileReader /> which is the component that handles the ability to upload files. 
 *	   Completes FR.1, FR 3.2, FR.4 
 *****/

 import React, {Component} from 'react';
 import FileReader from './FileReader';
 import Footer from '../Footer';
 import FileViewArea from './FileViewArea';
 
 /*****  Global Variables *****/
 var stateObj = require('../../AppState');     // Import state store
 let Papa = require('papaparse/papaparse.min.js');     // Import PapaParse file parser
 let counter = 0;      // Holds the count regarding number of files uploaded
 let spectdict = {};     // Temporary storage for files uploaded
 let retListValues = [];     // Temporary storage for NLC transformed values
 var widthData = 0;      // Width for progress bar
 var values;     // Temporary storage for progress bar; used for duration of time left
 
 
 /*****  UploadPage that renders upon visiting localhost:3000 *****/
 class UploadPage extends Component {
	 constructor(props) {
		 super(props);
		 this.state = {
			 data: {
				 counter: 0,
				 spectra: {},
				 query: '0',
				 retList1: []
			 }
		 };
 
		 this.handleChange = this.handleChange.bind(this);     // Binded function call for hanlding file upload change
		 this.importCSV = this.importCSV.bind(this);     // Binded function call for "Upload" button
		 this.AppRef = React.createRef();      // Reference for input data
		 this.routeChange = this.routeChange.bind(this);			// Binded function for route change to hitlist
	 }
 
	 /***** Executed upon every instance <UploadPage /> component mounts.
	  /*     Reset global variables back to initial values *****/
	 componentDidMount = () => {
		 document.getElementById('hitlistButton').disabled = true;
		 document.getElementById('UploadButton').disabled = true;
		 counter = 0;
		 retListValues = [];
		 spectdict = {};
		 stateObj.clearData();     // Function within AppState.js to clear store
	 };
	 /***** Executed upon every instance <UploadPage /> component unmounts.
	  *     Send any state changes to AppState.js to set data for the store *****/
	 componentWillUnmount = () => {
		 stateObj.setData(this.state.data);      // Send data to store
	 };
 
	 /***** Function to handle route change to localhost:3000/home *****/
	 routeChange() {
		 if(this.state.data.retList1.length > 0) {
			 let path = `/hitlist`;
			 this.props.history.push(path);
		 };
	 };
 
	 /***** Executed upon the user clicking the up "Upload" button.
	  *     Uses PapaParse to convert .csv files into JSON. *****/
	 importCSV = () => {
		 const csvArray = this.AppRef.current.files;     // Holds the user selected files
		 let filesToParse = [];      // Temporary storage for parsing each individual file
									 // as PapaParse executes one file at at time
		 if (Object.keys(spectdict)) {
			 for (let i = 0; i < csvArray.length; i++) {
 
				 // If statement to check if a file has already been selected
				 // Do not send to PapaParse if it is a repeat (A repeat can only be
				 // determined based on its original file name, not the data it contains).
				 if (!(csvArray[i].name in spectdict)) {
					 filesToParse.push(csvArray[i]);
					 counter++;
				 }
			 }
		 } else {
			 for (let i = 0; i < csvArray.length; i++) {
				 filesToParse.push(csvArray[i]);
				 counter++;
			 }
		 }
		 if (filesToParse.length > 0) {
			 for (let i = 0; i < filesToParse.length; i++) {
				 if (filesToParse[i].name.split('.')[1] === 'csv') {     // If file does not end in .csv, do not parse
					 Papa.parse(filesToParse[i], {     // PapaParse call
						 complete: this.papaSetState,    // Callback for when parsing is needing to be completed
						 skipEmptyLines: true,           // Skip empty lines if the file contains any
						 error: this.CSVParseError       // Callback for when an error occurs for parsing
					 });
				 } else {
					 alert(`${filesToParse[i].name} is not a valid .csv file!`);
					 counter--;
				 }
			 }
		 }
	 };
 
	 /***** Callback function for PapaParse - complete:
	  *     Will set new state values and has if checkers for inconsistent data
	  *     such as non-numerical values within the data. Contains
	  *     the logic for the progress bar.    *****/
 
	 papaSetState = (result, file) => {
 
		 // Sorting algorithm if a user uploads a file with its first
		 // wavelength value being larger than its last. Meaning the data
		 // in the wavelength column is in descending order.
		 if (result.data[0][0] - result.data[result.data.length - 1][0] > 0) {
			 result.data.sort(function (a, b) {
				 return a[0] - b[0];
			 });
		 };
 
		 // Algorithm used to determine if any non-numerical (letters a-z & A-Z) characters are in the file.
		 // This checks for both columns (wavelength, absorbance), and will remove that
		 // index. This is needed before sending data to the NLC algorithm as NLC can only take numeric values.
		 for (let i = 0; i < result.data.length; i++) {
			 if (this.onlyLetters(result.data[i][0]) === true || this.onlyLetters(result.data[i][1]) === true) {
				 var stringToRemove = result.data[i];
				 var index = result.data.indexOf(stringToRemove);
				 result.data.splice(index, 1);
				 i--;
			 }
		 }
		 ;
		 spectdict[file.name] = result.data;     // Store into temporary global variable spectdict
		 
		 this.setState({
			 data: {
				 counter: counter,
				 spectra: spectdict,
				 query: this.state.data.query
			 }
		 });
 
		 values = Object.keys(spectdict).map(k => spectdict[k]);     // Map specdict into array; will be used for progress bar
 
		 //Implementation for Progress Bar
		 if (values.length !== counter) {
			 var elem = document.getElementById('bar');
			 var elem1 = document.getElementById('progress');
			 elem.style.display = 'block';
			 elem1.style.display = 'inline-block';
			 widthData = (values.length / counter) * 100;      // Amount to increase the bar by
			 elem.style.width = widthData + '%';               // Displays current numeric value in the bar
			 elem.innerHTML = (widthData * 1).toPrecision(2) + '%';
		 } else {      // Progress bar is done (All Files have been uploaded and NLC is finished)
			 document.getElementById('hitlistButton').disabled = false;
			 var removeBar = document.getElementById('bar');
			 widthData = (values.length / counter) * 100;
			 removeBar.style.width = widthData + '%';
			 removeBar.innerHTML = (widthData * 1).toPrecision(3) + '%';
			 removeBar.style.display = 'none';     // Remove from page
		 }
		 ;
 
		 /***** Call the NLC algorithm, will execute n times, where n is the amount of
		  *     files uplaoded by the user.       *****/
		 let sRange = 9;
		 let floorMult = 0.3;
		 let raw;
		 raw = result.data;      // Holds iteration of n to pass nth file data into the NLC
		 const array = raw;
 
		 // Call for NLC(array = PapaParsed data, sRange = static range, floorMult = static floor multiplier)
		 this.nlc(array, sRange, floorMult);
		 this.handleNLCState();      // Call for handling state (retList1) upon completion of the NLC
	 };
 
	 /***** Function to check if any non-numerical characters are in the file *****/
	 onlyLetters = (str) => {
		 if (str.match('^[A-z]+$')) {     // Regex expression checking for letters a-z and A-Z
			 return true;
		 }
		 ;
	 };
 
	 /***** Callback function for error handling in PapaParse *****/
	 CSVParseError = function (err, csvfile) {
		 if (csvfile === undefined) {
			 alert(
				 'Unable to process CSV file, please verify the file can be accessed and try again. Error reason was: ' +
				 err.code
			 );
		 }
	 };
 
	 // Event that fires when files are uploaded (before actually clicking upload)
	 // Could be very useful in any later implementation
	 handleChange = event => {
		 document.getElementById('UploadButton').disabled = false;
	 };
 
	 /***** Function that prints the current query to the user.
	  *     Query in <UploadPage /> will always be statically set
	  *     to the first file in the list.    *****/
	 printQuery = () => {
		 var content;
		 // If there are filenames - and - the query is selected (Statically set to "0")
		 if (
			 Object.keys(this.state.data.spectra).length > 0 &&
			 this.state.data.query !== undefined
		 ) {
			 content = (
				 <p>
					 Query: {Object.keys(this.state.data.spectra)[this.state.data.query]}
				 </p>
			 );
		 }
		 return content;
	 };
 
	 /***** NLC algorithm *****/
	 nlc = (raw, sRange, floorMult) => {

		 var retList = [];
 
		 /* NLC algorithm has been removed */
		 for (let k = 0; k < raw.length; k++) {
			 let result = [parseFloat(raw[k][0]), parseFloat(raw[k][1])];
			retList.push(result);
		 }
		 retListValues.push(retList);      // Store retList values into global storage
	 };
 
	 /***** Function to handle state when a file is modified with the NLC algorithm *****/
	 handleNLCState = () => {
		 this.setState({
			 data: {
				 counter: this.state.data.counter,
				 spectra: this.state.data.spectra,
				 query: this.state.data.query,
				 retList1: retListValues
			 }
		 });
	 };
 
	 render() {
		 return (
			 <div className="App">
				 <body>
				 <div id='mainBody'>
					 {this.printQuery()}
					 <FileReader
						 AppState={this.state.data}
						 AppRef={this.AppRef}
						 importCSV={this.importCSV}
						 handleChange={this.handleChange}
						 routeChange={this.routeChange}
					 />
					 <div id='progressBar'>
						 <div id="progress">
							 <div id="bar">0%</div>
						 </div>
					 </div>
				 </div>
				 <div id='ViewArea'>
					 <FileViewArea 
					 AppState={this.state.data}
					 key={this.state.data.counter}
					 />
				 </div>
				 <Footer></Footer>
				 </body>
			 </div>
		 );
	 }
 }
 
 export default UploadPage;