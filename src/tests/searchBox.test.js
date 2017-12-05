// React related
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

// Enzyme related
import { mount } from 'enzyme';
import 'jest-enzyme';

// Components to be tested
import SearchBox from '../js/searchBox';
import Button from '../js/button';


describe( '< SearchBox / >', () => {

	it('searchBox contains button component', () => {
        const wrapper = mount(<SearchBox />);
        const button = <Button id = "search-btn" url="https://google.com"> Search </Button>;
        expect(wrapper).toContainReact(button);

	});

});
