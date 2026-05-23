import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Settings,
  Moon,
  Sun,
  Menu as MenuIcon,
  X,
  Home,
  Map,
  Globe,
  Box,
  Bookmark,
  LogIn
} from "lucide-react";

import { useLanguage } from "./LanguageContext";

import "../css/Menu.css";
import logo from "../../assets/logo1.png";

function Menu() {
  const dropdownRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("app-dark-mode") === "true";
  });

  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, setLang, t, isRTL } = useLanguage();

  // dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // click outside dropdown
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
    localStorage.setItem("app-dark-mode", newDark);
  };

  const handleLanguageChange = (lang) => {
    setLang(lang);
  };

  const navLinks = [
    { to: "/", icon: <Home size={18} />, label: t("home") },
    { to: "/card", icon: <Box size={18} />, label: t("card") },
    { to: "/destination", icon: <Map size={18} />, label: t("destination") },
    { to: "/languages", icon: <Globe size={18} />, label: t("languages") },
  ];

  return (
    <nav className={`menu ${scrolled ? "scrolled" : ""} ${isRTL ? "rtl" : ""}`}>

      {/* LOGO */}
      <div className="menu-left">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      {/* MOBILE ICON */}
      <div className="mobile-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <X size={28} /> : <MenuIcon size={28} />}
      </div>

      {/* LINKS */}
      <ul className={mobile ? "menu-links active" : "menu-links"}>
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>
              <span className="link-icon">{link.icon}</span>
              <span className="link-text">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div className="menu-right">

        <button
          onClick={() => setOpen(!open)}
          className="settings-btn"
        >
          <Settings size={20} />
        </button>

        {open && (
          <div ref={dropdownRef} className="dropdown">

            {/* LANGUAGE */}
            <div className="dropdown-header">{t("translation")}</div>

            <div className="language-bar">
              <button onClick={() => handleLanguageChange("AR")} className="lang-btn">AR</button>
              <button onClick={() => handleLanguageChange("FR")} className="lang-btn">FR</button>
              <button onClick={() => handleLanguageChange("EN")} className="lang-btn">EN</button>
            </div>

            <div className="dropdown-divider"></div>

            {/* SETTINGS */}
            <div className="dropdown-header">{t("settings")}</div>

            <Link to="/saved" className="dropdown-item" onClick={() => setOpen(false)}>
              <Bookmark size={18} />
              <span>{t("saved")}</span>
            </Link>

            <Link to="/login" className="dropdown-item" onClick={() => setOpen(false)}>
              <LogIn size={18} />
              <span>{t("login")}</span>
            </Link>

            {/* THEME */}
            <div className="dropdown-item" onClick={toggleTheme}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              <span>{dark ? t("lightMode") : t("darkMode")}</span>
            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Menu;