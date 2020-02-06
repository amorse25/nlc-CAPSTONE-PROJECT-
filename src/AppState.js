/***** This module is responsible for storing state on a global level. It is acting as a simple
 *     state storage facility (store) similar to Redux. This is considered to be the store of the 
 *     whole application for its state variables and is accessible by any component.        *****/

/***** Global Variables *****/
var stateObj = {};      // Object to store exported functions
var dataArr = [];       // Array to hold data sent from components

/***** Function responsible for storing state *****/
stateObj.setData = data => {
  dataArr = data;
};

/***** Function responsible for retreiving state *****/
stateObj.fetchData = () => {
  return dataArr;
};

/***** Function responsible for clearing state *****/
stateObj.clearData = () => {
  dataArr = {
    counter: 0,
    spectra: {},
    retList1: [],
    query: "0"
  };
};

module.exports = stateObj;
