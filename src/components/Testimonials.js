import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <StyledTestimonials>
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        <div className="testimonial">
          <p>
            "DataFort AI allowed us to rapidly prototype and deploy our models in a secure environment, which was crucial for our sensitive data."
          </p>
          <h4>- Ambrish, Data Scientist</h4>
        </div>
        <div className="testimonial">
          <p>
            "The integration with OpenAI libraries was seamless, and the containerized setup made deployment straightforward."
          </p>
          <h4>- Sharath Ravi, AI Engineer</h4>
        </div>
        <div className="testimonial">
          <p>
            "DataFort AI's private infrastructure solution ensured that our data never left our premises, meeting all our security requirements."
          </p>
          <h4>- Jincy Xavier, IT Director</h4>
        </div>
      </div>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.div`
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

  .testimonials-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .testimonial {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;

    p {
      font-size: 1rem;
      color: #34495e;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.2rem;
      color: #2c3e50;
      font-weight: normal;
    }
  }
`;

export default Testimonials;
