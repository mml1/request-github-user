// React related
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

// Enzyme related
import { shallow } from 'enzyme';
import 'jest-enzyme';

// Components to be tested
import SingleRecord from '../js/singleRecord';

describe( '< SingleRecord / >', () => {

    it('record contains ', () => {
        const wrapper = shallow(<SingleRecord />);
	});
});
