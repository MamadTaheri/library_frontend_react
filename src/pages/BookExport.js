import React, { useContext, useState } from "react";
import axios from "axios";
import { FaStamp, FaUpload } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { Select, Button, Row, Col, Divider } from "antd";
import { libraryContext } from "../App";
import "antd/dist/antd.css";

const { Option } = Select;

const BookExport = () => {

  const [userId, setUserId] = useState(null);
  const [bookId, setBookId] = useState(null);
  const history = useHistory();
  const { users, books, getBooksFromServer } = useContext(libraryContext);

  const availableBooks = books.filter((book) => book.amanat_status === 0);

  const userSelectChangeHandler = (value) => setUserId(value);

  const bookSelectChangeHandler = (value) => setBookId(value);

  const submitHandler = () => {
    const data = [bookId, userId];
    axios.post("http://localhost:8085/api/bookout", data).then((response) => {
      getBooksFromServer();
      history.push("/");
    });
  };

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

      <Row>
        <Col span={8}>
          <Divider orientation="center">انتخاب کاربر</Divider>
          <Select
            showSearch
            style={{ width: "100%", textAlign: "right" }}
            placeholder="انتخاب کاربر"
            optionFilterProp="children"
            size="large"
            onChange={userSelectChangeHandler}
          >
            {users.map((user) => (
              <Option key={user.id} value={user.id} style={{ textAlign: "right" }}>
                {user.name} {user.family}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={2}></Col>
        <Col span={14}>
          <Divider orientation="center">انتخاب کتاب</Divider>
          <Select
            showSearch
            style={{ width: "100%", textAlign: "right" }}
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
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={12} className="mt-5">
          <Button
            type="primary"
            shape="round"
            icon={<FaStamp />}
            size="large"
            block
            onClick={submitHandler}
          >
            ثبت در دیتابیس
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default BookExport;
