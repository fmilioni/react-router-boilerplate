import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/page1">
              Page 1
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/page2">
              Page 2
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
