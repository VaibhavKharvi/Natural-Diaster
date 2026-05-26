import React from 'react';
import Quiz from '../components/Quiz';

const questions = [
  { question: "What should you do during an earthquake if you're indoors?", options: ["Run outside immediately", "Drop, Cover, and Hold On", "Stand in the doorway", "Lie flat on the ground"], correctAnswer: 1 },
  { question: "How much water should you store per person for emergency preparedness?", options: ["Half a gallon per day", "One gallon per day", "Two gallons per day", "Three gallons per day"], correctAnswer: 1 },
  { question: "What should you do if you encounter flood water while driving?", options: ["Drive through it quickly", "Turn around and find another route", "Stop and assess the depth", "Call for help and wait"], correctAnswer: 1 },
  { question: "During a tornado, which location offers the best protection?", options: ["Large rooms with windows", "Basement or lowest floor, interior room", "Garage or shed", "Car or mobile home"], correctAnswer: 1 },
  { question: "What is the recommended duration for storing non-perishable food in an emergency kit?", options: ["At least 1 day", "At least 3 days", "At least 1 week", "At least 2 weeks"], correctAnswer: 1 },
];

const QuizPage = () => (
  <div className="quiz-page">
    <section className="page-header">
      <div className="container">
        <h1>Disaster Readiness Quiz</h1>
        <p>Test your knowledge on disaster preparedness and safety</p>
      </div>
    </section>

    <section className="quiz-content">
      <div className="container">
        <div className="quiz-intro mb-4">
          <h2>About the Quiz</h2>
          <p>This 5-question quiz will test your knowledge of disaster preparedness and safety measures. After completing the quiz, you'll receive your score.</p>
        </div>
        <div className="quiz-wrapper">
          <Quiz questions={questions} />
        </div>
      </div>
    </section>
  </div>
);

export default QuizPage;
