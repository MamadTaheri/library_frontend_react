import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({book}) => {
  return (
    <>
      <tr>
        <th scope="row">{book.id}</th>
        <td>{book.name}</td>
        <td>{book.category}</td>
        <td>{book.author}</td>
        <td>{book.publish_year}</td>
        <td>
          <Link to={`/edit-book/${book.id}`}>
            <FaEdit />
          </Link>
          </td>
      </tr>
    </>
  );
};

export default Book;
