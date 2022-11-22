import React from "react";
import DetailBrowser from "../detailbrowse/DetailBrowse";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function detailPages() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/browse/:id">
            <DetailBrowser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default detailPages;
