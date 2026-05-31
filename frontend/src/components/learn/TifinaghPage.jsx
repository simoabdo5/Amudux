import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, BookOpen, PenTool, Mic, MapPin, Search, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../accueil/LanguageContext';
import { loadProgress } from './data/gamificationEngine';

import LearnHero from './components/LearnHero';
import StatsBar from './components/StatsBar';
import ThemeToggle from './components/ThemeToggle';
import './apprendre.css';

const TifinaghPage = () => {
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
      title: 'Alphabet Learning',
      desc: 'Master all 33 Neo-Tifinagh letters — their shapes, sounds, and stories.',
      cta: 'Start learning'
    },
    {
      icon: PenTool, theme: 'blue',
      title: 'Writing Practice',
      desc: 'Trace each character. Understand stroke order and calligraphic form.',
      cta: 'Practice writing'
    },
    {
      icon: Mic, theme: 'green',
      title: 'Pronunciation Lab',
      desc: 'Hear native speakers. Learn the sounds that connect you to Amazigh culture.',
      cta: 'Listen & repeat'
    },
    {
      icon: Globe, theme: 'orange',
      title: 'Daily Letter',
      desc: 'One letter per day — its meaning, usage, and cultural significance.',
      cta: 'Today\'s letter'
    },
    {
      icon: MapPin, theme: 'blue',
      title: 'Tifinagh in Morocco',
      desc: 'Spot these ancient symbols on street signs, buildings, and monuments during your trip.',
      cta: 'Explore locations'
    },
    {
      icon: Search, theme: 'green',
      title: 'Amazigh Heritage',
      desc: 'The history, symbols, and living traditions of the Imazighen people.',
      cta: 'Discover more'
    },
    {
      icon: Award, theme: 'orange',
      title: 'Quiz Arena',
      desc: 'Test your recognition speed and accuracy. Earn XP with every correct answer.',
      cta: 'Take a quiz'
    },
    {
      icon: Globe, theme: 'blue',
      title: 'Your Roadmap',
      desc: 'Track your progress from first letter to full alphabet mastery.',
      cta: 'View progress'
    }
  ];

  return (
    <div className="ap-root">
      <div className="ap-container">
        
        <LearnHero 
          kickerText="Tifinagh Script"
          title="Read the oldest alphabet in North Africa"
          description="From ancient rock carvings to modern street signs — Tifinagh connects you to 3,000 years of Amazigh heritage."
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

export default TifinaghPage;
