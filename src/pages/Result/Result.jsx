import React from 'react';
import './Result.css';
import { Link } from 'react-router-dom';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Result = () => {
    return (
        <section className='result'>
            <h1 className='page-title'>Collect your <span className='orange-text'>Result</span></h1>
            <div className="content">
            <p>We are published the recent Examination results<br />
            in this section find your result Quickly</p>
            <img src="/images/result page/Result.svg" alt="" />
            <Link to="/result">
          <button className="w-btn">
            Get Result
          </button>
        </Link>
            </div>
        </section>
    );
};

export default Result;