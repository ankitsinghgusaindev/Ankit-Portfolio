import "./Skills.css";
import Reveal from "./Reveal";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaAws,
  // FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaPlug,
  FaRoute,
  FaBug,
  FaUsers,
  FaLinux,
  FaWindows,
  FaMobileAlt,
  FaShieldAlt,
  FaSitemap,
} from "react-icons/fa";

import {
  SiRedux,
  SiFirebase,
  // SiExpress,
  // SiMongodb,
  SiJquery,
  SiMysql,
  // SiKubernetes,
  SiFigma,
  SiSketch,
  SiClaude,
  SiGooglegemini,
  SiGithubcopilot,
  SiCanva,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiRazorpay,
  SiZod,
  SiJest,
  SiTestinglibrary,
  SiVercel,
  SiVite,
  SiReactrouter,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { RiOpenaiFill } from "react-icons/ri";

const skills = [
  {
    category: "Programming",
    items: [
      { name: "JavaScript (ES6+)", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },

  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux-Toolkit", icon: <SiRedux /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Responsive Design", icon: <FaMobileAlt /> },
    ],
  },

  {
    category: "Backend & APIs",
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      // { name: "Express.js", icon: <SiExpress /> },
      { name: "RESTful APIs", icon: <FaPlug /> },
      { name: "Third-Party API Integration", icon: <FaSitemap /> },
    ],
  },

  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      // { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    category: "Payments & Validation",
    items: [
      { name: "Razorpay", icon: <SiRazorpay /> },
      { name: "Zod", icon: <SiZod /> },
      { name: "API Validation", icon: <FaShieldAlt /> },
    ],
  },

  {
    category: "Testing",
    items: [
      { name: "Jest", icon: <SiJest /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS S3", icon: <FaAws /> },
      { name: "Vercel", icon: <SiVercel /> },
      // { name: "Docker", icon: <FaDocker /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },

  {
    category: "Practices & Tools",
    items: [
      { name: "Agile/Scrum", icon: <FaUsers /> },
      { name: "Code Reviews", icon: <FaRoute /> },
      { name: "Debugging", icon: <FaBug /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Windows", icon: <FaWindows /> },
    ],
  },

  {
    category: "UI / UX Design",
    items: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Sketch", icon: <SiSketch /> },
    ],
  },

  {
    category: "AI Tools & Productivity",
    items: [
      { name: "ChatGPT", icon: <RiOpenaiFill /> },
      { name: "Claude", icon: <SiClaude /> },
      { name: "Gemini", icon: <SiGooglegemini /> },
      { name: "Perplexity", icon: "🧠" },
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "Cursor AI", icon: "⚡" },
      { name: "Canva AI", icon: <SiCanva /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-tag">Technical Expertise</span>

          <h2>
            Engineering Solutions Through
            <span> Modern Technologies</span>
          </h2>

          <p>
            Leveraging software engineering principles, cloud technologies,
            modern frameworks, and AI-powered tools to build scalable,
            maintainable and impactful digital products.
          </p>
        </Reveal>

        <div className="skills-container">
          {skills.map((group, index) => (
            <Reveal
              className={`skill-category glow cat-${index}`}
              delay={index * 100}
              key={group.category}
            >
              <h3>{group.category}</h3>

              <div className="skills-grid">
                {group.items.map((skill, i) => (
                  <div className="skill-card" key={skill.name} style={{ "--i": i }}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="currently-learning">
          <h3>Currently Exploring</h3>

          <div className="learning-tags">
            <span>AI-Assisted Development</span>
            <span>Full-Stack with Next.js & Node.js</span>
            <span>Testing with Jest & React Testing Library</span>
            {/* <span>Microservices</span> */}
            {/* <span>Advanced React Patterns</span> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
