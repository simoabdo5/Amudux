import React from "react";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "../accueil/LanguageContext";
import "../css/ContactUs.css";
import contactImage from "../../assets/Marrakech.jpg";

export default function ContactUs() {
  const { lang, isRTL } = useLanguage();

  const translations = {
    FR: {
      title: "Contactez-nous",
      subtitle: "Une question ou un projet de voyage au Maroc ? Écrivez-nous !",
      infoTitle: "Nos Coordonnées",
      infoSubtitle: "N'hésitez pas à nous joindre directement.",
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse",
      addressVal: "Anfa Place, Boulevard de la Corniche, Casablanca, Maroc",
      hours: "Heures d'ouverture",
      hoursVal: "Lundi - Vendredi: 09:00 - 18:00",
      imageCaption: "Laissez-vous envoûter par les trésors cachés du Maroc.",
      aboutUsTitle: "À propos de nous",
      aboutUsDesc: "Amudux est votre compagnon de voyage privilégié au Maroc. Notre équipe de passionnés de culture et d'aventure conçoit des outils innovants comme la planification par IA et des cartes interactives pour vous faire vivre une expérience marocaine unique, authentique et mémorable.",
    },
    EN: {
      title: "Contact Us",
      subtitle: "Any questions or travel plans in Morocco? Drop us a line!",
      infoTitle: "Contact Info",
      infoSubtitle: "Feel free to reach out to us directly.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressVal: "Anfa Place, Corniche Boulevard, Casablanca, Morocco",
      hours: "Opening Hours",
      hoursVal: "Monday - Friday: 09:00 AM - 06:00 PM",
      imageCaption: "Let yourself be enchanted by the hidden treasures of Morocco.",
      aboutUsTitle: "About Us",
      aboutUsDesc: "Amudux is your dedicated travel companion in Morocco. Our team of culture and adventure enthusiasts designs innovative tools like AI trip planners and interactive maps to help you experience Morocco in a unique, authentic, and unforgettable way.",
    },
    AR: {
      title: "اتصل بنا",
      subtitle: "هل لديك أي استفسار أو خطط سفر في المغرب؟ راسلنا الآن!",
      infoTitle: "معلومات الاتصال",
      infoSubtitle: "لا تتردد في الاتصال بنا مباشرة.",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressVal: "أنفا بلايس، شارع الكورنيش، الدار البيضاء، المغرب",
      hours: "ساعات العمل",
      hoursVal: "الإثنين - الجمعة: 09:00 صباحاً - 06:00 مساءً",
      imageCaption: "دع سحر الكنوز المخفية في المغرب يأسرك.",
      aboutUsTitle: "معلومات عنا",
      aboutUsDesc: "Amudux هو رفيقك المفضل للسفر في المغرب. يقوم فريقنا الشغوف بالثقافة والمغامرة بتصميم أدوات مبتكرة مثل مخططات الرحلات بالذكاء الاصطناعي والخرائط التفاعلية لنمنحك تجربة مغربية فريدة وأصيلة ولا تُنسى.",
    },
  };

  const t = translations[lang] || translations.FR;

  return (
    <div className={`contact-page ${isRTL ? "rtl" : ""}`}>
      {/* Background elements */}
      <div className="contact-bg-grid"></div>
      <div className="contact-glow-1"></div>
      <div className="contact-glow-2"></div>

      <div className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-badge">
            <Sparkles size={16} />
            <span>AMUDUX SUPPORT</span>
          </div>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact info cards */}
          <div className="contact-info-section">
            <h2 className="section-title">{t.infoTitle}</h2>
            <p className="section-subtitle">{t.infoSubtitle}</p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Phone size={22} />
                </div>
                <div className="info-details">
                  <h3>{t.phone}</h3>
                  <a href="tel:+212522123456" className="info-link">+212 522-123456</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div className="info-details">
                  <h3>{t.email}</h3>
                  <a href="mailto:contact@amudux.ma" className="info-link">contact@amudux.ma</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <MapPin size={22} />
                </div>
                <div className="info-details">
                  <h3>{t.address}</h3>
                  <p>{t.addressVal}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Clock size={22} />
                </div>
                <div className="info-details">
                  <h3>{t.hours}</h3>
                  <p>{t.hoursVal}</p>
                </div>
              </div>
            </div>

            <div className="about-us-block">
              <h3 className="about-us-title">{t.aboutUsTitle}</h3>
              <p className="about-us-text">{t.aboutUsDesc}</p>
            </div>
          </div>

          {/* Visual Image Section */}
          <div className="contact-image-section">
            <div className="image-wrapper">
              <img src={contactImage} alt="Beautiful Morocco" className="contact-visual-img" />
              <div className="image-overlay"></div>
              <div className="image-caption">
                <Sparkles size={20} className="caption-icon" />
                <p>{t.imageCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

