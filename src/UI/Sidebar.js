import React from "react";

import { FaAddressBook, FaBookOpen, FaDownload, FaUpload } from "react-icons/fa";
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
            <span>لیست کاربران</span>
          </Link>
        </li>
        <li>
          <Link to="/books">
            <FaBookOpen className="ml-3" />
            <span>لیست کتابها</span>
          </Link>
        </li>
        <li>
          <Link to="/bookout">
            <FaUpload className="ml-3" />
            <span>امانت کتاب</span>
          </Link>
        </li>
        <li>
          <Link to="/bookin">
            <FaDownload className="ml-3" />
            <span>بازگشت کتاب</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
