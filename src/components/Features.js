import React from 'react';
import styled from 'styled-components';
import containerizedImage from '../images/containerized.jpg';
import preConfiguredImage from '../images/pre-configured.jpg';

const Features = () => {
  return (
    <StyledFeatures>
      <h2>DataFort AI Key Features</h2>
      <div className="features-list">
        <div className="feature-card">
          <img src={containerizedImage} alt="Containerized Deployment" />
          <h3>Complete Containerized Deployment</h3>
          <p>Effortless deployment with full containerization.</p>
        </div>
        <div className="feature-card">
          <img src={preConfiguredImage} alt="Bundled Solution" />
          <h3>Pre-configured Solutions</h3>
          <p>Ready to use solutions with minimal setup.</p>
        </div>
        {/* Add more feature cards as needed */}
      </div>
    </StyledFeatures>
  );
};

const StyledFeatures = styled.div`
  background: #ffffff;
  padding: 4rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
    text-align: center;
  }

  .features-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;

    img {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    p {
      font-size: 1rem;
      color: #34495e;
    }
  }
`;

export default Features;
