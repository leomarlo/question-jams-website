// App.tsx

import React from 'react';
import { BACKEND_URL, DOCKER_MODE, DEVELOPMENT_MODE, REVERSE_PROXY } from '../utils/global';

import QuestionDisplay from '../components/newQuestion';


const App: React.FC = () => {

  const informationButtonClick = async () => {
    let devMode = process.env.REACT_APP_DEVELOPMENT_MODE;
    if (devMode === undefined) {
      alert('Local development environment');
    } else if (devMode === 'development') {
      alert('Dockerized development environment set up');
    } else if (devMode === 'production') {
      alert('Production environment');
    } else {
      alert('Unknown environment');
    }
  }

  const handleButtonClick = async () => {

    try {
      const path = 'button-endpoint';
      const response = await fetch(BACKEND_URL + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display the message from the backend
      } else {
        console.error('Failed to run script.');
      }
    } catch (error) {
      console.error('There was an errorrr:', error);
    }
  };

  return (
    <React.StrictMode>
      <div className="d-flex justify-content-center vh-100">
        <div className="p-3 text-black text-center">
          <h1 className="mb-3">Question Jams</h1>
          <div className="question-container-style my-4">
            <QuestionDisplay />
          </div>
          <div className="about-container">
            <p>
            In this artistic research project we explore from an experimental and performative perspective
the intricacies, absurdities, peculiarities and experiential qualities of the act of asking questions.
We explore the asymmetries between a question and an answer, between the questioner and the
questionee and the tension that is created and which drives societal forces. We plan to conduct
question jams in public and between project participants. Furthermore we turn them into
performative pieces.
            </p>
          </div>

          {/* make four consecutive buttons with each bootstrap btn type */}
          <button className="btn btn-primary m-2" onClick={handleButtonClick}>
            Why?</button>
          {/* <button className="btn btn-secondary m-2" onClick={handleButtonClick}>
            Secondary</button>
          <button className="btn btn-success m-2" onClick={handleButtonClick}>
            Success</button>
          <button className="btn btn-danger m-2" onClick={handleButtonClick}>
            Danger</button>
          <button className="btn btn-warning m-2" onClick={handleButtonClick}>
            Warning</button>
          <button className="btn btn-info m-2" onClick={handleButtonClick}>
            Info</button> */}
          {/* <button className="btn btn-light m-2" onClick={handleButtonClick}> */}
        </div>
      </div>
    </React.StrictMode>
  );
};

export default App;
