import "./About.css";
import Reveal from "./Reveal";

const highlights = [
  [
    "Software Engineering",
    "Building practical, reliable, and maintainable applications that solve real-world problems.",
  ],
  [
    "Banking & FinTech Experience",
    "Integrated loan products and banking partner services through REST APIs to support seamless financial workflows.",
  ],
  ["Cloud & DevOps", "Deploying and managing applications with AWS S3, Vercel, Git, and GitHub."],
  [
    "AI & Automation",
    "Using AI tools like ChatGPT, Claude, and Gemini to support code generation, debugging, and problem-solving.",
  ],
];

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-tag">About Me</span>

          <h2>
            Building Software That Solves
            <span> Real Business Problems</span>
          </h2>
        </Reveal>

        <div className="about-content">
          <Reveal className="about-text glow">
            <p>
              I'm <strong>Ankit Singh Gusain</strong>, a software developer who
              enjoys transforming business requirements into practical,
              user-focused applications. With experience in banking and FinTech,
              I focus on solving complex problems, building maintainable
              solutions, and delivering reliable software that meets real-world
              business needs.
            </p>

            <p>
              At Decimal Technology and Saarathi Finbiz, I worked on banking and
              FinTech applications involving customer onboarding,
              authentication, loan workflows, and banking partner integrations.
              My responsibilities also included production issue resolution,
              root-cause analysis, and delivering client-driven enhancements.
            </p>

            <p>
              I enjoy working across the application lifecycle, from building
              reusable React components and integrating backend APIs to
              troubleshooting database-related issues and improving application
              performance. I also value collaboration with backend engineers,
              clients, and cross-functional teams to deliver effective
              solutions.
            </p>

            <p>
              Outside feature development, I focus on writing maintainable code,
              learning through hands-on projects, and improving development
              workflows through testing, code reviews, and modern engineering
              tools. I believe good software is not just about functionality,
              but also reliability, usability, and long-term maintainability.
            </p>
          </Reveal>

          <div className="about-highlights">
            {highlights.map(([title, text], i) => (
              <Reveal
                className="highlight-card glow"
                delay={i * 120}
                key={title}
              >
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
