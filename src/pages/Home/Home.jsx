import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Location from "../../components/Location/Location";
import Principal from "../../components/Principal/Principal";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Hero />
      <Principal />
      <section className="feature-events container">
        <div className="feature">
          <h2 className="title">
            Feature <span className="orange-text">Events</span>
          </h2>
          <Link to="/event">
            <button className="w-btn">
              See More
              <BsFillArrowRightCircleFill className="icon" size={20} />
            </button>
          </Link>
        </div>
        <div className="feature-img">
          <div className="feature-card">
            <div className="card-img">
              <img src="/images/event page/event pic2.jpg" alt="event pic" />
            </div>
          <div className="card-title">
            <h2>International Mother Language Day</h2>
            </div>
          </div> 
          <div className="feature-card">
            <div className="card-img">
              <img src="/images/event page/event pic.jpg" alt="event pic" />
            </div>
          <div className="card-title">
            <h2>Robotics Compitition</h2>
            </div>
          </div> 
          <div className="feature-card">
            <div className="card-img">
              <img src="/images/event page/event pic1.jpg" alt="event pic" />
            </div>
          <div className="card-title">
            <h2>Web Design Race</h2>
            </div>
          </div> 
        </div>
      </section>

      <section className="departments-section container">
        <h2 className="title">Departments</h2>
        <div className="department-img">
          <Link to="/department">
          <img src="/images/home page/computer.png" alt="" />
          </Link>
          <Link to="/department">
            <img src="/images/home page/civil.png" alt="" />
          </Link>
          <Link to="/department">
            <img src="/images/home page/electrical.png" alt="" />
          </Link>
          <Link to="/department">
            <img src="/images/home page/electronics.png" alt="" />
          </Link>
        </div>
        <Link to="/department">
          <button className="w-btn">
            See More
            <BsFillArrowRightCircleFill className="icon" size={20} />
          </button>
        </Link>
      </section>

      <section className="dept-result container">
        <h2 className="title">
          Department <span className="orange-text">Results</span>
        </h2>
        <div className="result-wrapper">
          <div className="img-box">
            <img src="/images/home page/department result.png" alt="" />
          </div>
          <div className="content">
            <p>
              We are published the recent Examination results in this section.<br />
              Find your result Quickly!
            </p>
            <Link to="/result">
              <button className="w-btn">
                Get Result
                <BsFillArrowRightCircleFill className="icon" size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="greeting container">
        <h2 className="title">
          <span className="orange-text">Contact </span>Us
        </h2>
        <p>You Can find or  rich out to us for this method</p>
        <p className="orange-text">Thank You!</p>
      </div>
    </main>
  );
};

export default Home;
