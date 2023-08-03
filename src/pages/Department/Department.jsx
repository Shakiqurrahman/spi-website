import React, { useState } from 'react';
import DeptData from '../../data/data';
import './Department.css';

const Department = () => {
    const [deptData, setDeptData] = useState(DeptData);
    const deptBox = [
        {
            id: 1,
            img: '/images/department page/computer.png'
        },
        {
            id: 2,
            img: '/images/department page/civil.png'
        },
        {
            id: 3,
            img: '/images/department page/electrical.png'
        },
        {
            id: 4,
            img: '/images/department page/electro-medical.png'
        },
        {
            id: 5,
            img: '/images/department page/mechanical.png'
        },
        {
            id: 6,
            img: '/images/department page/electronics.png'
        },
        {
            id: 7,
            img: '/images/department page/power.png'
        },
    ]
    return (
        <section className='department container'>
            <h1 className='page-title'>" <span className='orange-text'>Department</span> "</h1>
            <div className="dept-box">
                {
                    deptBox.map((elem) => (
                        <div key={elem.id} className='img-box'>
                        <img src={elem.img} alt="department photo" />
                        </div>
                    ))
                }
            </div>
            <>
                {
                    deptData.map((details) => (
                        <div key={details.id} className="dept-details">
                            <div className="details">
                                <h2 className='title'><span className='orange-text'>{details.firstTitle}</span> {details.secondTitle}</h2>
                                <p>{details.desc}</p>
                            </div>
                            <div className="img-box">
                                <img src={details.img} alt="dept image" />
                            </div>
                        </div>
                    ))
                }
            </>
        </section>
    );
};

export default Department;