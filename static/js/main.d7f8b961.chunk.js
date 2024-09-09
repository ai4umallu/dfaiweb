(this.webpackJsonpdfaiweb=this.webpackJsonpdfaiweb||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/datafortai_hld.c54dd7c0.svg"},,,function(e,t,a){e.exports=a.p+"static/media/containerized.11d3287d.jpg"},function(e,t,a){e.exports=a.p+"static/media/pre-configured.95d9fcba.jpg"},function(e,t,a){e.exports=a.p+"static/media/business-ui.22c96a09.jpg"},,function(e,t,a){e.exports=a(24)},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),i=a.n(o),l=(a(23),a(2)),s=a(8),m=a.n(s);const c=l.a.section`
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
`,d=l.a.button`
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${e=>e.primary?"\n    background-color: #3498db;\n    color: white;\n    border: none;\n    &:hover {\n      background-color: #2980b9;\n    }\n  ":"\n    background-color: transparent;\n    color: #3498db;\n    border: 2px solid #3498db;\n    &:hover {\n      background-color: #3498db;\n      color: white;\n    }\n  "}
`,u=l.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,p=l.a.div`
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
`;var f=()=>{const[e,t]=Object(r.useState)(!1);return n.a.createElement(c,null,n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",null,"DATAFORT AI"),n.a.createElement("h2",null,"Your Secure AI R&D Platform \u2013 On-Prem and Fully Private"),n.a.createElement("p",null,"Build, Test, and Prototype Generative AI with Total Data Privacy, on Your Own Infrastructure."),n.a.createElement("div",{className:"hero-buttons"},n.a.createElement(d,{primary:!0,onClick:()=>{t(!0)}},"Request a Demo"),n.a.createElement(d,{onClick:()=>{document.getElementById("key-benefits").scrollIntoView({behavior:"smooth"})}},"Learn More"))),n.a.createElement("div",{className:"hero-animation"},n.a.createElement("img",{src:m.a,alt:"DataFort AI Logo",style:{maxWidth:"100%",height:"auto"}})),e&&n.a.createElement(u,null,n.a.createElement(p,null,n.a.createElement("h2",null,"Request a Demo"),n.a.createElement("p",null,"Send an enquiry email to: ",n.a.createElement("a",{href:"mailto:hello@datafortai.com"},"hello@datafortai.com")),n.a.createElement("button",{onClick:()=>t(!1)},"Close"))))},g=a(4);const h=l.b`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,b=l.a.div`
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
    animation: ${h} 0.5s ease-out both;

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
`;var E=()=>{const e=[{icon:n.a.createElement(g.d,null),title:"Data Privacy Guaranteed",description:"Keep your sensitive data secure within your own infrastructure."},{icon:n.a.createElement(g.c,null),title:"Quick Setup & Deployment",description:"No complex installations. Fully containerized for hassle-free deployment."},{icon:n.a.createElement(g.b,null),title:"No Vendor Lock-In",description:"Flexibility to move forward with any Python-compatible platform."},{icon:n.a.createElement(g.a,null),title:"OpenAI Compatibility",description:"Seamless integration with OpenAI libraries for quick model switching."}];return n.a.createElement(b,null,n.a.createElement("h2",null,"Why Choose DataFort AI?"),n.a.createElement("div",{className:"benefits-grid"},e.map((e,t)=>n.a.createElement("div",{key:t,className:"benefit-card",style:{animationDelay:.1*t+"s"}},n.a.createElement("div",{className:"icon"},e.icon),n.a.createElement("h3",null,e.title),n.a.createElement("p",null,e.description)))))};const x=l.a.div`
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
`;var y=()=>n.a.createElement(x,null,n.a.createElement("h2",null,"How Does DataFort AI Work?"),n.a.createElement("div",{className:"steps"},n.a.createElement("div",{className:"step"},n.a.createElement("div",{className:"step-icon"},"1"),n.a.createElement("h3",null,"Setup"),n.a.createElement("p",null,"DataFort AI installs on your infrastructure with no external dependencies.")),n.a.createElement("div",{className:"step"},n.a.createElement("div",{className:"step-icon"},"2"),n.a.createElement("h3",null,"Workspace Creation"),n.a.createElement("p",null,"Each data scientist gets an isolated workspace via JupyterHub.")),n.a.createElement("div",{className:"step"},n.a.createElement("div",{className:"step-icon"},"3"),n.a.createElement("h3",null,"Develop & Test"),n.a.createElement("p",null,"Test and prototype on secured LLM models using familiar tools like Jupyter Notebooks.")),n.a.createElement("div",{className:"step"},n.a.createElement("div",{className:"step-icon"},"4"),n.a.createElement("h3",null,"Deploy Anywhere"),n.a.createElement("p",null,"Take your POC to the next phase with reusable Python-compatible code.")))),v=a(11),w=a.n(v),k=a(12),N=a.n(k);const I=l.a.div`
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
`;var z=()=>n.a.createElement(I,null,n.a.createElement("h2",null,"DataFort AI Key Features"),n.a.createElement("div",{className:"features-list"},n.a.createElement("div",{className:"feature-card"},n.a.createElement("img",{src:w.a,alt:"Containerized Deployment"}),n.a.createElement("h3",null,"Complete Containerized Deployment"),n.a.createElement("p",null,"Effortless deployment with full containerization.")),n.a.createElement("div",{className:"feature-card"},n.a.createElement("img",{src:N.a,alt:"Bundled Solution"}),n.a.createElement("h3",null,"Pre-configured Solutions"),n.a.createElement("p",null,"Ready to use solutions with minimal setup.")))),D=a(13),A=a.n(D);const F=l.a.div`
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
`;var C=()=>n.a.createElement(F,null,n.a.createElement("img",{src:A.a,alt:"Business Use Cases",className:"use-cases-image"}),n.a.createElement("h2",null,"Who Is DataFort AI For?"),n.a.createElement("div",{className:"use-case-list"},n.a.createElement("div",{className:"use-case"},n.a.createElement("h3",null,"Data Science Teams"),n.a.createElement("p",null,"Prototype AI solutions faster with familiar tools.")),n.a.createElement("div",{className:"use-case"},n.a.createElement("h3",null,"IT/Infrastructure Teams"),n.a.createElement("p",null,"Avoid communication gaps and lengthy setup procedures.")),n.a.createElement("div",{className:"use-case"},n.a.createElement("h3",null,"Enterprises Concerned About Data Security"),n.a.createElement("p",null,"Build AI solutions with peace of mind, knowing your data stays within your infrastructure."))));const S=l.a.div`
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
`;var P=()=>n.a.createElement(S,null,n.a.createElement("h2",null,"What Our Customers Say"),n.a.createElement("div",{className:"testimonials-list"},n.a.createElement("div",{className:"testimonial"},n.a.createElement("p",null,'"DataFort AI allowed us to rapidly prototype and deploy our models in a secure environment, which was crucial for our sensitive data."'),n.a.createElement("h4",null,"- Ambrish, Data Scientist")),n.a.createElement("div",{className:"testimonial"},n.a.createElement("p",null,'"The integration with OpenAI libraries was seamless, and the containerized setup made deployment straightforward."'),n.a.createElement("h4",null,"- Sharath Ravi, AI Engineer")),n.a.createElement("div",{className:"testimonial"},n.a.createElement("p",null,'"DataFort AI\'s private infrastructure solution ensured that our data never left our premises, meeting all our security requirements."'),n.a.createElement("h4",null,"- Jincy Xavier, IT Director"))));const T=l.a.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  overflow-x: hidden;
`,j=l.b`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,O=l.a.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${j} 0.6s ease-out;
`;var Y=function(){return n.a.createElement(T,null,n.a.createElement(f,null),n.a.createElement(O,{id:"key-benefits"},n.a.createElement(E,null)),n.a.createElement(O,null,n.a.createElement(y,null)),n.a.createElement(O,null,n.a.createElement(z,null)),n.a.createElement(O,null,n.a.createElement(C,null)),n.a.createElement(O,null,n.a.createElement(P,null)))};var B=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:o,getTTFB:i}=t;a(e),r(e),n(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null))),B()}],[[15,1,2]]]);
//# sourceMappingURL=main.d7f8b961.chunk.js.map