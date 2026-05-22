// App.js - Version corrigée (sans Router imbriqué)
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { LanguageProvider } from "./components/accueil/LanguageContext";
import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from "./components/pages/ProtectedRoute";

import Menu from "./components/accueil/Menu";
import Home from "./components/accueil/home";
import Card from "./components/pages/card";
import Destination from "./components/pages/destination";
import Languages from "./components/pages/languages";
import Login from "./components/pages/login";
import Saved from "./components/pages/saved";
import Chatbot from "./components/Chatbot/Chatbot";
import AdminDashboard from "./components/pages/adminDashboard";
import EmailVerification from './components/auth/EmailVerification';
import VerifyCode from './components/auth/VerifyCode';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

// Import des pages de destinations
import Agadir from "./components/pages/destinations/Agadir";
import Casablanca from "./components/pages/destinations/Casablanca";
import Marrakech from "./components/pages/destinations/Marrakech";
import Fes from "./components/pages/destinations/Fes";
import Chefchaouen from "./components/pages/destinations/Chefchaouen";
import Essaouira from "./components/pages/destinations/Essaouira";

function AppContent() {
    const location = useLocation();

    const noMenuPages = ['/login', '/admin', '/forgot-password', '/reset-password', '/verify-code'];
    const noChatbotPages = ['/login', '/admin', '/forgot-password', '/reset-password', '/verify-code'];

    const showMenu = !noMenuPages.includes(location.pathname);
    const showChatbot = !noChatbotPages.includes(location.pathname);

    return (
        <>
            {showMenu && <Menu />}

            <Routes>
                {/* Routes principales */}
                <Route path="/" element={<Home />} />
                <Route path="/card" element={<Card />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/languages" element={<Languages />} />

                {/* Routes des villes */}
                <Route path="/destination/agadir" element={<Agadir />} />
                <Route path="/destination/casablanca" element={<Casablanca />} />
                <Route path="/destination/marrakech" element={<Marrakech />} />
                <Route path="/destination/fes" element={<Fes />} />
                <Route path="/destination/chefchaouen" element={<Chefchaouen />} />
                <Route path="/destination/essaouira" element={<Essaouira />} />

                {/* Login page */}
                <Route path="/login" element={<Login />} />

                {/* Protected routes */}
                <Route path="/saved" element={
                    <ProtectedRoute>
                        <Saved />
                    </ProtectedRoute>
                } />

                {/* Admin route */}
                <Route path="/admin" element={
                    <ProtectedRoute requireAdmin={true}>
                        <AdminDashboard />
                    </ProtectedRoute>
                } />

                {/* Auth routes */}
                <Route path="/verify-email" element={<EmailVerification />} />
                <Route path="/verify-code" element={<VerifyCode />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {showChatbot && <Chatbot />}
        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <LanguageProvider>
                <Router>
                    <AppContent />
                </Router>
            </LanguageProvider>
        </AuthProvider>
    );
}

export default App;