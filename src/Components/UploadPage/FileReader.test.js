import React from 'react';
import { shallow } from 'enzyme';
import FileReader from './FileReader';


describe('UploadPage component', () => {
    it('starts with a count of 0', () => {
      const wrapper = shallow(<FileReader />);
      const text = wrapper.find('span').text();
      wrapper.find('hitlistButton').disabled = false;
      expect(text).toEqual('Choose your CSV Files');
    });
  });