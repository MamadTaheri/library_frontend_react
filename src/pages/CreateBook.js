import React from "react";

import BookForm from "../components/book/BookForm";

const CreateBook = () => {
  return (
    <div className="container col-md-6">
      <br />
      <br />
      <br />
      <br />
      <h1>ایجاد کتاب جدید</h1>
      <br />
      <BookForm type="create" />
    </div>
  );
};

export default CreateBook;
