/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import QuizCreator from './QuizCreator';
import Quiz_Taker from './Quiz_Taker';

function Quiz_Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [resetQuiz, setResetQuiz] = useState(false);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  const handleQuizSelection = (quiz) => {
    setCurrentQuiz(quiz);
    setResetQuiz(true);
  };

  return (
    <div>
      <h1>Quiz Platform</h1>
      {!currentQuiz && <QuizCreator addQuiz={addQuiz} />} 
      <hr />
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <button onClick={() => handleQuizSelection(quiz)}>{quiz.title}</button>
          </li>
        ))}
      </ul>
      {currentQuiz && (
        <Quiz_Taker
          key={currentQuiz.title}
          quiz={currentQuiz}
          reset={resetQuiz}
          onResetComplete={() => setResetQuiz(false)}
        />
      )}
    </div>
  );
}

export default Quiz_Home;
