import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import BooksWrapper from "../components/book/BooksWrapper";

const Books = ({ books }) => {
  return (
    <>
      <div className="container plus-button">
        <Link to="/create-book">
          <FaPlus />
        </Link>
      </div>
      <div className="container custom-scrol">
        <h4>کتابهای موجود و ثبت شده : </h4>
        <br />
        <br />
        <BooksWrapper books={books} />
      </div>
    </>
  );
};

export default Books;
