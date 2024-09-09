import React from 'react';
import styled from 'styled-components';
import businessUiImage from '../images/business-ui.jpg'; // Import the image

const UseCases = () => {
  return (
    <StyledUseCases>
      <img src={businessUiImage} alt="Business Use Cases" className="use-cases-image" />
      <h2>Who Is DataFort AI For?</h2>
      <div className="use-case-list">
        <div className="use-case">
          <h3>Data Science Teams</h3>
          <p>Prototype AI solutions faster with familiar tools.</p>
        </div>
        <div className="use-case">
          <h3>IT/Infrastructure Teams</h3>
          <p>Avoid communication gaps and lengthy setup procedures.</p>
        </div>
        <div className="use-case">
          <h3>Enterprises Concerned About Data Security</h3>
          <p>Build AI solutions with peace of mind, knowing your data stays within your infrastructure.</p>
        </div>
      </div>
    </StyledUseCases>
  );
};

const StyledUseCases = styled.div`
  background: #f9f9f9;
  padding: 4rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;

  .use-cases-image {
    max-width: 60%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .use-case-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .use-case {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

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

export default UseCases;
