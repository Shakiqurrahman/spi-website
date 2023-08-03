import React from "react";
import "./Principal.css";
import principal from "/images/principal.png";

const Principal = () => {
  return (
    <div className="wrapper">
      <section className="principal-message container">
        <div className="content">
          <h2>
            Our <span className="orange-text">Principal</span> Massages
          </h2>
          <p className="desc">
            Sylhet Polytechnic Institute (SPI) is one of the oldest and
            renowned/reputed diploma engineering institutes in Bangladesh,
            located in the Holy City Sylhet on the Bank of the River Surma. The
            Motto of SPI is to provide modern and tech-based education to
            encourage the resilient youth cope with modern era. I passionately
            believe that there is no other alternative to technical education to
            make Bangladesh a better state. Having advantages of demographic
            dividend Bangladesh can reach the peak of development by 2041 if
            this huge population is enlightened with the technical education.
            SPI focuses on developing skilled and technically sound expertise to
            face future challenges and build a progressed Bangladesh. The
            Existing seven technologies are designed based on market demand
            driven so that they can meet the criteria of professional work place
            in country and abroad.
          </p>
          <p className="green-color">I wish SPI all the best ahead. </p>
        </div>
        <div className="thumbnail">
          <img src={principal} alt="principal's image" />
          <div className="principal">
            <h3>Mohammed Rehan Uddin</h3>
            <p>Principal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;
