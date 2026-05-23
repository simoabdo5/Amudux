// src/components/accueil/Menu.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    Settings, 
    Moon, 
    Sun, 
    Menu as MenuIcon, 
    X, 
    Bookmark, 
    LogIn, 
    LogOut, 
    User,   
    Home, 
    Map, 
    Globe, 
    Box 
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useAuth } from "../../context/AuthContext"; 
import ConfirmDialog from "../common/ConfirmDialog";

import "../css/Menu.css";
import logo from "../../assets/logo1.png";

function Menu() {
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(() => {
        const savedDark = localStorage.getItem("app-dark-mode");
        return savedDark === "true";
    });
    const [mobile, setMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
    
    const { lang, setLang, t, isRTL } = useLanguage();
    const { isAuthenticated, user, logout } = useAuth();

    // Scroll effect (version main + HEAD merged)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            
            // Pour le style CSS .scrolled
            const menu = document.querySelector('.menu');
            if (scrollY > 100) {
                menu?.classList.add('scrolled');
            } else {
                menu?.classList.remove('scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("app-dark-mode", newDark);
    };

    const handleLanguageChange = (newLang) => {
        setLang(newLang);
    };

    const getNavLinks = () => {
        const links = [
            { to: "/", icon: <Home size={18} />, label: t("home") },
            { to: "/card", icon: <Box size={18} />, label: t("card") },
            { to: "/destination", icon: <Map size={18} />, label: t("destination") },
            { to: "/languages", icon: <Globe size={18} />, label: t("languages") },
            { to: "/pack", icon: <Box size={18} />, label: t("pack") },
        ];
        return isRTL ? links.reverse() : links;
    };

    const navLinks = getNavLinks();

    const logoutCopy = {
        FR: {
            title: 'Confirmer la déconnexion',
            message: 'Êtes-vous sûr de vouloir vous déconnecter ?',
            cancel: 'Annuler',
            confirm: 'Se déconnecter',
        },
        EN: {
            title: 'Confirm logout',
            message: 'Are you sure you want to log out?',
            cancel: 'Cancel',
            confirm: 'Log out',
        },
        AR: {
            title: 'تأكيد تسجيل الخروج',
            message: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
            cancel: 'إلغاء',
            confirm: 'تسجيل الخروج',
        },
    };
    const currentLogoutCopy = logoutCopy[lang] || logoutCopy.EN;

    const requestLogout = () => {
        setOpen(false);
        setLogoutConfirmOpen(true);
    };

    const handleLogout = () => {
        logout();
        setOpen(false);
        setLogoutConfirmOpen(false);
        navigate('/');
    };

    return (
        <>
            <nav className={`menu ${scrolled ? "scrolled" : ""} ${isRTL ? "rtl" : ""}`}>
                <div className="menu-left">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>

                <div className="mobile-icon" onClick={() => setMobile(!mobile)}>
                    {mobile ? <X size={28} /> : <MenuIcon size={28} />}
                </div>

                <ul className={mobile ? "menu-links active" : "menu-links"}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to}>
                                {isRTL ? (
                                    <>
                                        <span className="link-text">{link.label}</span>
                                        <span className="link-icon">{link.icon}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="link-icon">{link.icon}</span>
                                        <span className="link-text">{link.label}</span>
                                    </>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="menu-right">
                    {isAuthenticated && user && (
                        <div className="user-greeting">
                            <User size={16} />
                            <span>
                                {lang === 'AR' ? 'مرحباً' : lang === 'FR' ? 'Bonjour' : 'Hello'} {user.name}
                            </span>
                        </div>
                    )}

                    <button
                        onClick={(e) => { 
                            e.stopPropagation();
                            setOpen(!open);
                        }}
                        className={`settings-btn ${open ? "active" : ""}`}
                    >
                        <Settings size={20} className={open ? "spin" : ""} />
                    </button>

                    {open && (
                        <div 
                            ref={dropdownRef} 
                            className={`dropdown ${isRTL ? "dropdown-rtl" : ""}`}
                        >
                            <div className="dropdown-header">{t("translation")}</div>
                            <div className="language-bar">
                                <button 
                                    className={`lang-btn ${lang === "AR" ? "active" : ""}`} 
                                    onClick={() => handleLanguageChange("AR")}
                                >AR</button>
                                <button 
                                    className={`lang-btn ${lang === "FR" ? "active" : ""}`} 
                                    onClick={() => handleLanguageChange("FR")}
                                >FR</button>
                                <button 
                                    className={`lang-btn ${lang === "EN" ? "active" : ""}`} 
                                    onClick={() => handleLanguageChange("EN")}
                                >EN</button>
                            </div>
                            
                            <div className="dropdown-divider"></div>

                            <div className="dropdown-header">{t("settings")}</div>
                            
                            <Link to="/saved" className="dropdown-item" onClick={() => setOpen(false)}>
                                <Bookmark size={18} /> <span>{t("saved")}</span>
                            </Link>

                            {isAuthenticated ? (
                                <div className="dropdown-item logout-item" onClick={requestLogout}>
                                    <LogOut size={18} /> 
                                    <span>
                                        {lang === 'AR' ? 'تسجيل الخروج' : lang === 'FR' ? 'Déconnexion' : 'Logout'}
                                    </span>
                                </div>
                            ) : (
                                <Link to="/login" className="dropdown-item" onClick={() => setOpen(false)}>
                                    <LogIn size={18} /> <span>{t("login")}</span>
                                </Link>
                            )}

                            <div className="dropdown-item" onClick={toggleTheme}>
                                {dark ? <Sun size={18} /> : <Moon size={18} />}
                                <span>{dark ? t("lightMode") : t("darkMode")}</span>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            
            <ConfirmDialog
                open={logoutConfirmOpen}
                title={currentLogoutCopy.title}
                message={currentLogoutCopy.message}
                cancelLabel={currentLogoutCopy.cancel}
                confirmLabel={currentLogoutCopy.confirm}
                onCancel={() => setLogoutConfirmOpen(false)}
                onConfirm={handleLogout}
                isRTL={isRTL}
            />
        </>
    );
}

export default Menu;