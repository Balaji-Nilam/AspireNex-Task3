import React, { useState } from 'react';
import QuizCreator from './components/QuizCreator';
import QuizTaker from './components/Quiz_Taker';
import './App.css';

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [resetQuiz, setResetQuiz] = useState(false);
  const [view, setView] = useState('create'); // 'create' or 'take'

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
    setView('take');
  };

  const handleQuizSelection = (quiz) => {
    setCurrentQuiz(quiz);
    setResetQuiz(true);
  };

  return (
    <div className="App">
      <h1>Quiz Platform</h1>
      <div className="nav-buttons">
        <button onClick={() => setView('create')}>Create Quiz</button>
        <button onClick={() => setView('take')}>Take Quiz</button>
      </div>
      {view === 'create' && <QuizCreator addQuiz={addQuiz} />}
      {view === 'take' && (
        <>
          <h2>Available Quizzes</h2>
          <ul>
            {quizzes.map((quiz, index) => (
              <li key={index}>
                <button onClick={() => handleQuizSelection(quiz)}>{quiz.title}</button>
              </li>
            ))}
          </ul>
          {currentQuiz && (
            <QuizTaker
              key={currentQuiz.title}
              quiz={currentQuiz}
              reset={resetQuiz}
              onResetComplete={() => setResetQuiz(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
