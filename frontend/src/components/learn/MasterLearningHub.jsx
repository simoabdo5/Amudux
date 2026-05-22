import React, { useState, useEffect } from "react";
import { Compass, Map, MessageCircle, Sparkles } from "lucide-react";
import TifinaghHub from "./TifinaghHub";
import DarijaHub from "./DarijaHub";
import { loadProgress } from "./data/gamificationEngine";
import "./LearnHub.css";

const MasterLearningHub = () => {
  const [activeHub, setActiveHub] = useState(null);
  const [stats, setStats] = useState(null);
  const [currentRank, setCurrentRank] = useState(null);

  useEffect(() => {
    if (!activeHub) {
      const progress = loadProgress();
      setStats(progress.stats);
      setCurrentRank(progress.currentRank);
    }
  }, [activeHub]);

  if (activeHub === "tifinagh") {
    return <TifinaghHub onBack={() => setActiveHub(null)} />;
  }

  if (activeHub === "darija") {
    return <DarijaHub onBack={() => setActiveHub(null)} />;
  }

  if (!stats || !currentRank) {
    return <div className="learn-loading">Chargement de l'espace d'apprentissage...</div>;
  }

  return (
    <div className="learn-hub-container">
      <div className="learn-content-z learn-portal-shell">
        <section className="learn-hero-band">
          <div className="learn-kicker">
            <Sparkles size={14} />
            <span>Learn Darija</span>
          </div>

          <h1 className="learn-hero-title">Une immersion plus vivante, plus fluide, plus proche du Maroc reel.</h1>
          <p className="learn-hero-copy">
            Entrez dans un parcours pense pour le voyage, les conversations du quotidien et les reperes
            culturels, tout en gardant l'esprit chaleureux et moderne d'AMUDUX.
          </p>

          <div className="learn-hero-metrics">
            <div className="learn-metric">
              <strong>{stats.xp}</strong>
              <span>XP cumules</span>
            </div>
            <div className="learn-metric">
              <strong>{stats.streak}</strong>
              <span>jours actifs</span>
            </div>
            <div className="learn-metric">
              <strong>{currentRank.title}</strong>
              <span>rang actuel</span>
            </div>
          </div>
        </section>

        <section className="learn-path-grid">
          <button
            type="button"
            className="learn-path-card learn-path-card--primary"
            onClick={() => setActiveHub("darija")}
          >
            <div className="learn-path-card__icon">
              <MessageCircle size={26} />
            </div>
            <div className="learn-path-card__eyebrow">Parcours recommande</div>
            <h2 className="learn-path-card__title">Immersion Darija</h2>
            <p className="learn-path-card__desc">
              Travaillez les mots utiles, les scenes de voyage et les reponses naturelles
              que vous entendrez dans un cafe, un taxi ou au souk.
            </p>
            <div className="learn-path-card__tags">
              <span className="learn-tag">salutations</span>
              <span className="learn-tag">prix et nego</span>
              <span className="learn-tag">situations reelles</span>
              <span className="learn-tag">audio</span>
            </div>
            <span className="learn-path-card__cta">Entrer dans Darija</span>
          </button>

          <button
            type="button"
            className="learn-path-card"
            onClick={() => setActiveHub("tifinagh")}
          >
            <div className="learn-path-card__icon learn-path-card__icon--secondary">
              <Compass size={26} />
            </div>
            <div className="learn-path-card__eyebrow">Exploration culturelle</div>
            <h2 className="learn-path-card__title">Heritage Tifinagh</h2>
            <p className="learn-path-card__desc">
              Decouvrez l'alphabet amazigh, la calligraphie et les reperes culturels qui
              enrichissent l'experience Darija sans casser la coherence du parcours.
            </p>
            <div className="learn-path-card__tags">
              <span className="learn-tag">alphabet</span>
              <span className="learn-tag">quiz</span>
              <span className="learn-tag">culture</span>
            </div>
            <span className="learn-path-card__cta learn-path-card__cta--secondary">
              Explorer Tifinagh
            </span>
          </button>
        </section>

        <section className="learn-glass-panel learn-guide-strip">
          <div className="learn-guide-strip__label">
            <Map size={18} />
            <span>Avant de commencer</span>
          </div>
          <div className="learn-guide-strip__content">
            <span className="learn-guide-pill">Salam</span>
            <span className="learn-guide-pill">Labas ?</span>
            <span className="learn-guide-pill">Shukran</span>
            <span className="learn-guide-pill">Bslama</span>
            <p>
              Le hub Darija avance par petites scenes memorables pour vous aider a retenir les mots
              dans leur vrai contexte, pas comme une simple liste de vocabulaire.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MasterLearningHub;
