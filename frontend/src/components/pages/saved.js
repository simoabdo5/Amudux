import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Star, Trash2, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../accueil/LanguageContext';
import '../css/saved.css';

function Saved() {
  
  const { lang, isRTL } = useLanguage();

  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Traductions
  const lt = {
    FR: {
      saved: 'Enregistrés',
      subtitle: 'Vos favoris',
      empty: 'Aucun favori',
      explore: 'Explorer',
      remove: 'Retirer'
    },

    EN: {
      saved: 'Saved',
      subtitle: 'Your favorites',
      empty: 'No favorites',
      explore: 'Explore',
      remove: 'Remove'
    },

    AR: {
      saved: 'المحفوظات',
      subtitle: 'العناصر المفضلة',
      empty: 'لا توجد عناصر محفوظة',
      explore: 'استكشف',
      remove: 'إزالة'
    }
  };

  const t = lt[lang];

  // Fetch favorites
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {

    try {

      const response = await axios.get(
        'http://127.0.0.1:8000/api/favorites'
      );

      setSavedItems(response.data);

    } catch (error) {

      console.error('Error fetching favorites:', error);

    } finally {

      setLoading(false);

    }
  };

  // Remove favorite
  const removeItem = async (id) => {

    try {

      await axios.delete(
        `http://127.0.0.1:8000/api/favorites/${id}`
      );

      setSavedItems(prev =>
        prev.filter(item => item.id !== id)
      );

    } catch (error) {

      console.error('Error deleting favorite:', error);

    }
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (

    <div className={`saved-page ${isRTL ? 'rtl' : ''}`}>

      {/* Hero */}
      <div className="saved-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <Heart size={48} className="hero-icon" />

          <h1>{t.saved}</h1>

          <p>{t.subtitle}</p>

        </div>

      </div>

      {/* Content */}
      <div className="saved-content">

        {savedItems.length > 0 ? (

          <div className="saved-grid">

            {savedItems.map((item) => {

              const data = item.favoritable;

              if (!data) return null;

              return (

                <div key={item.id} className="saved-card">

                  {/* Image */}
                  <div className="card-image">

                    <img
                      src={
                        data.image ||
                        'https://via.placeholder.com/400'
                      }
                      alt={data.name}
                    />

                    <div className="card-overlay"></div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      title={t.remove}
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                  {/* Content */}
                  <div className="card-content">

                    <h3>{data.name}</h3>

                    <div className="card-meta">

                      {/* Location */}
                      <span className="location">

                        <MapPin size={14} />

                        {data.location || data.address || 'Morocco'}

                      </span>

                      {/* Rating */}
                      <span className="rating">

                        <Star
                          size={14}
                          fill="currentColor"
                        />

                        {data.rating || 4.5}

                      </span>

                    </div>

                    {/* Link */}
                    <Link
                      to={`/${item.favoritable_type
                        .split('\\')
                        .pop()
                        .toLowerCase()}/${data.id}`}
                      className="view-link"
                    >

                      {lang === 'AR'
                        ? 'عرض التفاصيل'
                        : lang === 'FR'
                        ? 'Voir détails'
                        : 'View details'}

                      <ArrowRight size={14} />

                    </Link>

                  </div>

                </div>

              );

            })}

          </div>

        ) : (

          <div className="empty-state">

            <Heart
              size={64}
              className="empty-icon"
            />

            <h3>{t.empty}</h3>

            <Link
              to="/destination"
              className="explore-btn"
            >

              {t.explore}

              <ArrowRight size={18} />

            </Link>

          </div>

        )}

      </div>

    </div>
  );
}

export default Saved;