import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const User = ({user}) => {
  return (
    <>
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.family}</td>
        <td>{user.socialNumber}</td>
        <td>
          <Link to={`/edit-user/${user.id}`}>
            <FaEdit />
          </Link>
          </td>
      </tr>
    </>
  );
};

export default User;
