import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
      <div className='homepage-content'>
        <div className='divboth'>
          <img className='homepagelogo' src="../src/assets/logoandname.png" alt="homepagelogo" />
        </div>

        <div className='divboth'>
          <div className='home-title'>
            <h1 className='home-h1'>Learn without limits <br />and spread knowledge.</h1>
          </div>

          <div className='home-p'>
            <p style={{ textAlign: 'justify' }}>Colossus.AI is an AI-powered Learning Guide System that provides personalized educational experiences through curated resources, adaptive learning plans, and progress tracking. With interactive tools and tailored guidance, it empowers users to master skills efficiently for academic, professional, or personal growth.</p>
          </div>

          <div className='home-btns'>
            <div><Link to='/login' className='home-btn1'>Start Here</Link></div>
            <div><Link to='#' className='home-btn2'><FaPlayCircle className='play-btn'/>Watch Video</Link></div>
          </div>
        </div>
      </div>
  );
}

export default Home;
