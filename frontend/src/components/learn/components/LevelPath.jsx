import React from 'react';

const LevelPath = ({ currentRankLevel, totalLevels = 12 }) => {
  const levels = Array.from({ length: totalLevels }, (_, i) => i + 1);

  return (
    <div className="ap-levels">
      {levels.map((level) => {
        const isActive = level === currentRankLevel;
        const isDone = level < currentRankLevel;
        
        return (
          <div 
            key={level} 
            className={`ap-level ${isActive ? 'ap-level--active' : ''} ${isDone ? 'ap-level--done' : ''}`}
          >
            <div className="ap-level__dot">
              {level}
            </div>
            {level < totalLevels && <div className="ap-level__line" />}
          </div>
        );
      })}
    </div>
  );
};

export default LevelPath;
