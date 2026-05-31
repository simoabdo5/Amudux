import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LearnHero = ({ 
  kickerIcon: KickerIcon, 
  kickerText, 
  title, 
  description, 
  subtitle,
  onBack,
  children 
}) => {
  return (
    <section className="ap-hero">
      {onBack && (
        <button type="button" onClick={onBack} className="ap-hero__back" aria-label="Back">
          <ArrowLeft size={18} />
        </button>
      )}
      
      <div className="ap-hero__content">
        {kickerText && (
          <div className="ap-hero__kicker">
            {KickerIcon && <KickerIcon size={14} />}
            <span>{kickerText}</span>
          </div>
        )}
        
        <h1 className="ap-hero__title">{title}</h1>
        {subtitle && <p className="ap-hero__subtitle">{subtitle}</p>}
        {description && <p className="ap-hero__desc">{description}</p>}
        
        {children && (
          <div className="ap-hero__stats">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default LearnHero;
