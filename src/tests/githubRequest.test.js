// React related
import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme related
import { shallow } from 'enzyme';
import 'jest-enzyme';

// Components to be tested: GitHubRequest
import GitHubRequest from '../js/githubRequest';

describe( '< GitHubRequest / >', () => {

    it('results contains GitHubRequest component', () => {
        const wrapper = shallow(<GitHubRequest />);
        expect(wrapper).toContainReact("");
	});
});
