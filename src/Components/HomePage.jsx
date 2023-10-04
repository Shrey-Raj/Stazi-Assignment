import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Car Rentals</h1>
      <Link to="/page/1" className="home-button">
        See Cars
      </Link>
    </div>
  );
};

export default HomePage;
