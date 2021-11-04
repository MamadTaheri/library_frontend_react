import React, { useContext, useState } from "react";
import { FaStamp, FaUpload } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { Select, Button } from "antd";
import "antd/dist/antd.css";

import { libraryContext } from "../App";
import axios from "axios";

const { Option } = Select;

const BookExport = () => {

  const {getBooksFromServer} = useContext(libraryContext);
  
  const [userId, setUserId] = useState(null);
  const [bookId, setBookId] = useState(null);

  const history = useHistory();

  const { users, books } = useContext(libraryContext);

  const availableBooks = books.filter(book => book.amanat_status === 0 );

  const userSelectChangeHandler = value => setUserId(value); 

  const bookSelectChangeHandler = value => setBookId(value);

  const submitHandler = () => {
    const data = [bookId, userId]
    axios.post("http://localhost:8085/api/bookout", data)
    .then(response => {
      getBooksFromServer();
      history.push("/");
    })
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div></div>
      </div>
      <br />
      <h3 className="text-primary">
        <FaUpload className="ml-3" />
        امانت دادن کتاب
      </h3>
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-md-4">
          <h5>انتخاب کاربر</h5>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="انتخاب کاربر"
            optionFilterProp="children"
            size="large"
            onChange={userSelectChangeHandler}
          >
            {users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.name} {user.family}
              </Option>
            ))}
          </Select>
        </div>
        <div className="col-md-8">
          <h5>انتخاب کتاب</h5>
          <Select
            showSearch
            style={{ width: 500, textAlign: "right" }}
            placeholder="انتخاب کتاب"
            optionFilterProp="children"
            size="large"
            onChange={bookSelectChangeHandler}
          >
            {availableBooks.map((book) => (
              <Option
                key={book.id}
                value={book.id}
                style={{ textAlign: "right" }}
              >
                {" " + book.name} -{" " + book.author} -{" " + book.category} -
                {" " + book.publish_year}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <Button type="primary" shape="round" icon={<FaStamp/>} size="large" block onClick={submitHandler}>
            ثبت در دیتابیس
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookExport;
