import React from 'react';

const DailyCard = ({ icon: Icon, label, title, subtitle }) => {
  return (
    <div className="ap-daily">
      <div className="ap-daily__icon">
        {Icon && <Icon size={28} />}
      </div>
      <div className="ap-daily__content">
        <div className="ap-daily__label">{label}</div>
        <h4 className="ap-daily__text">{title}</h4>
        <p className="ap-daily__sub">{subtitle}</p>
      </div>
    </div>
  );
};

export default DailyCard;
