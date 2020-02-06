/***** For all tests to pass, you must comment out the following:
 * 
 *     import Plot from "react-plotly.js"; Found in Overlay.js, line 5
 * 
 *     document.getElementById('ResultsButton').disabled = true; Found in App.js, line 42
 *     document.getElementById('ResultsButton').disabled = false; Found in App.js, line 54  
 * 
 *     document.getElementById('hitlistButton').disabled = true; Found in UploadPage.js, line 42
       document.getElementById('UploadButton').disabled = true; Found in UploadPage.js, line 43
      
       Plotly has some weird bug that will fail all tests. 
       The disable button attribute cannot attach and will not enable for whatever reason. Needed more time
       to figure out why this is an issue. 
*****/


import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import FileUploadApp from './FileUploadApp';
import Results from './Results';


it('should send the correct data to FileUploadApp', () => {
  const AppState = {counter: 1};
  const wrapper = shallow(<App />);
  wrapper.find('ResultsButton').disabled = false;
  wrapper.setState({ data: AppState });

  expect(wrapper.find(FileUploadApp).props().AppState).toBe(AppState);
});

it('should send the correct data to results', () => {
  const AppState = {counter: 1, spectra: {'hello': [1,2]}, 
    query: "0", retList1: [[1,2], [2,3]]};
  const wrapper = shallow(<App />);
  wrapper.find('ResultsButton').disabled = false;
  wrapper.setState({ data: AppState });

  expect(wrapper.find(Results).props().AppState).toBe(AppState);
});

describe('FileUploadApp can change the content', () => {
  it('should change the content based on query selection', () => {
    const wrapper = mount(<FileUploadApp AppState={{}}/>);
    const text = wrapper.find('h2').text();
    
    wrapper.setProps({
      AppState: {counter: 10, query: "1", spectra: {"h": [1,2]}, retList1: [[1,2]]}
    });
    
    expect(text).toEqual('Please Upload Files');
  }); 
});