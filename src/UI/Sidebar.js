import React from "react";

import { FaAddressBook, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Link to="/">
        <h4>داشبورد</h4>
      </Link>
      <br />
      <hr className="bg-white" />
      <ul>
        <li>
          <Link to="/users">
            <FaAddressBook className="ml-3" />
            <span>کاربران</span>
          </Link>
        </li>
        <li>
          <Link to="/books">
            <FaBookOpen className="ml-3" />
            <span>کتابها</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
