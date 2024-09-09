import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroSection from './components/HeroSection';
import KeyBenefits from './components/KeyBenefits';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  overflow-x: hidden;
`;

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

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.6s ease-out;
`;

function App() {
  return (
    <AppContainer>
      <HeroSection />
      <Section id="key-benefits">
        <KeyBenefits />
      </Section>
      <Section>
        <HowItWorks />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <UseCases />
      </Section>
      <Section>
        <Testimonials />
      </Section>
    </AppContainer>
  );
}

export default App;
