import React from "react";

const Book = ({book}) => {
  return (
    <>
      <tr>
        <th scope="row">{book.id}</th>
        <td>{book.name}</td>
        <td>{book.category}</td>
        <td>{book.author}</td>
        <td>{book.publish_year}</td>
      </tr>
    </>
  );
};

export default Book;
