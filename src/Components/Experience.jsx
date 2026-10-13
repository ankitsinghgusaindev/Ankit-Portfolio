import "./Experience.css";
import Reveal from "./Reveal";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Decimal Technology Pvt. Ltd., Gurugram",
      client: "Client: AUCC Bank",
      duration: "January 2024 - July 2024",
      icon: <FaLaptopCode />,
      description:
        "Integrated software components and third-party systems to improve accessibility, reliability, and overall product functionality.",
      achievements: [
        "Managed and maintained a banking application for AUCC Bank, handling production issues, client-driven enhancements, application optimization, and ongoing feature development.",
        "Collaborated directly with the client through daily requirement and status calls, translating business requirements into technical solutions and delivering priority enhancements within defined timelines.",
        "Owned the production defect lifecycle by performing root-cause analysis, prioritizing fixes, and maintaining the bug backlog to ensure timely resolution of critical issues.",
        "Developed and integrated application features using React.js, JavaScript, RESTful APIs, and SQL while collaborating with backend and cross-functional teams to ensure reliable data flow, application stability, and optimized performance.",
      ],
      skills: ["React.js", "JavaScript", "RESTful APIs", "SQL", "Testing", "System Validation"],
    },

    {
      role: "Software Developer",
      company: "Saarathi Finbiz Pvt. Ltd., Gurugram",
      client: "Partners: DMI, PNB, Cholamandalam",
      duration: "October 2020 - January 2024",
      icon: <FaCode />,
      description:
        "Developed and maintained software solutions using Agile methodologies while contributing to system testing and product delivery.",
      achievements: [
        "Developed and managed authentication, authorization, and onboarding modules for customers and DSAs across web and mobile applications, integrating Aadhaar, PAN, and third-party KYC services.",
        "Designed and implemented end-to-end loan journeys for Personal Loan and Working Capital products, covering frontend architecture, backend integration, database changes, notifications, and product workflows.",
        "Owned the architecture and integration of multiple banking partners, including DMI, PNB, and Cholamandalam, adapting their APIs and loan-processing workflows to the existing application ecosystem.",
        "Collaborated with clients and cross-functional teams to analyze business requirements, define technical solutions, coordinate development tasks, and ensure seamless frontend, backend, and database integration.",
        "Managed production issues and prioritized critical customer and DSA defects, performing root-cause analysis and optimizing application performance, stability, and maintainability.",
        "Managed Sprint planning and Jira workflows while coordinating team deliverables.",
      ],
      skills: ["JavaScript", "React.js", "MySQL", "Agile", "KYC Integration", "Jira"],
    },
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-tag">Professional Journey</span>

          <h2>
            My <span>Experience</span>
          </h2>
        </Reveal>

        <div className="timeline">
          <span className="timeline-line" />

          {experiences.map((exp, index) => (
            <Reveal className="timeline-item" delay={index * 150} key={exp.role}>
              <div className="timeline-icon">{exp.icon}</div>

              <div className="timeline-content glow">
                <div className="experience-top">
                  <span className="duration">{exp.duration}</span>
                  <span className="company-badge">{exp.company}</span>
                </div>

                <h3>{exp.role}</h3>

                <span className="client-tag">{exp.client}</span>

                <p>{exp.description}</p>

                <div className="achievement-list">
                  {exp.achievements.map((item) => (
                    <div key={item} className="achievement-item">
                      <span className="tick">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="experience-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
