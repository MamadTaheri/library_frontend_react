import React from "react";

import BookForm from "../components/book/BookForm";

const EditBook = () => {
  return (
    <div className="container col-md-6">
      <br />
      <br />
      <br />
      <br />
      <h1>ویرایش کتاب </h1>
      <br />
      <BookForm type="edit" />
    </div>
  );
};

export default EditBook;
