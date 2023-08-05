import React from "react";
import { ImFolderDownload } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Facilities.css";
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery'

const Facilities = () => {
  return (
    <section className="facilities container">
      <h2 className="page-title">
        <span className="orange-text">Facilities</span> Here
      </h2>
      <div className="library">
        <div className="img-box">
          <img src="/images/facilities/Institute Library.svg" alt="" />
        </div>
        <div className="content">
          <h2 className="title">
            Institute <span className="orange-text">Library</span>
          </h2>
          <p>
            A library is a collection of materials, books or media that are
            accessible for use and not just for display purposes.
          </p>
          <Link to="/facilities">
            <button className="w-btn">
              Download Book List
              <ImFolderDownload className="icon" size={20} />
            </button>
          </Link>
        </div>
      </div>
      <div className="cycle-stand">
        <div className="content">
          <h2 className="title">
            Institute <span className="orange-text">Cycle stand</span>
          </h2>
          <p>
            A bicycle parking rack, usually shortened to bike rack and also
            called a bicycle stand, is a device to which bicycles can be
            securely attached for parking purposes.
          </p>
        </div>
        <div className="img-box">
          <img src="/images/facilities/Cycle stand.png" alt="" />
        </div>
      </div>
      <div className="stand-map">
        <h2 className="title">
          <span className="orange-text">Cycle Stand</span> Map
        </h2>
        <img src="/images/facilities/Cycle stand 1.png" alt="" />
      </div>
      <div className="hostel">
        <div className="img-box">
          <img src="/images/facilities/hostel.png" alt="" />
        </div>
        <div className="content">
          <h2 className="title">
            <span className="orange-text">Surma</span> Student Hostel
          </h2>
          <p>
            Student hostels are types of residences that provide tenants with
            common spaces to meet up. Thus, the students will live in a single
            or shared room, and will be able to take advantage of these common
            spaces to meet other students and carry out their daily activities.
          </p>
        </div>
      </div>
      <PhotoGallery />
    </section>
  );
};

export default Facilities;
