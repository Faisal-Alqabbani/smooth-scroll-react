import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import Signin from "./pages/Singin";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Signin} />
    </Router>
  );
}

export default App;
