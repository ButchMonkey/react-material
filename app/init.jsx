import 'babel-polyfill';
import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941


import RouteController from 'container/RouteController';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {

	const el = document.createElement('div');
	el.id = 'app';
	document.body.appendChild(el);

	// Inject Meta info for mobile devices
	const meta=document.createElement('meta');
	meta.name='viewport';
	meta.content='width=device-width, initial-scale=1.0';

	document.getElementsByTagName('head')[0].appendChild(meta);

	ReactDOM.render(
		<RouteController />
	, el);

});