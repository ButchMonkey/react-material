import 'babel-polyfill';
import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 


import App from 'container/App';

document.addEventListener('DOMContentLoaded', () => {
	
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
  
  injectTapEventPlugin();
  ReactDOM.render(<App />, el);

});
