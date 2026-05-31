import React from 'react';

const ProgressBar = ({ progress = 0, thin = false, className = "" }) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className={`ap-progress ${thin ? 'ap-progress--thin' : ''} ${className}`}>
      <div 
        className="ap-progress__fill" 
        style={{ width: `${normalizedProgress}%` }}
        role="progressbar" 
        aria-valuenow={normalizedProgress} 
        aria-valuemin="0" 
        aria-valuemax="100"
      />
    </div>
  );
};

export default ProgressBar;
