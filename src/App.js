import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Employee from "./components/Employee/Index";
import Counter from "./components/Counter/Index";
import Home from "./components/Home/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </Router>
  );
}

export default App;
