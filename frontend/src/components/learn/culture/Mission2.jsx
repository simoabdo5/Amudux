import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight, ArrowLeft, CheckCircle, XCircle, ShoppingBag, AlertTriangle, Award, Lock } from "lucide-react";
import { useLanguage } from "../../accueil/LanguageContext";
import "../darija/mission.css";

const STEPS = ["intro", "culture", "situations", "mistakes", "challenge", "quiz", "completion"];

function CultureMission2() {
  const { t, lang, isRTL } = useLanguage();
  const navigate = useNavigate();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Situations State
  const [currentSituationIndex, setCurrentSituationIndex] = useState(0);
  const [situationFeedback, setSituationFeedback] = useState(null);

  // Challenge State
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [challengeFeedback, setChallengeFeedback] = useState(null);

  // Quiz State
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStepIndex]);

  const step = STEPS[currentStepIndex];
  const progressPercent = (currentStepIndex / (STEPS.length - 1)) * 100;

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  // ── Culture Cards ──
  const cultureCards = [
    { icon: "👋", title: t("cultureM2CultureCard1Title"), desc: t("cultureM2CultureCard1Desc") },
    { icon: "⏳", title: t("cultureM2CultureCard2Title"), desc: t("cultureM2CultureCard2Desc") },
    { icon: "💰", title: t("cultureM2CultureCard3Title"), desc: t("cultureM2CultureCard3Desc") },
    { icon: "😊", title: t("cultureM2CultureCard4Title"), desc: t("cultureM2CultureCard4Desc") }
  ];

  // ── Situations Data ──
  const situationsData = [
    {
      q: t("cultureM2Sit1Q"),
      options: [t("cultureM2Sit1A1"), t("cultureM2Sit1A2")],
      correctIdx: 0,
      feedbackCorrect: t("cultureM2Sit1FeedbackCorrect"),
      feedbackWrong: t("cultureM2Sit1FeedbackWrong"),
    },
    {
      q: t("cultureM2Sit2Q"),
      options: [t("cultureM2Sit2A1"), t("cultureM2Sit2A2")],
      correctIdx: 1,
      feedbackCorrect: t("cultureM2Sit2FeedbackCorrect"),
      feedbackWrong: t("cultureM2Sit2FeedbackWrong"),
    },
    {
      q: t("cultureM2Sit3Q"),
      options: [t("cultureM2Sit3A1"), t("cultureM2Sit3A2")],
      correctIdx: 1,
      feedbackCorrect: t("cultureM2Sit3FeedbackCorrect"),
      feedbackWrong: t("cultureM2Sit3FeedbackWrong"),
    }
  ];

  // ── Mistakes Data ──
  const mistakesData = [
    { title: t("cultureM2Mistake1Title"), bad: t("cultureM2Mistake1Bad"), good: t("cultureM2Mistake1Good") },
    { title: t("cultureM2Mistake2Title"), bad: t("cultureM2Mistake2Bad"), good: t("cultureM2Mistake2Good") },
    { title: t("cultureM2Mistake3Title"), bad: t("cultureM2Mistake3Bad"), good: t("cultureM2Mistake3Good") }
  ];

  // ── Challenge Data ──
  const challengeData = [
    {
      q: t("cultureM2Ch1Q"),
      options: [t("cultureM2Ch1A1"), t("cultureM2Ch1A2"), t("cultureM2Ch1A3")],
      correctIdx: 0,
      feedbackCorrect: t("cultureM2Ch1FeedbackCorrect"),
      feedbackWrong: t("cultureM2Ch1FeedbackWrong"),
    },
    {
      q: t("cultureM2Ch2Q"),
      options: [t("cultureM2Ch2A1"), t("cultureM2Ch2A2"), t("cultureM2Ch2A3")],
      correctIdx: 0,
      feedbackCorrect: t("cultureM2Ch2FeedbackCorrect"),
      feedbackWrong: t("cultureM2Ch2FeedbackWrong"),
    }
  ];

  // ── Quiz Data ──
  const quizData = [
    {
      q: t("cultureM2QuizQ1"),
      options: [t("cultureM2QuizQ1O1"), t("cultureM2QuizQ1O2"), t("cultureM2QuizQ1O3")],
      answer: 0
    },
    {
      q: t("cultureM2QuizQ2"),
      options: [t("cultureM2QuizQ2O1"), t("cultureM2QuizQ2O2"), t("cultureM2QuizQ2O3")],
      answer: 0
    },
    {
      q: t("cultureM2QuizQ3"),
      options: [t("cultureM2QuizQ3O1"), t("cultureM2QuizQ3O2"), t("cultureM2QuizQ3O3")],
      answer: 0
    }
  ];

  // ── Handlers ──
  const handleSituationAnswer = (idx) => {
    if (situationFeedback) return;
    const isCorrect = idx === situationsData[currentSituationIndex].correctIdx;
    setSituationFeedback(isCorrect ? "correct" : "wrong");
  };

  const handleNextSituation = () => {
    if (currentSituationIndex < situationsData.length - 1) {
      setCurrentSituationIndex(prev => prev + 1);
      setSituationFeedback(null);
    } else {
      handleNext();
    }
  };

  const handleChallengeAnswer = (idx) => {
    if (challengeFeedback) return;
    const isCorrect = idx === challengeData[challengeIndex].correctIdx;
    setChallengeFeedback(isCorrect ? "correct" : "wrong");
  };

  const handleNextChallenge = () => {
    if (challengeIndex < challengeData.length - 1) {
      setChallengeIndex(prev => prev + 1);
      setChallengeFeedback(null);
    } else {
      handleNext();
    }
  };

  const handleQuizAnswer = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    const isCorrect = idx === quizData[quizQuestionIndex].answer;
    setQuizFeedback(isCorrect ? "correct" : "wrong");

    setTimeout(() => {
      if (isCorrect) {
        if (quizQuestionIndex < quizData.length - 1) {
          setQuizQuestionIndex(prev => prev + 1);
          setSelectedOption(null);
          setQuizFeedback(null);
        } else {
          handleNext();
        }
      } else {
        setSelectedOption(null);
        setQuizFeedback(null);
      }
    }, 1500);
  };

  return (
    <div className={`mission-container culture-theme ${isRTL ? "rtl" : "ltr"}`}>
      {/* ── Header / Progress ── */}
      <div className="mission-header">
        <button className="mission-close" onClick={() => navigate("/languages")}>
          <X size={24} />
        </button>
        <div className="mission-progress-bar">
          <div className="mission-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mission-content"
        >
          {/* ══════════════════════════════════════════
              STEP 1 — Welcome to the Souk
              ══════════════════════════════════════════ */}
          {step === "intro" && (
            <div className="intro-step">
              <div className="intro-icon">
                <ShoppingBag size={40} />
              </div>
              <h1 className="intro-title">{t("cultureM2Title")}</h1>
              <p className="intro-desc">{t("cultureM2IntroDesc")}</p>
              <button className="mission-btn" onClick={handleNext}>
                {lang === "FR" ? "Commencer la mission" : lang === "AR" ? "ابدأ المهمة" : "Start Mission"}
              </button>
            </div>
          )}

          {/* ══════════════════════════════════════════
              STEP 2 — Market Culture
              ══════════════════════════════════════════ */}
          {step === "culture" && (
            <div>
              <h2 className="step-title">{t("cultureM2CultureTitle")}</h2>
              <p className="step-subtitle">{t("cultureM2CultureDesc")}</p>

              <div className="vocab-grid">
                {cultureCards.map((card, idx) => (
                  <div key={idx} className="vocab-card" style={{ alignItems: "center", textAlign: "center" }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: "50%",
                      background: "rgba(21,128,61,0.1)", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      marginBottom: 16, fontSize: "1.8rem"
                    }}>
                      {card.icon}
                    </div>
                    <div className="vocab-word" style={{ fontSize: "1.1rem", marginBottom: 8 }}>{card.title}</div>
                    <p style={{ color: "var(--learn-text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════
              STEP 3 — Real Situations
              ══════════════════════════════════════════ */}
          {step === "situations" && (() => {
            const currentSit = situationsData[currentSituationIndex];
            return (
              <div>
                <h2 className="step-title" style={{ textAlign: "center" }}>{t("cultureM2SitTitle")}</h2>
                <p className="step-subtitle" style={{ textAlign: "center" }}>
                  {t("cultureM2SitDesc")} ({currentSituationIndex + 1}/{situationsData.length})
                </p>

                <div style={{
                  background: "var(--learn-card-bg)", borderRadius: 20,
                  padding: "32px 24px", border: "2px solid var(--learn-border)",
                  maxWidth: 600, margin: "0 auto"
                }}>
                  <div className="quiz-question">{currentSit.q}</div>

                  <div className="quiz-options">
                    {currentSit.options.map((opt, idx) => {
                      let btnClass = "quiz-option";
                      if (situationFeedback) {
                        if (idx === currentSit.correctIdx) btnClass += " correct";
                        else btnClass += " wrong";
                      }
                      return (
                        <button
                          key={idx}
                          className={btnClass}
                          onClick={() => handleSituationAnswer(idx)}
                          disabled={situationFeedback !== null}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {situationFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          padding: "16px 20px", borderRadius: 16, marginTop: 16,
                          background: situationFeedback === "correct" ? "rgba(52,199,89,0.1)" : "rgba(255,59,48,0.1)",
                          color: situationFeedback === "correct" ? "#34c759" : "#ff3b30",
                          display: "flex", flexDirection: "column", gap: 12
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          {situationFeedback === "correct" ? <CheckCircle size={22} /> : <XCircle size={22} />}
                          <span style={{ fontWeight: 600, lineHeight: 1.4 }}>
                            {situationFeedback === "correct" ? currentSit.feedbackCorrect : currentSit.feedbackWrong}
                          </span>
                        </div>
                        {situationFeedback === "correct" && (
                          <button className="mission-btn" style={{ alignSelf: "center", marginTop: 8 }} onClick={handleNextSituation}>
                            {lang === "FR" ? "Continuer" : lang === "AR" ? "متابعة" : "Continue"}
                            <ArrowRight size={18} />
                          </button>
                        )}
                        {situationFeedback === "wrong" && (
                          <button
                            className="mission-btn secondary"
                            style={{ alignSelf: "center", marginTop: 8 }}
                            onClick={() => setSituationFeedback(null)}
                          >
                            {lang === "FR" ? "Réessayer" : lang === "AR" ? "حاول مرة أخرى" : "Retry"}
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })()}

          {/* ══════════════════════════════════════════
              STEP 4 — Common Mistakes
              ══════════════════════════════════════════ */}
          {step === "mistakes" && (
            <div>
              <h2 className="step-title" style={{ textAlign: "center" }}>
                <AlertTriangle size={24} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />
                {t("cultureM2MistakesTitle")}
              </h2>
              <p className="step-subtitle" style={{ textAlign: "center" }}>{t("cultureM2MistakesDesc")}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 600, margin: "0 auto" }}>
                {mistakesData.map((m, idx) => (
                  <div key={idx} style={{
                    background: "var(--learn-card-bg)", borderRadius: 20,
                    padding: "24px", border: "1px solid var(--learn-border)"
                  }}>
                    <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 16, color: "var(--learn-text)" }}>
                      {m.title}
                    </h3>

                    {/* Bad example */}
                    <div style={{
                      display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12,
                      padding: "12px 16px", borderRadius: 12,
                      background: "rgba(255,59,48,0.08)", border: "1px solid rgba(255,59,48,0.2)"
                    }}>
                      <XCircle size={20} style={{ color: "#ff3b30", flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: "#ff3b30", fontWeight: 500, lineHeight: 1.5 }}>{m.bad}</span>
                    </div>

                    {/* Good example */}
                    <div style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "12px 16px", borderRadius: 12,
                      background: "rgba(52,199,89,0.08)", border: "1px solid rgba(52,199,89,0.2)"
                    }}>
                      <CheckCircle size={20} style={{ color: "#34c759", flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: "#34c759", fontWeight: 500, lineHeight: 1.5 }}>{m.good}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════
              STEP 5 — Interactive Bargaining Challenge
              ══════════════════════════════════════════ */}
          {step === "challenge" && (() => {
            const ch = challengeData[challengeIndex];
            return (
              <div>
                <h2 className="step-title" style={{ textAlign: "center" }}>{t("cultureM2ChallengeTitle")}</h2>
                <p className="step-subtitle" style={{ textAlign: "center" }}>
                  {t("cultureM2ChallengeDesc")} ({challengeIndex + 1}/{challengeData.length})
                </p>

                <div style={{
                  background: "var(--learn-card-bg)", borderRadius: 20,
                  padding: "32px 24px", border: "2px solid var(--learn-border)",
                  maxWidth: 600, margin: "0 auto"
                }}>
                  <div className="quiz-question">{ch.q}</div>

                  <div className="quiz-options">
                    {ch.options.map((opt, idx) => {
                      let btnClass = "quiz-option";
                      if (challengeFeedback) {
                        if (idx === ch.correctIdx) btnClass += " correct";
                        else btnClass += " wrong";
                      }
                      return (
                        <button
                          key={idx}
                          className={btnClass}
                          onClick={() => handleChallengeAnswer(idx)}
                          disabled={challengeFeedback !== null}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {challengeFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          padding: "16px 20px", borderRadius: 16, marginTop: 16,
                          background: challengeFeedback === "correct" ? "rgba(52,199,89,0.1)" : "rgba(255,59,48,0.1)",
                          color: challengeFeedback === "correct" ? "#34c759" : "#ff3b30",
                          display: "flex", flexDirection: "column", gap: 12
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          {challengeFeedback === "correct" ? <CheckCircle size={22} /> : <XCircle size={22} />}
                          <span style={{ fontWeight: 600, lineHeight: 1.4 }}>
                            {challengeFeedback === "correct" ? ch.feedbackCorrect : ch.feedbackWrong}
                          </span>
                        </div>
                        {challengeFeedback === "correct" && (
                          <button className="mission-btn" style={{ alignSelf: "center", marginTop: 8 }} onClick={handleNextChallenge}>
                            {lang === "FR" ? "Continuer" : lang === "AR" ? "متابعة" : "Continue"}
                            <ArrowRight size={18} />
                          </button>
                        )}
                        {challengeFeedback === "wrong" && (
                          <button
                            className="mission-btn secondary"
                            style={{ alignSelf: "center", marginTop: 8 }}
                            onClick={() => setChallengeFeedback(null)}
                          >
                            {lang === "FR" ? "Réessayer" : lang === "AR" ? "حاول مرة أخرى" : "Retry"}
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })()}

          {/* ══════════════════════════════════════════
              STEP 6 — Cultural Quiz
              ══════════════════════════════════════════ */}
          {step === "quiz" && (
            <div>
              <h2 className="step-title" style={{ textAlign: "center" }}>{t("cultureM2QuizTitle")}</h2>
              <p className="step-subtitle" style={{ textAlign: "center" }}>
                {lang === "FR" ? `Question ${quizQuestionIndex + 1} sur ${quizData.length}` :
                  lang === "AR" ? `السؤال ${quizQuestionIndex + 1} من ${quizData.length}` :
                  `Question ${quizQuestionIndex + 1} of ${quizData.length}`}
              </p>

              <div className="quiz-card" style={{ maxWidth: 600, margin: "0 auto" }}>
                <div className="quiz-question">{quizData[quizQuestionIndex].q}</div>

                <div className="quiz-options">
                  {quizData[quizQuestionIndex].options.map((opt, idx) => {
                    let btnClass = "quiz-option";
                    if (selectedOption === idx) {
                      if (quizFeedback === "correct") btnClass += " correct";
                      else if (quizFeedback === "wrong") btnClass += " wrong";
                      else btnClass += " selected";
                    } else if (selectedOption !== null && idx === quizData[quizQuestionIndex].answer && quizFeedback === "wrong") {
                      btnClass += " correct";
                    }

                    return (
                      <button
                        key={idx}
                        className={btnClass}
                        onClick={() => handleQuizAnswer(idx)}
                        disabled={selectedOption !== null}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <div className={`quiz-feedback ${quizFeedback ? (quizFeedback === "correct" ? "correct-text" : "wrong-text") : ""}`}>
                  {quizFeedback === "correct" && (lang === "FR" ? "Excellent !" : lang === "AR" ? "ممتاز!" : "Excellent!")}
                  {quizFeedback === "wrong" && (lang === "FR" ? "Oops, essayez encore." : lang === "AR" ? "عفوا، حاول مرة أخرى." : "Oops, try again.")}
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════
              STEP 7 — Completion
              ══════════════════════════════════════════ */}
          {step === "completion" && (
            <div className="completion-step">
              <div className="completion-icon">
                <Award size={48} />
              </div>
              <h1 className="intro-title">{t("cultureM2CompleteTitle")}</h1>
              <p className="intro-desc">{t("cultureM2CompleteDesc")}</p>

              {/* Progression */}
              <div style={{ marginTop: '30px', textAlign: 'left', background: 'var(--learn-surface)', padding: '20px', borderRadius: '16px', border: '1px solid var(--learn-border)', width: '100%', maxWidth: '400px' }}>
                <h4 style={{ marginBottom: '16px', fontSize: '1.1rem', fontWeight: 600 }}>
                  {lang === "FR" ? "Progression" : lang === "AR" ? "التقدم" : "Progression"}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#10b981' }}>
                    <CheckCircle size={20} />
                    <span style={{ fontWeight: 500 }}>{lang === "FR" ? "Mission 1 : Hospitalité Marocaine" : lang === "AR" ? "المهمة 1: الضيافة المغربية" : "Mission 1: Moroccan Hospitality"} ✅</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#10b981' }}>
                    <CheckCircle size={20} />
                    <span style={{ fontWeight: 500 }}>{lang === "FR" ? "Mission 2 : Marchés & Négociation" : lang === "AR" ? "المهمة 2: الأسواق والمساومة" : "Mission 2: Markets & Bargaining"} ✅</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--learn-text-secondary)', opacity: 0.7 }}>
                    <Lock size={20} />
                    <span>{t("cultureM2NextUnlock")} 🔒</span>
                  </div>
                </div>
              </div>

              <button className="mission-btn" style={{ marginTop: 40 }} onClick={() => navigate("/languages")}>
                <CheckCircle size={20} />
                {lang === "FR" ? "Retour à l'accueil" : lang === "AR" ? "العودة للرئيسية" : "Return to Hub"}
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Footer Navigation (visible on culture & mistakes steps) ── */}
      {(step === "culture" || step === "mistakes") && (
        <div className="mission-footer">
          <button className="mission-btn secondary" onClick={handleBack}>
            <ArrowLeft size={18} />
            {lang === "FR" ? "Précédent" : lang === "AR" ? "السابق" : "Back"}
          </button>
          <button className="mission-btn" onClick={handleNext}>
            {lang === "FR" ? "Continuer" : lang === "AR" ? "متابعة" : "Continue"}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default CultureMission2;
