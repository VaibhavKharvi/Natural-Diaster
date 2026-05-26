import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Disasters from './pages/Disasters';
import DisasterDetail from './pages/DisasterDetail';
import Preparedness from './pages/Preparedness';
import Resources from './pages/Resources';
import QuizPage from './pages/QuizPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disasters" element={<Disasters />} />
            <Route path="/disasters/:id" element={<DisasterDetail />} />
            <Route path="/preparedness" element={<Preparedness />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;