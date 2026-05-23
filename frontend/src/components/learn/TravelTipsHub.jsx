import React, { useState, useEffect } from "react";
import { useLanguage } from "../accueil/LanguageContext";
import { CheckCircle, Info, MapPin } from "lucide-react";
import { TIP_CATEGORIES, filterTips, getDestinationTips } from "./data/travelTipsData";
import { getDestinationContext } from "./data/destinationContext";

const TravelTipsHub = ({ selectedDestination, onXpEarned }) => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [readTips, setReadTips] = useState([]);
  const [tipsToDisplay, setTipsToDisplay] = useState([]);

  useEffect(() => {
    // If "all" is selected and we have a destination, show destination prioritized tips
    if (activeCategory === "all" && selectedDestination) {
      setTipsToDisplay(getDestinationTips(selectedDestination));
    } else {
      setTipsToDisplay(filterTips(activeCategory, selectedDestination));
    }
  }, [activeCategory, selectedDestination]);

  const destContext = selectedDestination ? getDestinationContext(selectedDestination) : null;

  const markAsRead = (tipId) => {
    if (!readTips.includes(tipId)) {
      setReadTips([...readTips, tipId]);
      if (onXpEarned) {
        onXpEarned(10); // Reward for reading a tip
      }
    }
  };

  return (
    <div className="learn-glass-panel travel-tips-container" style={{ animation: "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
      
      {/* Context Banner */}
      {destContext && (
        <div className="destination-banner" style={{ background: destContext.accentColor, borderColor: destContext.accentColor }}>
          <MapPin size={24} color="var(--text-primary)" />
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#FFF' }}>
              {t("learnPhrasesFor")} {t(destContext.nameKey)}
            </h3>
            <p style={{ margin: '5px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t("learnContextAtmosphere")}: {destContext.atmosphere}
            </p>
          </div>
        </div>
      )}

      {/* Category Pills */}
      <div className="category-pills" style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '15px', marginBottom: '30px' }}>
        {TIP_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: `1px solid ${activeCategory === cat.id ? 'var(--amazigh-amber)' : 'rgba(255,255,255,0.1)'}`,
              background: activeCategory === cat.id ? 'rgba(255, 122, 0, 0.1)' : 'rgba(255,255,255,0.03)',
              color: activeCategory === cat.id ? '#FFF' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
          >
            <span>{cat.icon}</span>
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="tips-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {tipsToDisplay.map((tip, index) => {
          const isRead = readTips.includes(tip.id);
          const isDestSpecific = selectedDestination && tip.destinations.includes(selectedDestination);
          
          return (
            <div 
              key={tip.id} 
              className={`tip-card ${isRead ? 'read' : ''}`}
              onClick={() => markAsRead(tip.id)}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${isDestSpecific ? 'rgba(255, 122, 0, 0.3)' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: '16px',
                padding: '25px',
                position: 'relative',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                animation: `fadeInUp 0.4s ease forwards ${index * 0.05}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              
              {/* Badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>{tip.icon}</span>
                {isDestSpecific && destContext && (
                  <span className="destination-badge" style={{
                    background: destContext.accentColor,
                    color: '#FFF',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {t(destContext.nameKey)}
                  </span>
                )}
                {isRead && (
                  <CheckCircle size={20} color="var(--amazigh-amber)" style={{ opacity: 0.8 }} />
                )}
              </div>

              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: isRead ? 'var(--text-muted)' : '#FFF', transition: 'color 0.3s' }}>
                {t(tip.titleKey)}
              </h4>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {t(tip.contentKey)}
              </p>

              {tip.quickPhrase && (
                <div style={{
                  marginTop: '20px',
                  padding: '12px',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '10px',
                  borderLeft: '3px solid var(--amazigh-amber)',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start'
                }}>
                  <Info size={16} color="var(--amazigh-amber)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: 'var(--amazigh-amber)', fontSize: '0.9rem', fontWeight: '500' }}>{tip.quickPhrase.darija}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontStyle: 'italic' }}>"{t(tip.quickPhrase.key)}"</div>
                  </div>
                </div>
              )}
              
            </div>
          );
        })}
      </div>
      
      {tipsToDisplay.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
          <p>Aucun conseil trouvé pour cette catégorie.</p>
        </div>
      )}

    </div>
  );
};

export default TravelTipsHub;
