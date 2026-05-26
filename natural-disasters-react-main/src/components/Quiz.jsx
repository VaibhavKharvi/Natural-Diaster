import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (idx) => {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const s = questions.reduce((acc, q, i) => acc + (q.correctAnswer === next[i] ? 1 : 0), 0);
      setScore(s);
      setDone(true);
    }
  };

  const restart = () => { setCurrent(0); setAnswers([]); setDone(false); setScore(0); };

  if (done) {
    return (
      <div className="quiz-results">
        <h2>Your Results</h2>
        <div className="quiz-score">{score}/{questions.length}</div>
        <div className="quiz-feedback">
          {score === questions.length
            ? <p className="perfect">Perfect! You're well-prepared for emergencies!</p>
            : score >= questions.length / 2
            ? <p className="good">Good job! Solid foundation of disaster preparedness knowledge.</p>
            : <p className="needs-improvement">Room for improvement. Review our preparedness materials.</p>
          }
        </div>
        <button onClick={restart} className="btn btn-secondary">Retake Quiz</button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="quiz-box">
      <div className="quiz-progress">Question {current + 1} of {questions.length}</div>
      <div className="question">
        <h3>{q.question}</h3>
        <ul className="options">
          {q.options.map((opt, i) => (
            <li key={i} className="option">
              <button className="option-btn" onClick={() => handleAnswer(i)}>{opt}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
