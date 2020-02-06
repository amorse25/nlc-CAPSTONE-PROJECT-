import React from 'react';
import { shallow } from 'enzyme';
import UploadPage from './UploadPage';


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<UploadPage />);
    });
});

