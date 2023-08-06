import React, { useState } from 'react';
import './Event.css'
import '../../components/Location/Location'
import { EventData } from '../../data/data';

const Event = () => {
    const [eventData, setEventData] = useState(EventData);
    return (
        <section className='event container'>
            <h1 className='page-title'>" <span className='orange-text'>Events</span> "</h1>
            <div className="cards">
            {
                eventData.map((data) => (
                    <div key={data.id} className="event-card">
                        <div className="card-img">
                        <img src={data.img} alt="event image" />
                        </div>
                        <div className="card-title">
                            <h2>{data.title}</h2>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    );
};

export default Event;