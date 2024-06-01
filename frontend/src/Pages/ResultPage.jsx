import React, { useEffect, useState } from 'react';
import { NavBar } from '../Components/Navbar';
import BarChart from '../Components/BarChart';
import NextSteps from '../Components/NextSteps';
import { SpecialistPage } from './SpecialistPage';
import ReportPercentage from '../Components/PercentageReport';
import { Loader } from '../Components/Loader';

const ResultPage = ({ score, surveyScore, setScore, setSurveyScore, files, setFiles }) => {
  const [res, setRes] = useState('Res');
  const [scores, setScores] = useState({});

  const [handRes, setHandRes] = useState({
    message: 'Res',
    probability: 'Res'
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const language =
      (score[0] + score[1] + score[2] + score[3] + score[4] + score[5] + score[7]) / 7;

    const memory = (score[1] + score[8]) / 2;
    const getrts = () => {
      return (Math.random() * 100);
    }

    let totTime = 0;
    let totScore = 0;

    score.forEach(element => {
      totTime += element.time;
      totScore += element.score;
    });

    // console.log(totScore / score.length);
    // console.log(totTime);

    let surveyTot = 0;
    let cnt = 0;
    surveyScore.forEach(element => {
      surveyTot += element;
      cnt++;
    })

    let numerosity = totScore;
    let rts_wm = (surveyTot + totScore) / ((Math.random() * (10 * totTime)) % (5)) * totTime;
    let accuracy = (cnt + totScore) / (score.length + surveyScore.length);
    console.log(numerosity);
    console.log(rts_wm);
    console.log(accuracy);

    const speed = 0.4;
    const visual = (score[0] + score[2] + score[3] + score[6]) / 4;
    const audio = (score[6] + score[9]) / 2;
    const survey = surveyScore.reduce((a, b) => a + b, 0) / 80;

    const data = {
      language,
      memory,
      speed,
      visual,
      audio,
      survey
    };
    setScores(data);

    // console.log(data); 
    // console.log(files);

    const fetchData = async () => {
      try {
        setLoading(true);
        let resp = await fetch('http://localhost:5000', {
          method: 'POST',
          body: JSON.stringify({
            Numerosity: numerosity,
            RTs_WM: rts_wm,
            Accuracy_WM: accuracy
          }),
          headers: {
            'Content-Type': 'application/json'  // Set the content type to JSON
          }
        })
        let data = await resp.json();
        console.log(data);
        setLoading(false);
        // console.log(resDataHand.responseHand.body);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      <div className='text-center my-6'>
        <div className='font-poppins font-bold text-4xl'>Your Result</div>
        {/* <div className='text-xl'>You are a Visual Learner</div> */}
      </div>
      <Loader show={loading} />
      <BarChart scores={scores} />

      {loading ? null : (
        <>
          <div className='grid lg:grid-cols-8 gap-4 px-6'>
            <div className='col-span-4 bg-white rounded-lg shadow-lg p-2 my-2'>
              <BarChart scores={scores} />
            </div>
            <div className='col-span-2 p-2'>
              <ReportPercentage percentage={70} title='Quiz Result' />

              <div>{res}</div>
            </div>
            <div className='col-span-2 p-2'>
              <ReportPercentage percentage={40} title='Handwriting Result' />

              <div className='text-xl'>{handRes.message && handRes.message}</div>
              <div className='text-xl'>{handRes.probability && handRes.probability}</div>
            </div>
          </div>
          <div className='grid lg:grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-5 p-8 flex justify-center'>
              <NextSteps category='low' />
            </div>
            <div className='col-span-12 lg:col-span-7 max-sm:flex max-sm:justify-center'>
              <SpecialistPage result={false} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResultPage;
