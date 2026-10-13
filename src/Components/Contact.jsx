import "./Contact.css";
import Reveal from "./Reveal";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  // FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <Reveal className="sec-head contact-header">
            <span className="sec-tag">Let's Connect</span>

            <h2>
              Let's Build Something
              <span> Amazing Together</span>
            </h2>

            <p>
              Open to Software Engineering, Frontend Development, and
              AI-powered product opportunities. Feel free to reach out for
              collaboration or discussion.
            </p>
          </Reveal>

          <div className="contact-container">
            <Reveal className="contact-card glow">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <h3>Phone</h3>

              <p>+91 8826041265</p>
            </Reveal>

            <Reveal className="contact-card glow" delay={120}>
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <h3>Email</h3>

              <p>ankit.gusain97@gmail.com</p>
            </Reveal>

            <Reveal className="contact-card glow" delay={240}>
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Location</h3>

              <p>Tehri Garhwal, Uttarakhand, India</p>
            </Reveal>
          </div>

          <Reveal className="contact-actions" delay={200}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.gusain97@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Send Email
            </a>

            {/* <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <FaLinkedin />
              LinkedIn
            </a> */}

            <a
              href="https://github.com/ankitsinghgusaindev"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub />
              GitHub
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
