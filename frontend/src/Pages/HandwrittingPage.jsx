import React, { useState } from 'react';
import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadButton } from 'react-uploader';
import { NavBar } from '../Components/Navbar';
import { Button } from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import robo from '../Images/robo.jpg';
import speaker from '../Images/speaker.jpg';
import { useSpeechSynthesis } from 'react-speech-kit';

const uploader = Uploader({ apiKey: 'free' });
const uploaderOptions = {
  multi: false,
  styles: {
    colors: {
      primary: '#37C9EF'
    }
  }
};

const MyUploadButton = ({ setFiles }) => (
  <UploadButton uploader={uploader} options={uploaderOptions} onComplete={setFiles}>
    {({ onClick }) => <button onClick={onClick}>Upload Here</button>}
  </UploadButton>
);

const MyUploadedFiles = ({ files }) =>
  files.map((file) => {
    // Tip: save 'filePath' to your DB (not 'fileUrl').
    const filePath = file.filePath;
    const fileUrl = uploader.url(filePath, 'thumbnail'); // "raw" for un-transformed file.

    return (
      <p key={fileUrl}>
        <img src={fileUrl} className=''></img>
        {/* <a href={fileUrl} target="_blank">
          {fileUrl}
        </a> */}
      </p>
    );
  });

export const HandwrittingPage = ({ files, setFiles, newFile, setNewFile }) => {
  const navigate = useNavigate();
  const { speak } = useSpeechSynthesis();
  console.log(files);

  return (
    <>
      <NavBar />

      <div className='mt-20 text-center font-bold text-[2.4rem] leading-[1.2] text-title1 tracking-widest'>
        <div className=''>Virtual writing assistant</div>
        <div className='mt-1'>to help your child</div>
      </div>

      <div className='flex justify-center items-center w-[90%]'>
        <img src={robo} alt='robo-image' className='' />
        <div className='ml-10'>
          <div className='font-poppins font-bold text-2xl'>
            <img
              src={speaker}
              alt='speaker-image'
              className='w-6 h-6 mr-3 cursor-pointer inline-block'
              onClick={() =>
                speak({
                  text: 'Knowledge'
                })
              }
            />
            <span className='tracking-wide '>
              Write the word{'  '}
              <span className='text-blue1 font-bold'>'Knowledge'</span>
            </span>
          </div>
        </div>
        <div className='py-2 px-4 text-white font-semibold text-lg  bg-btn rounded-md  ml-28'>
          <input type='file' onChange={(event) => setNewFile(event.target.files[0])} />
          <MyUploadButton setFiles={setFiles} />
        </div>
      </div>
      {/* <div
        className="flex justify-center mt-16 mb-20"
        onClick={() => {
          localStorage.setItem("quiz", "false");
          localStorage.setItem("survey", "false");
          navigate("/handwriting-result");
        }}
      >
        <Button content="Submit" />
      </div> */}
      {files.length ||
        (newFile && (
          <>
            {/* <div className="mt- w-max mx-auto text-center">
              <MyUploadedFiles files={files} />
            </div> */}
            <div
              className='flex justify-center mt-16 mb-20'
              onClick={() => {
                localStorage.setItem('quiz', 'false');
                localStorage.setItem('survey', 'false');
                navigate('/result');
              }}>
              <Button content='Submit' />
            </div>
          </>
        ))}
    </>
  );
};
