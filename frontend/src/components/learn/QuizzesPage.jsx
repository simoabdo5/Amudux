import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Zap, Clock, Mic, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { loadProgress } from './data/gamificationEngine';

import LearnHero from './components/LearnHero';
import StatsBar from './components/StatsBar';
import ThemeToggle from './components/ThemeToggle';
import './apprendre.css';

const QuizzesPage = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    const progress = loadProgress();
    setStats(progress.stats);
  }, []);

  if (!stats) return <div className="ap-loading">Loading...</div>;

  const quizzes = [
    { icon: MessageCircle, theme: 'orange', title: 'Darija Vocabulary', desc: 'How well do you know the essential travel phrases?', cta: 'Start quiz' },
    { icon: Target, theme: 'blue', title: 'Tifinagh Recognition', desc: 'Identify letters from the ancient Amazigh alphabet.', cta: 'Start quiz' },
    { icon: Star, theme: 'green', title: 'Cultural Knowledge', desc: 'Test what you\'ve learned about Moroccan traditions.', cta: 'Start quiz' }
  ];

  const challenges = [
    { icon: Zap, theme: 'orange', title: 'Daily Challenge', desc: 'A mixed bag of questions. Refreshes every day.', cta: 'Play today\'s' },
    { icon: Clock, theme: 'blue', title: 'Time Attack', desc: 'How many can you answer in 60 seconds?', cta: 'Beat the clock' },
    { icon: Mic, theme: 'green', title: 'Audio Quiz', desc: 'Listen to pronunciation and identify the word.', cta: 'Start listening' }
  ];

  return (
    <div className="ap-root">
      <div className="ap-container">
        
        <LearnHero 
          kickerText="Quiz Arena"
          title="Test what you've learned"
          description="Challenge yourself and earn XP. Every correct answer brings you closer to fluency."
          onBack={() => navigate('/languages')}
        >
          <StatsBar stats={stats} />
        </LearnHero>

        <section className="ap-section">
          <div className="ap-section__header">
            <h2 className="ap-section__title">Knowledge Quizzes</h2>
          </div>
          <div className="ap-grid ap-grid--3">
            {quizzes.map((q, i) => {
              const IconComp = q.icon;
              return (
                <button key={q.title} className={`ap-card ap-animate ap-animate-${i + 1}`}>
                  <div className={`ap-card__icon ap-card__icon--${q.theme}`}><IconComp size={22} /></div>
                  <h3 className="ap-card__title">{q.title}</h3>
                  <p className="ap-card__desc">{q.desc}</p>
                  <div className="ap-card__cta">{q.cta} <ArrowRight size={15} /></div>
                </button>
              );
            })}
          </div>
        </section>
        
        <section className="ap-section">
          <div className="ap-section__header">
            <h2 className="ap-section__title">Challenge Modes</h2>
          </div>
          <div className="ap-grid ap-grid--3">
            {challenges.map((c, i) => {
              const IconComp = c.icon;
              return (
                <button key={c.title} className={`ap-card ap-animate ap-animate-${i + 1}`}>
                  <div className={`ap-card__icon ap-card__icon--${c.theme}`}><IconComp size={22} /></div>
                  <h3 className="ap-card__title">{c.title}</h3>
                  <p className="ap-card__desc">{c.desc}</p>
                  <div className="ap-card__cta">{c.cta} <ArrowRight size={15} /></div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default QuizzesPage;
