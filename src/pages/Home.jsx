import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Experience the Future of Retail</h1>
            <p className="hero-subtitle">
              Welcome to TechNova, where cutting-edge technology meets elegant design. 
              Discover a curated selection of innovations built for tomorrow.
            </p>
            <Link to="/products" className="cta-button hero-btn">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Intro/Features Section */}
      <section className="intro-section">
        <h2>Built for Innovation</h2>
        <p className="section-desc">
          At TechNova, we pride ourselves on delivering not just products, but solutions 
          that redefine how you interact with the digital world.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Premium Quality</h3>
            <p>We source only the highest grade materials for durability and performance.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Curation</h3>
            <p>Every item is handpicked by our team of leading tech enthusiasts.</p>
          </div>
          <div className="feature-card">
            <h3>Global Support</h3>
            <p>Our dedicated support team is available 24/7, wherever you are.</p>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Home;





