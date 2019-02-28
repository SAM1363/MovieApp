import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter} from 'react-router-dom';
import MovieBrowser from './modules/movie-browser/movie-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <MovieBrowser />
      </MuiThemeProvider>
      {/* <BrowserRouter>
         <Switch>
            <Route exact path="/" component={()} />
            <Route exact path="/about" component={()}/>
            <Route exact path="/Collection" component={()}/>
          </Switch>
      </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
