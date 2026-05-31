import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Flame, Star, Award } from 'lucide-react';
import { loadProgress, ACHIEVEMENTS } from './data/gamificationEngine';

import LearnHero from './components/LearnHero';
import StatsBar from './components/StatsBar';
import BadgeGrid from './components/BadgeGrid';
import LevelPath from './components/LevelPath';
import ProgressBar from './components/ProgressBar';
import ThemeToggle from './components/ThemeToggle';
import './apprendre.css';

const ProgressPage = () => {
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState(null);
  
  useEffect(() => {
    const data = loadProgress();
    setProgressData(data);
  }, []);

  if (!progressData) return <div className="ap-loading">Loading...</div>;

  const { stats, currentRank, nextRank, progressPercentage, unlockedAchievements } = progressData;

  return (
    <div className="ap-root">
      <div className="ap-container">
        
        <LearnHero 
          kickerText="Your Journey"
          title="Track your progress"
          description="Every phrase learned, every letter mastered — your Moroccan journey grows here."
          onBack={() => navigate('/languages')}
        >
          <StatsBar stats={stats} />
        </LearnHero>

        {/* Current Rank */}
        <section className="ap-section ap-animate ap-animate-1">
          <div className="ap-section__header">
            <h2 className="ap-section__title">
              <Star size={20} /> Current Rank
            </h2>
          </div>
          
          <div className="ap-card" style={{ cursor: 'default' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ap-text)' }}>
                {currentRank.title}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--ap-text-muted)' }}>
                {stats.xp} XP{nextRank ? ` / ${nextRank.minXp} XP` : ' — Max Rank'}
              </span>
            </div>
            <ProgressBar progress={progressPercentage} />
          </div>
        </section>
        
        {/* Learning Path */}
        <section className="ap-section ap-animate ap-animate-2">
          <div className="ap-section__header">
            <h2 className="ap-section__title">
              <Award size={20} /> Learning Path
            </h2>
          </div>
          
          <div className="ap-card" style={{ paddingLeft: '12px', paddingRight: '12px', overflow: 'hidden', cursor: 'default' }}>
            <LevelPath currentRankLevel={currentRank.level} />
          </div>
        </section>

        {/* Achievements */}
        <section className="ap-section ap-animate ap-animate-3">
          <div className="ap-section__header">
            <h2 className="ap-section__title">
              <Flame size={20} /> Achievements
            </h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--ap-text-muted)' }}>
              {unlockedAchievements.length} / {ACHIEVEMENTS.length} unlocked
            </span>
          </div>
          
          <BadgeGrid 
            achievements={ACHIEVEMENTS} 
            unlockedIds={unlockedAchievements} 
          />
        </section>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default ProgressPage;
