import React from "react";
import Book from "./Book";

const BooksWrapper = ({ books }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">آی دی</th>
            <th scope="col">نام کتاب</th>
            <th scope="col">دسته بندی </th>
            <th scope="col"> نویسنده</th>
            <th scope="col"> سال انتشار</th>
          </tr>
        </thead>
        <tbody>
            {
                books.map(book => <Book key={book.id} book={book} />)
            }
          
           
        </tbody>
      </table>
    </>
  );
};

export default BooksWrapper;
