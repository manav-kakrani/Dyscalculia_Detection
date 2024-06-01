import React, { useState } from 'react';
import { Button } from '../Components/Button';
import { NavBar } from '../Components/Navbar';
import robo from '../Images/robo.jpg';
import speaker from '../Images/speaker.jpg';
import { useSpeechSynthesis } from 'react-speech-kit';

import Data from '../Data/surveyQuestions.json';
import { Navigate, useNavigate } from 'react-router-dom';

export const Survey = ({ surveyScore, setSurveyScore }) => {

  const { speak } = useSpeechSynthesis();
  const [res, setRes] = useState(-1);

  const navigate = useNavigate();
  return (
    <>
      <NavBar />

      <div className='mt-10'>
        <div className='relative pt-1 '>
          <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-100'>
            <div
              style={{ width: `${surveyScore.length * 5}%` }}
              className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500'></div>
          </div>
        </div>

        <div className='mt-14 flex mx-36 items-center'>
          <img src={robo} alt='robo-image' className='' />
          <div className='ml-10'>
            <div className='font-poppins font-bold text-2xl'>
              <img
                src={speaker}
                alt='speaker-image'
                className='w-6 h-6 mr-3 cursor-pointer inline-block'
                onClick={() =>
                  speak({
                    text:
                      'voice' in Data[surveyScore.length + 1]
                        ? Data[surveyScore.length + 1].voice
                        : Data[surveyScore.length + 1].question
                  })
                }
              />
              {Data[surveyScore.length + 1].question}
            </div>
            <div className='flex justify-center items-center mt-5'>
              {/* <div className='border border-qBor rounded py-1 px-2 text-lg'>“B”</div> */}
              {'images' in Data[surveyScore.length + 1]
                ? Data[surveyScore.length + 1].images.map((img, index) => {
                  return (
                    <img
                      src={require(`../Images/Quiz1/${img}`)}
                      className='border border-qBor rounded py-1 px-2 w-52 h-52 mx-8'
                      alt='letter B'
                    />
                  );
                })
                : null}
            </div>
          </div>
        </div>

        <div className='flex my-14 mx-36 justify-center'>
          {Data[surveyScore.length + 1].options.map((opt, index) => {
            return (
              <div key={index} className='mr-20'>
                <button
                  className={`${res == index ? 'bg-blue-200' : 'bg-optBg'
                    } border-bor border-b-2 rounded-lg text-label font-poppins 
                  ${opt.length < 5 ? 'px-20' : 'px-5'}  
                  py-3 hover:shadow-lg`}
                  onClick={() => {
                    setRes(index);
                  }}>
                  {opt}
                </button>
              </div>
            );
          })}
        </div>

        <div
          className='flex justify-center'
          onClick={() => {

            if (res === -1) setSurveyScore([...surveyScore, 0]);
            else setSurveyScore([...surveyScore, Data[surveyScore.length + 1].score[res]]);

            if (surveyScore.length === 19) {
              localStorage.setItem('step', 2);
              localStorage.setItem('survey', 'true');
              navigate('/result');
            } else {
              setRes(-1);
            }

          }}>
          <Button content='Continue' />
        </div>
      </div>
    </>
  );
};
