import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaShieldAlt, FaRocket, FaLock, FaCode } from 'react-icons/fa';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const KeyBenefits = () => {
  const benefits = [
    { icon: <FaShieldAlt />, title: "Data Privacy Guaranteed", description: "Keep your sensitive data secure within your own infrastructure." },
    { icon: <FaRocket />, title: "Quick Setup & Deployment", description: "No complex installations. Fully containerized for hassle-free deployment." },
    { icon: <FaLock />, title: "No Vendor Lock-In", description: "Flexibility to move forward with any Python-compatible platform." },
    { icon: <FaCode />, title: "OpenAI Compatibility", description: "Seamless integration with OpenAI libraries for quick model switching." }
  ];

  return (
    <StyledKeyBenefits>
      <h2>Why Choose DataFort AI?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </StyledKeyBenefits>
  );
};

const StyledKeyBenefits = styled.div`
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .benefit-card {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    animation: ${fadeInUp} 0.5s ease-out both;

    &:hover {
      transform: translateY(-5px);
    }

    .icon {
      font-size: 2.5rem;
      color: #3498db;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    p {
      font-size: 1rem;
      color: #34495e;
    }
  }
`;

export default KeyBenefits;