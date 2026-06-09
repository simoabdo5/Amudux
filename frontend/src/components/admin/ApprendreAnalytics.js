import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  CheckCircle2,
  Heart,
  Bookmark,
  Users,
  TrendingUp,
} from "lucide-react";
import api from "../../services/api";

// Apprendre learning analytics for the admin dashboard.
//
// Every figure rendered here comes from GET /admin/apprendre-stats, which is
// computed server-side directly from the apprendre_* tables. The component never
// reads localStorage — the database is the only source of truth for admin analytics.

const TRACK_META = {
  darija: { label: "Darija", color: "#d97706" },
  tifinagh: { label: "Tifinagh", color: "#0369a1" },
  culture: { label: "Culture", color: "#10b981" },
};

const STAT_CARDS = [
  { key: "active_learners", label: "Active Learners", icon: Users, tone: "blue" },
  { key: "completions", label: "Missions Completed", icon: CheckCircle2, tone: "green" },
  { key: "favorites", label: "Favorite Lessons", icon: Heart, tone: "rose" },
  { key: "saved_content", label: "Saved Vocabulary", icon: Bookmark, tone: "amber" },
  { key: "missions", label: "Total Missions", icon: GraduationCap, tone: "violet" },
  { key: "completion_rate", label: "Completion Rate", icon: TrendingUp, tone: "cyan", suffix: "%" },
];

function ApprendreAnalytics() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    api
      .get("/admin/apprendre-stats")
      .then((res) => {
        if (active) setStats(res.data);
      })
      .catch((err) => {
        if (active) setError(err?.response?.data?.message || "Failed to load Apprendre analytics");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="apprendre-analytics" aria-label="Apprendre analytics">
        <h2 className="apprendre-analytics-title">Apprendre Analytics</h2>
        <p className="apprendre-analytics-muted">Loading…</p>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section className="apprendre-analytics" aria-label="Apprendre analytics">
        <h2 className="apprendre-analytics-title">Apprendre Analytics</h2>
        <p className="apprendre-analytics-muted">{error || "No data available."}</p>
      </section>
    );
  }

  const { totals, by_track: byTrack, top_missions: topMissions } = stats;

  // Scale bars against the largest completion count so the chart always fills nicely.
  const maxTrackCompletions = Math.max(1, ...byTrack.map((t) => t.completions));
  const maxMissionCompletions = Math.max(1, ...topMissions.map((m) => m.completions));

  return (
    <section className="apprendre-analytics" aria-label="Apprendre analytics">
      <div className="apprendre-analytics-head">
        <h2 className="apprendre-analytics-title">
          <GraduationCap size={20} /> Apprendre Analytics
        </h2>
        <span className="apprendre-analytics-sub">Computed live from the database</span>
      </div>

      {/* Stat cards */}
      <div className="apprendre-stat-grid">
        {STAT_CARDS.map((card) => {
          const Icon = card.icon;
          const value = totals?.[card.key] ?? 0;
          return (
            <article className={`apprendre-stat-card ${card.tone}`} key={card.key}>
              <div className="apprendre-stat-icon">
                <Icon size={18} />
              </div>
              <div>
                <strong>
                  {value}
                  {card.suffix || ""}
                </strong>
                <span>{card.label}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="apprendre-chart-row">
        {/* Completions by track */}
        <div className="apprendre-chart-card">
          <h3>Completions by Track</h3>
          {byTrack.every((t) => t.completions === 0) ? (
            <p className="apprendre-analytics-muted">No completions yet.</p>
          ) : (
            <div className="apprendre-bars">
              {byTrack.map((t) => {
                const meta = TRACK_META[t.track] || { label: t.track, color: "#6b7280" };
                const pct = Math.round((t.completions / maxTrackCompletions) * 100);
                return (
                  <div className="apprendre-bar-row" key={t.track}>
                    <span className="apprendre-bar-label">{meta.label}</span>
                    <div className="apprendre-bar-track">
                      <div
                        className="apprendre-bar-fill"
                        style={{ width: `${pct}%`, background: meta.color }}
                      />
                    </div>
                    <span className="apprendre-bar-value">
                      {t.completions}/{t.missions}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Engagement by track (favorites + saved) */}
        <div className="apprendre-chart-card">
          <h3>Engagement by Track</h3>
          <table className="apprendre-mini-table">
            <thead>
              <tr>
                <th>Track</th>
                <th>Favorites</th>
                <th>Saved</th>
              </tr>
            </thead>
            <tbody>
              {byTrack.map((t) => {
                const meta = TRACK_META[t.track] || { label: t.track, color: "#6b7280" };
                return (
                  <tr key={t.track}>
                    <td>
                      <span className="apprendre-dot" style={{ background: meta.color }} />
                      {meta.label}
                    </td>
                    <td>{t.favorites}</td>
                    <td>{t.saved}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Most completed missions */}
      <div className="apprendre-chart-card">
        <h3>Most Completed Missions</h3>
        {topMissions.length === 0 || topMissions.every((m) => m.completions === 0) ? (
          <p className="apprendre-analytics-muted">No mission completions yet.</p>
        ) : (
          <div className="apprendre-bars">
            {topMissions.map((m) => {
              const meta = TRACK_META[m.track] || { label: m.track, color: "#6b7280" };
              const pct = Math.round((m.completions / maxMissionCompletions) * 100);
              return (
                <div className="apprendre-bar-row" key={m.id}>
                  <span className="apprendre-bar-label" title={`${meta.label} · Mission ${m.mission_number}`}>
                    {meta.label} #{m.mission_number} — {m.title}
                  </span>
                  <div className="apprendre-bar-track">
                    <div
                      className="apprendre-bar-fill"
                      style={{ width: `${pct}%`, background: meta.color }}
                    />
                  </div>
                  <span className="apprendre-bar-value">{m.completions}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default ApprendreAnalytics;
