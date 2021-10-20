import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Sidebar from "./UI/Sidebar";

const App = () => {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  const usersUrl = "http://localhost:8085/api/users";
  const bookssUrl = "http://localhost:8085/api/books";

  useEffect(() => {
    axios
      .get(usersUrl)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));

    axios
      .get(bookssUrl)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row">
          <aside className="col-sm-2 side-bar">
            <Sidebar />
          </aside>
          <main className="col-sm-10 text-center">
            <Switch>
              <Route path="/books">
                <Books books={books} />
              </Route>
              <Route path="/users" exact>
                <Users users={users} />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
