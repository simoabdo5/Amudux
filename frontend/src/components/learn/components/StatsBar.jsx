import React from 'react';

const StatsBar = ({ stats }) => {
  if (!stats) return null;

  return (
    <>
      <div className="ap-stat ap-stat--orange">
        <div className="ap-stat__info">
          <span className="ap-stat__value">{stats.xp || 0} XP</span>
          <span className="ap-stat__label">Total XP</span>
        </div>
      </div>
      
      <div className="ap-stat ap-stat--green">
        <div className="ap-stat__info">
          <span className="ap-stat__value">{stats.streak || 0}</span>
          <span className="ap-stat__label">Day Streak</span>
        </div>
      </div>
      
      <div className="ap-stat ap-stat--blue">
        <div className="ap-stat__info">
          <span className="ap-stat__value">{stats.rank || 'Beginner'}</span>
          <span className="ap-stat__label">Current Rank</span>
        </div>
      </div>
    </>
  );
};

export default StatsBar;
