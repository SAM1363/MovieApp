import React, { Component } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Cart from './containers/Cart';


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={(Home)} />
            <Route exact path="/about" component={(About)}/>
            <Route exact path="/cart" component={(Cart)}/>
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
