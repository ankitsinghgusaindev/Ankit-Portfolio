import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import ProfileImage from "../assets/AnkitImg.png";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const downloadResume = async () => {
  try {
    const response = await fetch("/Ankit_Singh_Gusain_Resume.pdf");

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "/Ankit_Singh_Gusain_Resume.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};

// Counts up to a value like "3.5+" when it scrolls into view.
const CountUp = ({ value }) => {
  const target = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const decimals = value.includes(".") ? 1 : 0;
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <h3 ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </h3>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="availability">
            <span></span>
            Available for Opportunities
          </div>

          <div className="hero-tag">
            Frontend & Full-Stack Developer • React.js • Node.js • REST APIs
          </div>

          <h1>
            Hi, I'm <br />
            <span>Ankit Singh Gusain</span>
          </h1>

          <h2>Frontend & Full-Stack Developer</h2>

          <p>
            Frontend & Full-Stack Developer with 3.5+ years of experience
            building, testing, deploying, and maintaining scalable web
            applications. Skilled in React.js, JavaScript, RESTful APIs, SQL,
            and AWS, with experience in banking applications, third-party
            integrations, performance optimization, and production support.
            Passionate about building responsive, reliable, and user-focused
            solutions through clean code and modern development practices.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={downloadResume}>
              Download Resume
              <FaDownload />
            </button>

            <a href="#projects" className="btn btn-ghost">
              View Projects
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <span className="ring ring-1" />
            <span className="ring ring-2" />
            <div className="photo">
              <img src={ProfileImage} alt="Ankit Singh Gusain" />
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <CountUp value="3.5+" />
              <span>Years</span>
            </div>

            <div>
              <CountUp value="3+" />
              <span>Projects</span>
            </div>

            <div>
              <CountUp value="20+" />
              <span>Tech Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
