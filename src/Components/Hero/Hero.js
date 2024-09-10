import React from 'react';
import videoFile from '../Assets/Glow_and_Glam_Video.mp4';
import "./Hero.css"


export default function Hero(){
    return (
        <div className="hero">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-text">
        <h1>Glow & Glam</h1>
        <p>Your Perfect Choice for Elegance!!!</p>
      </div>
        </div>
      );
    };