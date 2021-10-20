import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./UI/Sidebar";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-sm-2 side-bar">
          <Sidebar />
        </aside>
        <main className="col-sm-10 text-center">
          <BrowserRouter>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
};

export default App;
