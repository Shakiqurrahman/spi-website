import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-banner">
        <h2>Sylhet Polytechnic Institute</h2>
        <p>Technical Road, Sylhet-3100</p>
      </div>
      <div className="mission-vision container">
        <h2 className="page-title">
          <span className="orange-text">Mission</span> And Vision
        </h2>
        <div className="mission">
          <div className="content">
            <p>
              <span className="orange-text">Mission:</span> <br />
              1. Providing modern technical and technical training to the
              teachers-employees of the institute in view of the workplace
              reality. <br />
              2. Facilitation of practical classes through maintenance of
              institute equipment. <br />
              3. Procurement of necessary modern equipment in line with Diploma
              in Engineering course curriculum. <br />
              4. Ensure that theoretical and practical classes are conducted for
              the students. <br />
              5. Providing feedback to students regarding deficiencies in
              education and training through lesson evaluation. <br />
              6. Preparing students as smart through various co-curricular
              activities.
            </p>
          </div>
          <div className="img-box">
            <img src="/images/about-page/mission.svg" alt="mission" />
          </div>
        </div>
        <div className="vision">
          <div className="img-box">
            <img src="/images/about-page/vission.svg" alt="vision" />
          </div>
          <div className="content">
            <p>
              <span className="orange-text">Vision:</span> <br />
              To create smart diploma engineers with skills and qualifications
              according to the needs of domestic and foreign workplaces.
            </p>
          </div>
        </div>
      </div>
      <div className="diagram container">
        <img src="/images/about-page/Orgranogram.png" alt="diagram" />
      </div>
    </section>
  );
};

export default About;
