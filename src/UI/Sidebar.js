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
        <Link to="/users">
          <li>
            <FaAddressBook className="ml-3" />
            <span>کاربران</span>
          </li>
        </Link>
        <li>
          <FaBookOpen className="ml-3" />
          <span>کتابها</span>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
