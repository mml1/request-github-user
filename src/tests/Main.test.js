// React related
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

// Enzyme related
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import 'jest-enzyme';

// Components to be tested
import Main from '../js/main';
import SearchBox from '../js/searchBox';
import Results from '../js/results';


describe( '< Main / >', () => {
    const div = document.createElement('div');

	it('renders without crashing', () => {
		ReactDOM.render( < Main / > , div);
	});

	it('main contains searchBox', () => {
        const wrapper = shallow(<Main />);
        const searchField = <SearchBox />;
        expect(wrapper).toContainReact(searchField);

	});
    it('main contains results component', () => {
        const wrapper = shallow(<Main />);
        const results = <Results />;
        expect(wrapper).toContainReact(results);
	});
});
