import React from "react";

// images
import flagImage from "../assets/images/flag.jpg";

const Home = () => {
  return (
    <div className="container">
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
