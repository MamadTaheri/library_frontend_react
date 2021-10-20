import React from "react";
import BooksWrapper from "../components/book/BooksWrapper";

const Books = ({ books }) => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h4>کتابهای موجود و ثبت شده : </h4>
      <br />
      <br />
      <BooksWrapper books={books} />
    </div>
  );
};

export default Books;
