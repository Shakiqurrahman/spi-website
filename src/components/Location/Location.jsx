import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <>
      <section className="location container">
        <h2 className="title"><span className="orange-text">Find</span> on Us</h2>
        <div className="location-img">
            <img src="/images/home page/location.png" alt="" />
        </div>
        <p className="address"><span className="orange-text">Address : </span>Technical Road, Sylhet-3100</p>

      </section>
    </>
  );
};

export default Location;
