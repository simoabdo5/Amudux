import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Map, Compass, Utensils, Calendar, Shield, Users, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../accueil/LanguageContext';
import { loadProgress } from './data/gamificationEngine';

import LearnHero from './components/LearnHero';
import StatsBar from './components/StatsBar';
import ThemeToggle from './components/ThemeToggle';
import './apprendre.css';

const CulturePage = () => {
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
      icon: Users, theme: 'orange',
      title: 'Social Etiquette',
      desc: 'How to greet, accept invitations, and show respect — the unwritten rules.',
      cta: 'Learn etiquette'
    },
    {
      icon: Coffee, theme: 'green',
      title: 'Tea Ceremony',
      desc: 'Moroccan mint tea isn\'t a drink — it\'s a language of hospitality.',
      cta: 'Discover the ritual'
    },
    {
      icon: Shield, theme: 'blue',
      title: 'Art of Bargaining',
      desc: 'Navigate the souks with confidence. It\'s a social dance, not a fight.',
      cta: 'Master the art'
    },
    {
      icon: Compass, theme: 'orange',
      title: 'Getting Around',
      desc: 'Petit taxis, grand taxis, trains — how locals actually move between cities.',
      cta: 'Navigate Morocco'
    },
    {
      icon: Utensils, theme: 'green',
      title: 'Food & Dining',
      desc: 'Eating with your hands, sharing tagine, and the etiquette of Moroccan tables.',
      cta: 'Explore cuisine'
    },
    {
      icon: Calendar, theme: 'blue',
      title: 'Ramadan',
      desc: 'What changes during the holy month, and how to travel respectfully.',
      cta: 'Prepare for Ramadan'
    },
    {
      icon: Map, theme: 'green',
      title: 'Regional Traditions',
      desc: 'From Berber villages in the Atlas to fishing towns on the coast.',
      cta: 'Explore regions'
    },
    {
      icon: MapPin, theme: 'orange',
      title: 'Daily Discoveries',
      desc: 'Bite-sized cultural insights — one for every day of your trip.',
      cta: 'Today\'s discovery'
    }
  ];

  return (
    <div className="ap-root">
      <div className="ap-container">
        
        <LearnHero 
          kickerText="Culture & Travel"
          title="Understand the soul of Morocco"
          description="The customs, rituals, and social codes that transform a visit into a meaningful cultural exchange."
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

export default CulturePage;
