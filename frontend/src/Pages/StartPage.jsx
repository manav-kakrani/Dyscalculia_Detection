import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button';
import { NavBar } from '../Components/Navbar';
import boy from '../Images/boy.jpg';
import Progressbar from '../Components/ProgressBar';

export const StartPage = () => {
  const [quiz, setQuiz] = useState(localStorage.getItem('quiz'));
  const [survey, setSurvey] = useState(localStorage.getItem('survey'));
  const [handwriting, setHandwriting] = useState(
    localStorage.getItem('handwriting')
  );

  return (
    <>
      {/* <Joyride steps={steps} continuous={true} styles={{ options: { primaryColor: '#F7446F' } }} /> */}
      <NavBar />

      <div className="md:text-center">
        <div className="mt-8 md:mt-20 font-poppins font-bold text-lg md:text-2xl tracking-wider">
          Signs and Symptoms of Dyscalculia{' '}
        </div>
        <div className="mt-1">and Determining When Academic</div>
        <div className="mt-1">Intervention is Necessary</div>
        <img
          src={boy}
          alt="dyslexic boy"
          className="my-8 bg-black h-64 w-80 mx-auto"
        />

        <div className="mt-5 w-[50%] mx-auto">
          <Progressbar step={localStorage.getItem('step')} />
        </div>

        {localStorage.getItem('step') == 0 && (
          <Link to="/quiz">
            <Button content="General Reasoning" />
          </Link>
        )}

        {localStorage.getItem('step') == 1 && (
          <Link to="/survey">
            <Button content="Numerical Calculation" />
          </Link>
        )}

        {localStorage.getItem('step') == 2 && (
          <Link to="/handwritten">
            <Button
              content="Test Handwriting"
              onClick={() => localStorage.setItem('step', 0)}
            />
          </Link>
        )}


      </div>
    </>
  );
};
