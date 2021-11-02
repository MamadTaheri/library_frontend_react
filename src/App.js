import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Sidebar from "./UI/Sidebar";
import swal from "sweetalert";
import ExportBook from "./pages/ExportBook";

export const libraryContext = createContext();

const App = () => {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState("init");

  const bookssUrl = "http://localhost:8085/api/books";

  useEffect(() => {
    setLoading("loading");
    getUsersFromServer();
    getBooksFromServer();
  }, []);

  const getUsersFromServer = () => {
    const usersUrl = "http://localhost:8085/api/users";
    axios
      .get(usersUrl)
      .then((response) => {
        setLoading("ok");
        setUsers(response.data);
      })
      .catch((error) => {
        setLoading("error");
        swal({
          title: "خطای دریافت لیست کاربران",
          text: "دریافت اطلاعات از دیتابیس با مشکل مواجه شد",
          icon: "error",
          button: "متوجه شدم",
        });
      });
  };

  const getBooksFromServer = () => {
    axios
      .get(bookssUrl)
      .then((response) => {
        setLoading("ok");
        setBooks(response.data);
      })
      .catch((error) => {
        setLoading("error");
        swal({
          title: "خطای دریافت لیست کتابها",
          text: "دریافت اطلاعات از دیتابیس با مشکل مواجه شد",
          icon: "error",
          button: "متوجه شدم",
        });
      });
  };

  const contextValues ={
    getUsersFromServer: getUsersFromServer,
    getBooksFromServer: getBooksFromServer,
    users: users,
    books: books
  }

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row">
          <aside className=" side-bar">
            <Sidebar />
          </aside>
          <main className="col-sm-10 text-center main-content">
            <libraryContext.Provider value={contextValues}>
              <Switch>
                <Route path="/edit-user/:userId" exact>
                  <EditUser />
                </Route>
                <Route path="/exportbook" exact>
                  <ExportBook />
                </Route>
                <Route path="/create-user" exact>
                  <CreateUser />
                </Route>
                <Route path="/edit-book/:bookId" exact>
                  <EditBook />
                </Route>
                <Route path="/create-book" exact>
                  <CreateBook />
                </Route>
                <Route path="/books">
                  <Books books={books} />
                </Route>
                <Route path="/users" exact>
                  <Users users={users} />
                </Route>
                <Route path="/" exact>
                  <Home loading={loading} users={users} books={books} />
                </Route>
              </Switch>
            </libraryContext.Provider>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
