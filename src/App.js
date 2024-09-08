import React from 'react';
import './App.css';

// Importing images
import heroImage from './images/hero-image.jpg';
import secureData from './images/secure-data.jpg';
import containerized from './images/containerized.jpg';
import preConfigured from './images/pre-configured.jpg';
import businessUI from './images/business-ui.jpg';
import companyLogo from './images/dfai_icon.jpg'; // Company logo

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductOverview />
      <Features />
      <MovingGraphics /> {/* New animated section */}
      <CallToAction />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={companyLogo} alt="DataFort AI Logo" className="company-logo" />
      <h1>DataFort AI</h1>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  const handleClick = () => {
    document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <img src={heroImage} alt="AI Secure Workspace" className="hero-image" />
      <div className="hero-content">
        <h2>Guarding Data, Fueling AI</h2>
        <p>Your secure workspace for generative AI development.</p>
        <button className="cta-button" onClick={handleClick}>Get Started</button>
      </div>
    </section>
  );
}


function ProductOverview() {
  return (
    <section className="overview" id="overview">
      <h2>Product Overview</h2>
      <p>
        DataFort AI provides a self-hosted, containerized workspace designed to keep your data private and compliant while offering a robust platform for AI developers. Simplify your AI development with pre-installed libraries, isolated environments, and seamless model hosting.
      </p>
    </section>
  );
}

function Features() {
  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <FeatureItem
          image={secureData}
          title="Self-Hosted Environment"
          description="Your private, secure AI development environment on a data center or local machine."
        />
        <FeatureItem
          image={containerized}
          title="Fully Containerized"
          description="All components are containerized for portability and ease of setup."
        />
        <FeatureItem
          image={preConfigured}
          title="Pre-Configured Jupyter Notebooks"
          description="No setup headaches, ready-to-use Jupyter environments with pre-installed libraries."
        />
        <FeatureItem
          image={businessUI}
          title="Simple Business UI"
          description="A user-friendly interface for business users to interact with AI models."
        />
      </div>
    </section>
  );
}

function FeatureItem({ image, title, description }) {
  return (
    <div className="feature-item">
      <img src={image} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function MovingGraphics() {
  return (
    <section className="moving-graphics">
      <h2>Powering Complexity, Simplifying AI Development</h2>
      <div className="animated-background"></div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta" id="contact">
      <h2>Ready to Secure Your AI Development?</h2>
      <p>Get started with DataFort AI today and secure your data while unleashing the power of generative AI.</p>
      <button className="cta-button">Contact Us</button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 DataFort AI. All rights reserved.</p>
      <p>Contact us: hello@datafortai.com</p>
    </footer>
  );
}

export default App;
