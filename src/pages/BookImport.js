import React, { useContext, useState } from "react";
import axios from "axios";
import { FaDownload, FaStamp } from "react-icons/fa";
import { Button, Col, Divider, Row, Select } from "antd";
import { libraryContext } from "../App";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const { Option } = Select;

const BookImport = () => {

  const { books, getBooksFromServer } = useContext(libraryContext);
  const [bookId, setBookId] = useState(null);
  const history = useHistory();

  const bookSelectChangeHandler = (value) => setBookId(value);

  const amanatBooks = books.filter((book) => book.amanat_status === 1);

  const submitHandler = () => {
    const data = [bookId];
    axios.post("http://localhost:8085/api/bookin", data).then((response) => {
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
        <FaDownload className="ml-3" />
        بازگشت کتاب
      </h3>
      <br />
      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="center">انتخاب کتاب</Divider>
        </Col>
        <Col span={24}>
          <Select
            showSearch
            style={{ width: "100%", textAlign: "right" }}
            placeholder="انتخاب کتاب"
            optionFilterProp="children"
            size="large"
            onChange={bookSelectChangeHandler}
          >
            {amanatBooks.map((book) => (
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

export default BookImport;
