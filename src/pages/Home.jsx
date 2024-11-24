import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css' // Add your styling here
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {Profile,Questions} from './index'

function Home() {
  return (
    <>
      <Helmet>
      <title>Ask4Code | Home</title>
        <meta
          name="description"
          content="Welcome to Ask4Code, the platform for all your coding questions and answers. Learn, grow, and collaborate with the coding community."
        />
        <meta name="keywords" content="coding, programming, ask, code, questions, answers" />
        <meta name="author" content="Ask4Code Team" />
      </Helmet>
      <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Ask4Code</h1>
        <p>Your go-to platform for all coding questions and answers.</p>
        <div className="home-buttons">
          <Link to="/questions" className="btn">
            Explore Questions
          </Link>
          <Link to="/profile/1" className="btn">
            View Profile
          </Link>
        </div>
      </header>
      <section className="home-features">
        <h2>Why Ask4Code?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Ask Questions</h3>
            <p>Post your coding doubts and get answers from the community.</p>
          </div>
          <div className="feature-card">
            <h3>Learn and Grow</h3>
            <p>Browse through a repository of coding challenges and solutions.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Profiles</h3>
            <p>Follow users, build your reputation, and showcase your expertise.</p>
          </div>
        </div>
      </section>
    </div>
    </>
   
  );
}

export default Home;
