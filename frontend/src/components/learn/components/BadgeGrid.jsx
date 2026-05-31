import React from 'react';
import { Award, BookOpen, MessageCircle, Star, Zap, Compass, Heart } from 'lucide-react';

const ICON_MAP = {
  'Flag': Award,
  'Calendar': BookOpen,
  'Target': Star,
  'Zap': Zap,
  'MessageCircle': MessageCircle,
  'Book': BookOpen,
  'Compass': Compass,
  'Heart': Heart
};

const BadgeGrid = ({ achievements = [], unlockedIds = [] }) => {
  return (
    <div className="ap-grid ap-grid--4">
      {achievements.map((achievement) => {
        const isUnlocked = unlockedIds.includes(achievement.id);
        const IconComponent = ICON_MAP[achievement.icon] || Star;
        
        return (
          <div 
            key={achievement.id} 
            className={`ap-badge ${!isUnlocked ? 'ap-badge--locked' : ''}`}
          >
            <div 
              className="ap-badge__icon" 
              style={{ 
                backgroundColor: isUnlocked ? `${achievement.color}20` : 'var(--ap-border)',
                color: isUnlocked ? achievement.color : 'var(--ap-text-muted)'
              }}
            >
              <IconComponent size={24} />
            </div>
            <div className="ap-badge__name">{achievement.title}</div>
            <div className="ap-badge__desc">{achievement.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BadgeGrid;
