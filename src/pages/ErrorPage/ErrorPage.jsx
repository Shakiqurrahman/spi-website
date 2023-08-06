import React, { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import errorImg from "/images/404.jpg";
const ErrorPage = () => {

  return (
    <div className="error-page">
      <img className="error-img" src={errorImg} alt="" />
      <h2 className="error-title">OOPPS!</h2>
      <p>Your Page Not Found!</p>
      <Link to="/">
        <button className="error-btn">
          Back Home <BsArrowLeft className="arrow-icon" />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
