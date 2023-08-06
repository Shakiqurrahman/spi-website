import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { EventData } from "../../data/data";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(EventData);
  const detail = eventData.find((elm) => elm.id === Number(id));
  console.log(detail);
  return (
    <section className="event-details container">
      <div className="hero">
        <div className="card">
          <div className="card-img">
            <img src={detail.img} alt="event image" />
          </div>
          <div className="card-title">
            <h2>{detail.title}</h2>
          </div>
        </div>
        <div className="entry-fee">
            <button className="fee-btn">Total Seat : {detail.totalSeat}</button>
            <button className="fee-btn">Entry : {detail.entry}</button>
            <button className="fee-btn">Winning Prize :  {detail.winningPrice}</button>
            <button className="fee-btn">Entry Fee : {detail.entryFee}</button>
            <buttton className="entry-btn">Entry Now</buttton>
        </div>
      </div>
      <div className="desc">
        <h2 className="title">Description</h2>
        <p>{detail.desc}</p>
      </div>
    </section>
  );
};

export default EventDetails;
