
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-10 main">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/balances" component={Dashboard} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
