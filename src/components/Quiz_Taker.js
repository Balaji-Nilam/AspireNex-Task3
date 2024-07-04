import React, { useState, useEffect } from 'react';
import './QuizTaker.css';

function QuizTaker({ quiz, reset, onResetComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (reset) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowScore(false);
      onResetComplete();
    }
  }, [reset, onResetComplete]);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <div>No questions available in this quiz.</div>;
  }

  const handleAnswerOptionClick = (answer) => {
    if (answer === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="taker-body-container">
    <div className="quiz-taker">
      <h2>{quiz.title}</h2>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quiz.questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{quiz.questions.length}
            </div>
            <div className="question-text">{quiz.questions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {quiz.questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default QuizTaker;
