import React from "react";
import './Hero.css'
import { IoSearch } from 'react-icons/io5'

const Hero = () => {
  return (
    <div>
      <section className="home-page">
        <div className="welcome-page">
          <h4>Welcome To</h4>
          <h2><span>"</span>Sylhet Polytechnic Institute<span>"</span></h2>
          <div className="search-box">
          <input type="text" placeholder="Search here"/>
          <IoSearch className="search-icon"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
