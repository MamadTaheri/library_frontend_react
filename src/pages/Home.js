import React from 'react';

// images
import flagImage from "../assets/images/flag.jpg";

const Home = () => {
    return (
        <div className="row">
            <div className="col-md-12 p-5">
               <h1>به پروژه کتابخانه خوش آمدید</h1>
               <br />
               <br />
               <br />
               <img src={flagImage} alt="flag" className="rounded" />
            </div>
        </div>
    );
};

export default Home;