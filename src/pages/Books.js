import React from "react";
import BooksWrapper from "../components/book/BooksWrapper";

const Books = ({books}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10 p-5 text-center">
        <h4>کتابهای موجود و  ثبت شده : </h4>
        <br />
        <br />
         <BooksWrapper books={books} />
      </div>
    </div>
  );
};

export default Books;
