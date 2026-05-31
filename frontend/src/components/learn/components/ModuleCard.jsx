import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProgressBar from './ProgressBar';

const ModuleCard = ({ 
  icon: Icon, 
  iconTheme = 'orange', // orange, green, blue
  eyebrow, 
  title, 
  description, 
  metaInfo,
  progress = 0, 
  ctaText = "Continue", 
  onClick,
  className = ""
}) => {
  return (
    <button className={`ap-card ${className}`} onClick={onClick} aria-label={title}>
      <div className={`ap-card__icon ap-card__icon--${iconTheme}`}>
        {Icon && <Icon size={24} />}
      </div>
      
      {eyebrow && <div className="ap-card__eyebrow">{eyebrow}</div>}
      <h3 className="ap-card__title">{title}</h3>
      <p className="ap-card__desc">{description}</p>
      
      {metaInfo && <div className="ap-card__meta">{metaInfo}</div>}
      
      {(progress > 0 || progress === 0) && (
        <ProgressBar progress={progress} thin />
      )}
      
      <div className="ap-card__cta">
        {ctaText}
        <ChevronRight size={16} />
      </div>
    </button>
  );
};

export default ModuleCard;
