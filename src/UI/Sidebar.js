import React from "react";

import { FaAddressBook, FaBookOpen } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <h4>داشبورد</h4>
      <br />
      <hr className="bg-white" />
      <ul>
        <li>
          <FaAddressBook className="ml-3" />
          <span>کاربران</span>
        </li>
        <li>
          <FaBookOpen className="ml-3" />
          <span>کتابها</span>
        </li>
         
      </ul>
    </>
  );
};

export default Sidebar;
