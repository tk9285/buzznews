import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from './Components/routes'

class App extends React.Component {
  render() {
    return (
      <Router history={History}>
        <div>
          <Route exact path="/" component={Routes} {...this.props} />
        </div>
      </Router>
    );
  }
}

export default App;
