import React, { useState } from 'react';
import './QuizCreator.css';

function QuizCreator({ addQuiz }) {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: currentQuestion,
        options: options,
        correctAnswer: correctAnswer,
      },
    ]);
    setCurrentQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleSubmit = () => {
    addQuiz({ title, questions });
    setTitle('');
    setQuestions([]);
  };

  return (
    <div className="quiz-creator">
      <h2>Create a Quiz</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />
      </div>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) =>
              setOptions(
                options.map((opt, i) => (i === index ? e.target.value : opt))
              )
            }
          />
        ))}
      </div>
      <div>
        <label>Correct Answer:</label>
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder='value'
        />
      </div>
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default QuizCreator;
