import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../learn/contexts/ThemeContext";

import ApprendreHub from "../learn/ApprendreHub";
import TifinaghPage from "../learn/TifinaghPage";
import DarijaPage from "../learn/DarijaPage";
import CulturePage from "../learn/CulturePage";
import QuizzesPage from "../learn/QuizzesPage";
import ProgressPage from "../learn/ProgressPage";

function Languages() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<ApprendreHub />} />
        <Route path="tifinagh" element={<TifinaghPage />} />
        <Route path="darija" element={<DarijaPage />} />
        <Route path="culture" element={<CulturePage />} />
        <Route path="quizzes" element={<QuizzesPage />} />
        <Route path="progress" element={<ProgressPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Languages;
