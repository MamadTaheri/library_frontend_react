import React, { useState } from "react";
import moment from "jalali-moment";
import { Calendar } from "react-datepicker2";
import { FaBookOpen, FaUserAlt } from "react-icons/fa";

// images
import avatar from "../assets/images/avatar.jpg";
import spinner from "../assets/images/spinner.gif";

const Home = ({ loading, users, books }) => {
  const [date, setDate] = useState(moment());

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span>وضعیت ارتباط با سرور : </span>
          <span className={loading === "error" ? "text-danger" : ""}>
            {loading === "init" && "اولیه"}
            {loading === "loading" && (
              <img className="spinner-img" src={spinner} alt="spinner" />
            )}
            {loading === "ok" && "کلیه اطلاعات از سرور دریافت شدند"}
            {loading === "error" && "خطا در ارتباط با دیتابیس"}
          </span>
        </div>
        <img src={avatar} alt="flag" className=" img-logo" />
      </div>
      <br />
      <h3 className="text-primary"> پروژه کتابخانه </h3>
      <br />
      <br />
      <br />

      <div className="row">
        <div className="custom-card col-md-4">
          <div>
            <FaUserAlt className="dash-icons" />
          </div>
          <div className="card-body">
            <h5 className="card-title">تعداد کاربران</h5>
            <p className="card-text">
              {users.length + "  "}
              نفر
            </p>
          </div>
        </div>

        <div className="custom-card col-md-4">
          <div>
            <FaBookOpen className="dash-icons" />
          </div>
          <div className="card-body">
            <h5 className="card-title">تعداد کتابها</h5>
            <p className="card-text">
              {books.length + "  "}
              کتاب
            </p>
          </div>
        </div>

        <div className="custom-card col-md-3">
          <Calendar
            value={date}
            onChange={(date) => setDate(date)}
            isGregorian={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
