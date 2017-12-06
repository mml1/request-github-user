// React related
import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme related
import { shallow } from 'enzyme';
import 'jest-enzyme';

// Components to be tested: GitHubRequest
import GitHubRequest from '../js/githubRequest';

describe( '< GitHubRequest / >', () => {

    it('gitHubRequest contains requestUrl', () => {
        const user = 'mml1'
        const requestUrl = 'https://api.github.com/users/${user}'
        const wrapper = shallow(<GitHubRequest />);        expect(wrapper.contains(requestUrl)).toBe(true)
	});

    // it('GitHubRequest contains json', () => {
    //     // const user = 'mml1'
    //     // const wrapper = shallow(<GitHubRequest />);        expect(wrapper).toBe(true)
	// });
});
