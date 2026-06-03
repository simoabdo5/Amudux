import React, { useState, useRef } from 'react';
import "../css/Commentaire.css";

import agaImg from "../../assets/aga.jfif";
import chefImg from "../../assets/chef.jfif";
import essaouiraImg from "../../assets/essaouira.jfif";
import merzougaImg from "../../assets/merzouga.jfif";
import marrakechImg from "../../assets/marrakech.jfif";

const Commentaire = () => {
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Youssef El Amrani",
      avatar: "YE",
      location: "Agadir",
      date: "Il y a 2h",
      text: "Taghazout c'est magique ! Le surf, les couchers de soleil... une expérience inoubliable avec Amudux.",
      likes: 24,
      liked: false,
      image: agaImg,
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Benkirane",
      avatar: "SB",
      location: "Chefchaouen",
      date: "Il y a 5h",
      text: "Chefchaouen m'a complètement séduite. Les ruelles bleues, l'artisanat, l'ambiance... tout était parfait !",
      likes: 18,
      liked: true,
      image: chefImg,
      rating: 5
    },
    {
      id: 3,
      name: "Ahmed Benali",
      avatar: "AB",
      location: "Merzouga",
      date: "Il y a 1j",
      text: "Le Sahara de nuit c'est indescriptible. Les étoiles, le silence, le bivouac... merci pour cette organisation.",
      likes: 45,
      liked: false,
      image: merzougaImg,
      rating: 5
    },
    {
      id: 4,
      name: "Marie Dubois",
      avatar: "MD",
      location: "Marrakech",
      date: "Il y a 2j",
      text: "Jamaa El Fna le soir, c'est une autre dimension. Les spectacles, la nourriture, l'énergie... j'adore !",
      likes: 32,
      liked: false,
      image: marrakechImg,
      rating: 4
    },
    {
      id: 5,
      name: "Khalid Idrissi",
      avatar: "KI",
      location: "Essaouira",
      date: "Il y a 3j",
      text: "Essaouira, la perle de l'Atlantique. Balade à cheval au coucher du soleil, moment magique.",
      likes: 28,
      liked: true,
      image: essaouiraImg,
      rating: 5
    }
  ]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleLike = (id) => {
    setComments(comments.map(comment => {
      if (comment.id === id) {
        return {
          ...comment,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          liked: !comment.liked
        };
      }
      return comment;
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      name: "Vous", // Num rah mn login
      avatar: "VO",
      location: "Votre Destination",
      date: "À l'instant",
      text: newComment,
      likes: 0,
      liked: false,
      image: selectedImage || marrakechImg,
      rating: rating || 5
    };

    setComments([newCommentObj, ...comments]);
    setNewComment('');
    setRating(0);
    setSelectedImage(null);
    setIsFocused(false);
  };

  const renderStars = (rating, interactive = false, onRate = null, onHover = null, hoverValue = 0) => {
    const displayRating = interactive ? (hoverValue || rating) : rating;
    return (
      <div className={`stars ${interactive ? 'interactive' : ''}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star-btn ${star <= displayRating ? 'filled' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
            onMouseEnter={() => interactive && onHover && onHover(star)}
            onMouseLeave={() => interactive && onHover && onHover(0)}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="commentaire-section">
      <div className="commentaire-container">
        {/* Header */}
        <div className="commentaire-header">
          <span className="section-tag">AVIS VOYAGEURS</span>
          <h2 className="section-title">Ils Ont Voyagé Avec Nous</h2>
        </div>

        {/* Carousel */}
        <div className="carousel-area">
          <button className="carousel-arrow arrow-left" onClick={() => scroll('left')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="comments-scroll" ref={scrollRef}>
            {comments.map((comment, idx) => (
              <div 
                key={comment.id} 
                className="comment-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="card-image">
                  <img src={comment.image} alt={comment.location} />
                  <div className="image-overlay">
                    <span className="location-name">{comment.location}</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-top">
                    <div className="user-avatar" style={{ 
                      background: `hsl(${(comment.id * 60) + 20}, 70%, 55%)` 
                    }}>
                      {comment.avatar}
                    </div>
                    <div className="user-info">
                      <h4>{comment.name}</h4>
                      <span>{comment.date}</span>
                    </div>
                    {renderStars(comment.rating)}
                  </div>

                  <p className="comment-text">"{comment.text}"</p>

                  <div className="card-footer">
                    <button 
                      className={`like-btn ${comment.liked ? 'liked' : ''}`}
                      onClick={() => handleLike(comment.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" 
                        fill={comment.liked ? "currentColor" : "none"} 
                        stroke="currentColor" strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      <span>{comment.likes}</span>
                    </button>
                    <button className="reply-btn">Répondre</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow arrow-right" onClick={() => scroll('right')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* ADD COMMENT - INPUT WA7DA + UPLOAD + STARS */}
        <div className={`add-comment-section ${isFocused ? 'focused' : ''}`}>
          {/* Image Preview */}
          {selectedImage && (
            <div className="upload-preview">
              <img src={selectedImage} alt="Preview" />
              <button 
                type="button" 
                className="remove-image"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          )}

          <form className="add-comment-form" onSubmit={handleSubmit}>
            <div className="add-comment-top">
              <div className="add-comment-avatar">VO</div>
              
              <div className="input-area">
                <textarea
                  className="comment-input"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  placeholder="Partagez votre expérience de voyage..."
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Actions Bar */}
            <div className={`comment-actions-bar ${isFocused || newComment ? 'visible' : ''}`}>
              <div className="actions-left">
                {/* Upload Image */}
                <button 
                  type="button" 
                  className="upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                  title="Ajouter une photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>Photo</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  hidden
                />

                {/* Rating Stars */}
                <div className="rating-area">
                  <span>Votre note:</span>
                  {renderStars(rating, true, setRating, setHoverRating, hoverRating)}
                </div>
              </div>

              <button 
                type="submit" 
                className={`publish-btn ${newComment.trim() ? 'active' : ''}`}
              >
                Publier
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Commentaire;