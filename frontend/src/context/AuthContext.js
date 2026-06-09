import React, { createContext, useContext, useState, useEffect } from 'react';
import { syncApprendreFromDb } from '../utils/storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        
        if (storedUser && storedToken) {
            try {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
                // Restored session: re-hydrate Apprendre state from the database so
                // the cache reflects the source of truth (e.g. after a device switch).
                syncApprendreFromDb().catch(() => {});
            } catch (e) {
                console.error('Error parsing user:', e);
                logout();
            }
        }
        setLoading(false);
    }, []);

    const login = (userData, userToken) => {
        if (!userData || !userToken) {
            console.error('Missing user or token');
            return;
        }
        
        const userWithRole = {
            ...userData,
            role: userData.role || 'user'
        };
        
        setUser(userWithRole);
        setToken(userToken);
        localStorage.setItem('token', userToken);
        localStorage.setItem('user', JSON.stringify(userWithRole));

        // Database-first: pull this user's Apprendre progress/favorites/saved content
        // from the DB into the local cache. Fire-and-forget so login stays instant.
        syncApprendreFromDb().catch(() => {});
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    // ✅ HADOLI L-FUNCTIONS LI KHAS YKONO F CONTEXT
    const isAuthenticated = !!user && !!token;
    
    const isAdmin = () => {
        return user?.role === 'admin';
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            token, 
            login, 
            logout, 
            loading,
            isAuthenticated,
            isAdmin // ✅ ZID HADI
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}