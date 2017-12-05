// React related
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

// Enzyme related
import { shallow } from 'enzyme';
import 'jest-enzyme';

// Components to be tested

import Results from '../js/results';
import SingleRecord from '../js/singleRecord';


describe( '< Results / >', () => {

    it('results contains singleRecord component', () => {
        const wrapper = shallow(<Results />);
        const record = <SingleRecord />;
        expect(wrapper).toContainReact(record);
	});
});
