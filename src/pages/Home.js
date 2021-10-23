import React from "react";

// images
import flagImage from "../assets/images/flag.jpg";
import spinner from '../assets/images/spinner.gif'

const Home = ({loading}) => {

  return (
    <div className="container">
      <div className="">
         <span>وضعیت ارتباط با سرور : </span>
         <span className={loading === "error" && "text-danger"}>
           {loading === "init" && "اولیه"}
           {loading === "loading" && <img className="spinner-img" src={spinner} alt="spinner" />}
           {loading === "ok" && "کلیه اطلاعات از سرور دریافت شدند"}
           {loading === "error" && "خطا در ارتباط با دیتابیس"}
         </span>
      </div>
      <br />
      <br />
      <br />
      <h1>به پروژه کتابخانه خوش آمدید</h1>
      <br />
      <br />
      <br />
      <img src={flagImage} alt="flag" className="rounded" />
    </div>
  );
};

export default Home;
