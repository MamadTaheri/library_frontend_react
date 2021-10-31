import React from "react";
import { FaUserAlt } from "react-icons/fa";

// images
import flagImage from "../assets/images/flag.jpg";
import spinner from "../assets/images/spinner.gif";

const Home = ({ loading, users }) => {

  console.log(users.length)

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span>وضعیت ارتباط با سرور : </span>
          <span className={loading === "error" && "text-danger"}>
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

    </div>
  );
};

export default Home;
