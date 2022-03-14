import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css"
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const App = () => {
  return (
    <div className="main-div">
      <Router basename="app">
        <header>
          <Link id="page1" to="page1">الصفحة الرئيسية</Link>&nbsp;|&nbsp;
          <Link id="page2" to="page2">معلومات شخصية</Link>

          {/* OR   */}

          {/* <a id="page2" href="/page2">Page 2</a> */}

        </header>
        <Switch>
          <Route path="/page1"><Page1 /></Route>
          <Route path="/page2"><Page2 /></Route>
          <Route path="/"><Page1 /></Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
