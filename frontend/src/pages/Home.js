import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1><i className="fas fa-search"></i> Welcome to TafutaKazi</h1>
      <p><i className="fas fa-users"></i> Find work or hire talent in your region.</p>
      <button className="explore-btn">Explore Jobs <i className="fas fa-arrow-right"></i></button>
    </div>
  );
};

export default Home;