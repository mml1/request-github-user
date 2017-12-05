import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../js/main';

describe( < Main / > ), () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render( < Main / > , div);
	});

	it('main contains searchBox', () => {

	});
}
