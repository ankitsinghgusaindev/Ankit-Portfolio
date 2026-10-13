import "./Certification.css";
import Reveal from "./Reveal";
import { FaReact, FaNetworkWired, FaCertificate } from "react-icons/fa";

import { SiClaude, SiGooglegemini } from "react-icons/si";

import { RiOpenaiFill } from "react-icons/ri";

const certifications = [
  {
    icon: <FaReact />,
    title: "Advanced React.js Development",
    provider: "Professional Training",
    category: "Frontend Development",
  },

  {
    icon: <FaNetworkWired />,
    title: "Hardware & Networking Fundamentals",
    provider: "Technical Certification",
    category: "Infrastructure",
  },

  {
    icon: <RiOpenaiFill />,
    title: "ChatGPT for Productivity & Development",
    provider: "AI Tools",
    category: "Artificial Intelligence",
  },

  {
    icon: <SiClaude />,
    title: "Claude AI Workflow & Prompting",
    provider: "AI Tools",
    category: "Artificial Intelligence",
  },

  {
    icon: <SiGooglegemini />,
    title: "Google Gemini AI Essentials",
    provider: "AI Tools",
    category: "Artificial Intelligence",
  },

  {
    icon: <FaCertificate />,
    title: "Perplexity AI Research & Productivity",
    provider: "AI Tools",
    category: "Artificial Intelligence",
  },
];

const Certifications = () => {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-tag">Professional Credentials</span>

          <h2>
            Certifications &<span> Continuous Learning</span>
          </h2>

          <p>
            Constantly enhancing my technical expertise through certifications,
            modern technologies, cloud platforms, and AI-powered development
            tools.
          </p>
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <Reveal className="cert-card glow" delay={(index % 3) * 120} key={cert.title}>
              <div className="cert-icon">{cert.icon}</div>

              <h3>{cert.title}</h3>

              <p>{cert.provider}</p>

              <span>{cert.category}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
