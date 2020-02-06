import React from 'react';
import { shallow, mount } from 'enzyme';
import UploadPage from './UploadPage';
import ReactDOM from 'react-dom';
import FileReader from './FileReader';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UploadPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('UploadPage component', () => {
    it('starts with a count of 0', () => {
    const wrapper = shallow(<UploadPage />);
    wrapper.find('hitlistButton').disabled = false;
    wrapper.find('UploadButton').disabled = false;
    const text = wrapper.find('#bar').text();
    expect(text).toEqual('0%');
  });
});

it('should send the correct data to FileReader', () => {
  const AppState = {spectra: {"hello": [1,2,3]}};
  const wrapper = shallow(<UploadPage />);
  wrapper.find('hitlistButton').disabled = false;
  wrapper.find('UploadButton').disabled = false;
  wrapper.setState({ data: AppState });

  expect(wrapper.find(FileReader).props().AppState).toBe(AppState);
})