import React, { Component } from 'react';

import Welcome from 'components/Welcome';
import ButtonExample from 'components/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
         <div>
            <Welcome />
            <ButtonExample />
         </div>
	</MuiThemeProvider>

    );
  }
}

export default App;