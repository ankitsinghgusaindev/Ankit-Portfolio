import "./Project.css";
import Reveal from "./Reveal";
import {
  FaMapMarkedAlt,
  // FaChartLine,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaShoppingCart />,
    title: "UKHILLS OVERSEAS - E-commerce Application",
    status: "On Production",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Razorpay",
      "REST APIs",
      "Git/GitHub",
      "Vercel",
    ],
    description:
      "Scalable shopping application featuring product browsing, filtering, cart management, and optimized user experience.",
    features: ["Product Filtering", "Cart Management", "Responsive Layout"],
    highlights: [
      "Developed a full-stack e-commerce platform using React.js, Redux Toolkit, Next.js, Node.js, Prisma ORM, and PostgreSQL for customer and admin workflows.",
      "Built responsive product, category, cart, checkout, authentication, and order management functionality with REST API integration.",
      "Implemented role-based Admin/Customer authentication using secure HTTP-only session cookies, bcrypt password hashing, and protected API routes.",
      "Developed an Admin Dashboard for product, category, variant, inventory, and order management with support for multiple product weights, pricing, SKUs, and stock.",
      "Integrated Razorpay payments, including order creation, payment verification, payment status, and order processing workflows.",
      "Designed relational database models using Prisma and PostgreSQL for Users, Categories, Products, Product Variants, Orders, and Order Items.",
      "Deployed frontend and backend independently on Vercel with Neon PostgreSQL, configuring production environment variables, CORS, API connectivity, database migrations, and authentication.",
      "Migrated and validated 36 products and 108 product variants from the development PostgreSQL database to the production environment while preserving relational mappings.",
    ],
    github:
      "https://github.com/ankitsinghgusaindev/UK-Hills-Overseas-Frontend.git",
    live: "https://uk-hills-overseas-frontend.vercel.app/",
  },

  {
    icon: <FaUserCircle />,
    title: "Personal Portfolio Website",
    status: "On Production",
    tech: [
      "React.js",
      "JavaScript (ES6+)",
      "Vite",
      "HTML5",
      "CSS3",
      "React Icons",
      "Responsive Design",
    ],
    description:
      "Modern software engineer portfolio featuring interactive UI, responsive layouts, project showcases, and recruiter-friendly design.",
    features: ["Responsive Design", "Interactive Components", "Modern UI"],
    highlights: [
      "Developed a responsive portfolio using React.js, JavaScript, and Vite, showcasing professional experience, projects, technical skills, education, and certifications.",
      "Implemented a modular component-based architecture with reusable React components, functional components, responsive layouts, and smooth section-based navigation.",
      "Built a responsive and interactive UI using CSS3 and React Icons, optimized for desktop, tablet, and mobile devices, with Vite-based development and production builds.",
    ],
    github: "https://github.com/ankitsinghgusaindev/Ankit-Portfolio.git",
    live: "https://ankit-portfolio-gamma-six.vercel.app/",
  },

  {
    icon: <FaMapMarkedAlt />,
    title: "UK-HILLS Travel & Tourism Platform",
    status: "Development Phase",
    tech: [
      "React.js",
      "JavaScript",
      "Vite",
      "React Router",
      "React Leaflet",
      "CSS3",
      "Framer Motion",
      "Vercel",
    ],
    description:
      "Interactive tourism platform showcasing districts, adventure activities, travel guides, and destination information with a modern responsive UI.",
    features: [
      "Adventure Activity Filtering",
      "District-wise Exploration",
      "Responsive Design",
    ],
    highlights: [
      "Developed a responsive tourism platform covering 100+ Uttarakhand destinations using React.js, JavaScript, Vite, HTML5, and CSS3.",
      "Implemented component-based architecture, React Router, lazy loading, and Suspense for modular development and optimized application loading.",
      "Built dynamic search/filtering, booking workflows, destination discovery, and adventure modules using reusable React components.",
      "Integrated React Leaflet for interactive maps and Framer Motion for UI animations; deployed the application on Vercel.",
    ],
    github: "https://github.com/ankitsinghgusaindev/UK-Hills.git",
    live: "https://uk-hills.vercel.app",
  },

  // {
  //   icon: <FaChartLine />,
  //   title: "FinTech Dashboard",
  //   tech: ["React.js", "Node.js", "PostgreSQL"],
  //   description:
  //     "Financial analytics dashboard for monitoring customer loans, transactions, performance metrics, and business insights.",
  //   features: [
  //     "Analytics Dashboard",
  //     "Customer Management",
  //     "Data Visualization",
  //   ],
  //   github: "https://github.com/ankitsinghgusaindev/uk-hills",
  //   live: "https://ukhills.vercel.app",
  // },
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-tag">Featured Work</span>

          <h2>
            Recent <span>Projects</span>
          </h2>

          <p>
            A collection of software solutions, web applications, and digital
            experiences built using modern technologies and engineering best
            practices.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal className="project-card glow" delay={index * 120} key={project.title}>
              <div className="project-main">
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>

                  <span
                    className={`project-status ${
                      project.status === "On Production" ? "live" : "dev"
                    }`}
                  >
                    <i /> {project.status}
                  </span>

                  <span className="project-num">0{index + 1}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>✓ {feature}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <button
                    className="btn btn-primary"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    Live Demo
                  </button>

                  <button
                    className="btn btn-ghost"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    GitHub
                  </button>
                </div>
              </div>

              <div className="project-highlights">
                <h4>Key Highlights</h4>

                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
