import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { StartPage } from './Pages/StartPage';
import { Survey } from './Pages/SurveyPage';
import { useState } from 'react';
import { SpecialistPage } from './Pages/SpecialistPage';
import { SignUp } from './Pages/SignupPage';
import { Login } from './Pages/LoginPage';
import { HandwrittingPage } from './Pages/HandwrittingPage';
import { HandwritingResult } from './Pages/HandwritingSubmittedPage';
import ResultPage from './Pages/ResultPage';

export default function App() {

  const [score, setScore] = useState([]); // {score:1 or 0,time:secs}
  const [surveyScore, setSurveyScore] = useState([]); // score[idx] or 0
  const [files, setFiles] = useState([]);
  const [newFile, setNewFile] = useState("");

  return (
    <Routes>

      <Route path='/' element={<Home />} />{/*No need */}

      <Route path='/getting-started' element={<StartPage />} />{/*No need */}

      <Route path='/quiz' element={<QuizPage score={score} setScore={setScore} />} /> {/*Reviewed */}

      <Route
        path='/survey'
        element={<Survey surveyScore={surveyScore}
          setSurveyScore={setSurveyScore} />}
      />{/*Reviewed */}

      <Route
        path='/result'
        element={
          <ResultPage
            score={score}
            setScore={setScore}
            surveyScore={surveyScore}
            setSurveyScore={setSurveyScore}
            files={files}
            setFiles={setFiles}
          />
        }
      /> {/*Changes in API*/}

      <Route path='/specialist' element={<SpecialistPage />} /> {/*No need */}

      <Route path='/signup' element={<SignUp />} /> {/*No need */}

      <Route path='/login' element={<Login />} />{/*No need */}

      <Route path='/handwritten' element={<HandwrittingPage files={files} setFiles={setFiles}
        newFile={newFile}
        setNewFile={setNewFile}
      />} /> {/*Remove*/}

      <Route
        path='/handwriting-result'
        element={<HandwritingResult files={files} setFiles={setFiles} newFile={newFile}
          setNewFile={setNewFile} />}
      />{/*  Remove */}

      <Route path='*' element={<div>404 Not Found</div>} />

    </Routes>
  );
}
