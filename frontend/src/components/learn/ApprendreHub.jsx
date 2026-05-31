import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Compass, Coffee, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../accueil/LanguageContext';
import { loadProgress } from './data/gamificationEngine';

import LearnHero from './components/LearnHero';
import StatsBar from './components/StatsBar';
import DailyCard from './components/DailyCard';
import ThemeToggle from './components/ThemeToggle';
import './apprendre.css';

const ApprendreHub = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    const progress = loadProgress();
    setStats(progress.stats);
  }, []);

  if (!stats) return <div className="ap-loading">Loading...</div>;

  return (
    <div className="ap-root">
      <div className="ap-container">
        
        {/* ─── HERO: Emotional first impression ─── */}
        <LearnHero 
          kickerText="Your Travel Companion"
          title="Discover Morocco through its languages and culture"
          description="Learn the words, sounds, and traditions that will transform your journey from sightseeing into a genuine cultural experience."
        >
          <StatsBar stats={stats} />
        </LearnHero>

        {/* ─── MAIN LEARNING PATHS: 3 pillars ─── */}
        <section className="ap-section">
          <div className="ap-grid ap-grid--3">
            
            {/* Darija */}
            <button 
              className="ap-card ap-card--path ap-animate ap-animate-1" 
              onClick={() => navigate('/languages/darija')}
              aria-label="Learn Darija"
            >
              <div className="ap-card__icon ap-card__icon--orange">
                <MessageCircle size={22} />
              </div>
              <div className="ap-card__eyebrow">Language</div>
              <h3 className="ap-card__title">Learn Darija</h3>
              <p className="ap-card__desc">
                Speak like a local. Essential phrases, conversations, and vocabulary for every moment of your trip.
              </p>
              <div className="ap-card__cta">
                Begin learning <ArrowRight size={15} />
              </div>
            </button>
            
            {/* Tifinagh */}
            <button 
              className="ap-card ap-card--path ap-animate ap-animate-2" 
              onClick={() => navigate('/languages/tifinagh')}
              aria-label="Learn Tifinagh"
            >
              <div className="ap-card__icon ap-card__icon--blue">
                <Compass size={22} />
              </div>
              <div className="ap-card__eyebrow">Script</div>
              <h3 className="ap-card__title">Learn Tifinagh</h3>
              <p className="ap-card__desc">
                Read the ancient Amazigh alphabet. Decode the signs, monuments, and inscriptions you'll encounter.
              </p>
              <div className="ap-card__cta">
                Start reading <ArrowRight size={15} />
              </div>
            </button>
            
            {/* Culture */}
            <button 
              className="ap-card ap-card--path ap-animate ap-animate-3" 
              onClick={() => navigate('/languages/culture')}
              aria-label="Culture & Travel Tips"
            >
              <div className="ap-card__icon ap-card__icon--green">
                <Coffee size={22} />
              </div>
              <div className="ap-card__eyebrow">Culture</div>
              <h3 className="ap-card__title">Culture & Tips</h3>
              <p className="ap-card__desc">
                Understand the customs, etiquette, and traditions that will earn you respect and genuine connections.
              </p>
              <div className="ap-card__cta">
                Explore culture <ArrowRight size={15} />
              </div>
            </button>
          </div>
        </section>

        {/* ─── DAILY DISCOVERY ─── */}
        <section className="ap-section ap-animate ap-animate-4">
          <div className="ap-section__header">
            <h2 className="ap-section__title">Today's Discovery</h2>
          </div>
          
          <div className="ap-grid ap-grid--2">
            <DailyCard 
              icon={MessageCircle}
              label="Phrase of the Day"
              title="Bchhal hada?"
              subtitle="How much is this? — Essential for navigating the souks."
            />
            <DailyCard 
              icon={MapPin}
              label="Did You Know"
              title="The Art of Atay"
              subtitle="Moroccan mint tea is poured from a height to create a light foam — a sign of hospitality."
            />
          </div>
        </section>
        
        {/* ─── QUICK ACCESS ─── */}
        <section className="ap-section ap-animate ap-animate-4">
          <div className="ap-section__header">
            <h2 className="ap-section__title">Continue Practicing</h2>
            <button className="ap-section__link" onClick={() => navigate('/languages/quizzes')}>
              Quiz Arena <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="ap-grid ap-grid--2">
            <button className="ap-card" onClick={() => navigate('/languages/quizzes')}>
              <div className="ap-card__icon ap-card__icon--orange">
                <MessageCircle size={22} />
              </div>
              <h3 className="ap-card__title">Vocabulary Quiz</h3>
              <p className="ap-card__desc">Test your Darija knowledge with quick challenges.</p>
              <div className="ap-card__cta">Start quiz <ArrowRight size={15} /></div>
            </button>
            
            <button className="ap-card" onClick={() => navigate('/languages/progress')}>
              <div className="ap-card__icon ap-card__icon--blue">
                <Compass size={22} />
              </div>
              <h3 className="ap-card__title">Your Progress</h3>
              <p className="ap-card__desc">Track your journey, achievements, and learning streaks.</p>
              <div className="ap-card__cta">View progress <ArrowRight size={15} /></div>
            </button>
          </div>
        </section>
      </div>
      
      <ThemeToggle />
    </div>
  );
};

export default ApprendreHub;
