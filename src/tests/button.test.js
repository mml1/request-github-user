// React related
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

// Enzyme related
import { shallow } from 'enzyme';
import 'jest-enzyme';

// Components to be tested
import Button from '../js/button';

describe( '< Button / >', () => {

	it('button contains ', () => {
        const wrapper = shallow(<Button />);

	});

});
