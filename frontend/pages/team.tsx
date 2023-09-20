import React from 'react';
import Image from 'next/image';
import HorstmeyerImg from '../resources/img/Horstmeyer.jpg';
import LiImg from '../resources/img/Li_small.jpg';
import TvedtenImg from '../resources/img/Tvedten.jpg';

const Team: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Dr. Leonhard Horstmeyer */}
        <div className="col-md-4">
          <div className="card">
            <Image src={HorstmeyerImg} alt="Dr. Leonhard Horstmeyer" width="300" height="400" 
            layout="responsive" 
            objectFit="cover"
            className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Dr. Leonhard Horstmeyer</h5>
              <p className="card-text">Principal Investigator</p>
              <a href="http://www.leonhardhorstmeyer.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Website</a>
            </div>
          </div>
        </div>

        {/* Zhuoni Li */}
        <div className="col-md-4">
          <div className="card">
            <Image src={LiImg} alt="Zhuoni Li" 
            layout="responsive" 
            objectFit="cover"
            width="300" height="400"  className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Zhuoni Li</h5>
              <p className="card-text">Performance Artist, Vocal Improvisor, Eurhythmician</p>
              <a href="https://www.instagram.com/music_eurythmics_miss.lily/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Instagram</a>
              
            </div>
          </div>
        </div>

        {/* Martin Tvedten */}
        <div className="col-md-4">
          <div className="card">
            <Image src={TvedtenImg} alt="Martin Tvedten"  width="300" height="400" 
                layout="responsive" 
                objectFit="cover"
                className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Martin Tvedten</h5>
              <p className="card-text">Composer</p>
              <a href="https://soundcloud.com/martin-tvedten" target="_blank" rel="noopener noreferrer" className="btn btn-primary">SoundCloud</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 about-container">
        <p>
          Our core team consists of the performance artist, vocal improvisor, eurhythmician Li, the
          physicist Dr. Horstmeyer and the composer Tvedten. Whilst we have collaborated in pairs, we
          have never collaborated together, yet we share a fascination for questions that draw us together
          beyond our disciplinary confines and our cultural backgrounds. The material acquisition,
          conception and technical work is done mostly by Horstmeyer, drawing on his knowledge rooted in
          physics and philosophy. The conception of the media settings and improvisations is created by Li.
          She also creates concepts for the performative output. Tvedten is translating the experiential
          dimension into compositional elements. We are inspired by our respective expertises, our ability
          to commit and to take responsibility shown in former collaborations.
        </p>
      </div>
    </div>
  );
}

export default Team;
