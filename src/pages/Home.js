import React from "react";
import { FaUserAlt } from "react-icons/fa";

// images
import flagImage from "../assets/images/flag.jpg";
import spinner from "../assets/images/spinner.gif";

const Home = ({ loading, users, books }) => {

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
        <img src={flagImage} alt="flag" className="rounded img-logo" />
      </div>
      <br />
      <h1>به پروژه کتابخانه خوش آمدید</h1>
      <br />
      <br />
      <br />

      <div className="row">
          <div className="card custom-card col-md-2">
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
          <div className="card custom-card col-md-2">
            <div>
              <FaUserAlt className="dash-icons" />
            </div>
            <div className="card-body">
              <h5 className="card-title">تعداد کتابها</h5>
              <p className="card-text">
                {books.length + "  "}
                کتاب
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
