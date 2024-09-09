import React, { useState } from 'react';
import styled from 'styled-components';

// Assume you have a way to import or fetch the SVG as a URL
import svgUrl from '../assets/datafortai_hld.svg';
import svgIcon from '../assets/df_icon_graphics.svg';

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRequestDemo = () => {
    setModalOpen(true);
  };

  const handleLearnMore = () => {
    document.getElementById('key-benefits').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledHeroSection>
       <div className="hero-animation">
        <img
          src={svgIcon}
          alt="DataFort AI Logo"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="hero-content">
        <h1>DATAFORT AI</h1>
        <h2>Your Secure AI R&D Platform – On-Prem and Fully Private</h2>
        <p>Build, Test, and Prototype Generative AI with Total Data Privacy, on Your Own Infrastructure.</p>
        <div className="hero-buttons">
          <Button primary onClick={handleRequestDemo}>Request a Demo</Button>
          <Button onClick={handleLearnMore}>Learn More</Button>
        </div>
      </div>
      <div className="hero-animation">
        <img
          src={svgUrl}
          alt="DataFort HLD"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Request a Demo</h2>
            <p>Send an enquiry email to: <a href="mailto:hello@datafortai.com">hello@datafortai.com</a></p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f6f9fc 0%, #e9f1f9 100%);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  
  .hero-content {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .hero-buttons {
    margin-top: 1rem;
  }
  
  .hero-animation {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px; /* Adjust width as needed */
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.primary ? `
    background-color: #3498db;
    color: white;
    border: none;
    &:hover {
      background-color: #2980b9;
    }
  ` : `
    background-color: transparent;
    color: #3498db;
    border: 2px solid #3498db;
    &:hover {
      background-color: #3498db;
      color: white;
    }
  `}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 100%;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #3498db;
    text-decoration: none;
  }

  button {
    margin-top: 1rem;
  }
`;

export default HeroSection;
