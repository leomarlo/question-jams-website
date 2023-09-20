// components/QuestionDisplay.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL, DOCKER_MODE, DEVELOPMENT_MODE, REVERSE_PROXY } from '../utils/global';


const NEW_QUESTION_AFTER_MILISECONDS = 7000
const QUESTIONS_PER_REQUEST = 25
const NEW_REQUEST_AFTER_MILISECONDS = QUESTIONS_PER_REQUEST * NEW_QUESTION_AFTER_MILISECONDS

const QuestionDisplay: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const fetchQuestions = async (numberOfQuestions: number) => {
    try {
      const response = await axios.get(BACKEND_URL + `newQuestions/${numberOfQuestions}`);
    //   console.log("Fetched questions:", response.data);
      setQuestions([...response.data]);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    // console.log("Fetching questions...", QUESTIONS_PER_REQUEST);
    fetchQuestions(QUESTIONS_PER_REQUEST);
    // console.log("number of questions"   , questions.length)
    const questionInterval = setInterval(() => {
      setCurrentQuestionIndex(prevIndex => {
        // console.log("Current question index:", prevIndex)
        if (prevIndex + 1 >= questions.length) {
          fetchQuestions(QUESTIONS_PER_REQUEST);
          return 0;
        }
        return prevIndex + 1;
      });
    }, NEW_QUESTION_AFTER_MILISECONDS);

    const fetchInterval = setInterval(fetchQuestions, NEW_REQUEST_AFTER_MILISECONDS);

    return () => {
      clearInterval(questionInterval);
      clearInterval(fetchInterval);
    };
  }, []);

  return (
    <div className='my-4 question-style align-items-center'>
      {questions[currentQuestionIndex]}
    </div>
  );
}

export default QuestionDisplay;
