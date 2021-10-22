import React from "react";

// images
import flagImage from "../assets/images/flag.jpg";

const Home = ({loading}) => {

  return (
    <div className="container">
      <div className="">
         <span>وضعیت ارتباط با سرور : </span>
         <span>
           {loading === "init" && "اولیه"}
           {loading === "loading" && "در حال دریافت اطلاعات از سرور"}
           {loading === "users" && "کاربران از سرور دریافت شدند"}
           {loading === "books" && "کلیه اطلاعات از سرور دریافت شدند"}
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
