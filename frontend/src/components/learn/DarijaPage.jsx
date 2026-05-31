import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, BookOpen, Map, Mic, Headphones, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../accueil/LanguageContext';
import { loadProgress } from './data/gamificationEngine';

import LearnHero from './components/LearnHero';
import StatsBar from './components/StatsBar';
import ThemeToggle from './components/ThemeToggle';
import './apprendre.css';

const DarijaPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    const progress = loadProgress();
    setStats(progress.stats);
  }, []);

  if (!stats) return <div className="ap-loading">Loading...</div>;

  const modules = [
    {
      icon: BookOpen, theme: 'orange',
      title: 'Essential Phrases',
      desc: 'Greetings, thank-yous, and the polite words that open doors everywhere.',
      cta: 'Start speaking'
    },
    {
      icon: Map, theme: 'blue',
      title: 'Travel Vocabulary',
      desc: 'The words you actually need — for taxis, souks, riads, and cafés.',
      cta: 'Learn words'
    },
    {
      icon: MessageCircle, theme: 'green',
      title: 'Conversations',
      desc: 'Practice real dialogues. Negotiate a taxi fare, order coffee, check into a riad.',
      cta: 'Practice now'
    },
    {
      icon: Star, theme: 'orange',
      title: 'Expression of the Day',
      desc: 'A new Moroccan saying every day — with context, pronunciation, and usage tips.',
      cta: 'Today\'s expression'
    },
    {
      icon: Mic, theme: 'blue',
      title: 'Pronunciation',
      desc: 'Master the unique Arabic sounds that don\'t exist in European languages.',
      cta: 'Practice sounds'
    },
    {
      icon: Headphones, theme: 'green',
      title: 'Listening',
      desc: 'Train your ear with natural conversational speed and local accents.',
      cta: 'Start listening'
    },
    {
      icon: Star, theme: 'orange',
      title: 'Mini Quizzes',
      desc: 'Quick, focused tests to reinforce what you\'ve learned.',
      cta: 'Take a quiz'
    },
    {
      icon: Map, theme: 'blue',
      title: 'Learning Path',
      desc: 'Your structured journey from first words to confident conversations.',
      cta: 'View path'
    }
  ];

  return (
    <div className="ap-root">
      <div className="ap-container">
        
        <LearnHero 
          kickerText="Moroccan Arabic"
          title="Speak the language of the streets, souks, and smiles"
          description="Darija is how Morocco really talks. Learn the phrases that turn you from a tourist into a welcomed guest."
          onBack={() => navigate('/languages')}
        >
          <StatsBar stats={stats} />
        </LearnHero>

        <section className="ap-section">
          <div className="ap-grid ap-grid--4">
            {modules.map((mod, i) => {
              const IconComp = mod.icon;
              return (
                <button 
                  key={mod.title}
                  className={`ap-card ap-animate ap-animate-${(i % 4) + 1}`}
                >
                  <div className={`ap-card__icon ap-card__icon--${mod.theme}`}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="ap-card__title">{mod.title}</h3>
                  <p className="ap-card__desc">{mod.desc}</p>
                  <div className="ap-card__cta">
                    {mod.cta} <ArrowRight size={15} />
                  </div>
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

export default DarijaPage;
