import React from 'react';
import styled from 'styled-components';

const HowItWorks = () => {
  return (
    <StyledHowItWorks>
      <h2>How Does DataFort AI Work?</h2>
      <div className="steps">
        <div className="step">
          <div className="step-icon">1</div>
          <h3>Setup</h3>
          <p>DataFort AI installs on your infrastructure with no external dependencies.</p>
        </div>
        <div className="step">
          <div className="step-icon">2</div>
          <h3>Workspace Creation</h3>
          <p>Each data scientist gets an isolated workspace via JupyterHub.</p>
        </div>
        <div className="step">
          <div className="step-icon">3</div>
          <h3>Develop & Test</h3>
          <p>Test and prototype on secured LLM models using familiar tools like Jupyter Notebooks.</p>
        </div>
        <div className="step">
          <div className="step-icon">4</div>
          <h3>Deploy Anywhere</h3>
          <p>Take your POC to the next phase with reusable Python-compatible code.</p>
        </div>
      </div>
    </StyledHowItWorks>
  );
};

const StyledHowItWorks = styled.div`
  text-align: center;
  background: #f9f9f9;
  padding: 4rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .step {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;

    .step-icon {
      font-size: 2rem;
      background: #3498db;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
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

export default HowItWorks;
