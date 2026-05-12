import React from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

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


function AppContent() {
    const location = useLocation();

    const noMenuPages = ['/login', '/admin'];
    const noChatbotPages = ['/login', '/admin'];

    const showMenu = !noMenuPages.includes(location.pathname);
    const showChatbot = !noChatbotPages.includes(location.pathname);

    return (
        <>
            {showMenu && <Menu />}

            <Routes>

                {/* Redirect "/" => Home */}
                <Route path="/" element={<Home />} />

                {/* Login page */}
                <Route path="/login" element={<Login />} />

                {/* Protected pages */}
                <Route path="/card" element={
                    <ProtectedRoute>
                        <Card />
                    </ProtectedRoute>
                } />

                <Route path="/destination" element={
                    <ProtectedRoute>
                        <Destination />
                    </ProtectedRoute>
                } />

                <Route path="/languages" element={
                    <ProtectedRoute>
                        <Languages />
                    </ProtectedRoute>
                } />

                <Route path="/saved" element={
                    <ProtectedRoute>
                        <Saved />
                    </ProtectedRoute>
                } />

                {/* Admin only */}
                <Route path="/admin" element={
                    <ProtectedRoute requireAdmin={true}>
                        <AdminDashboard />
                    </ProtectedRoute>
                } />

                <Route path="/verify-email" element={<EmailVerification />} />

                <Route path="/verify-code" element={<VerifyCode />} />


                {/* fallback */}
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
                <AppContent />
            </LanguageProvider>
        </AuthProvider>
    );
}

export default App;