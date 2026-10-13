import "./Footer.css";

import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© 2026 Ankit Singh Gusain. All Rights Reserved.</p>

        <p>Built with React.js</p>

        <a href="#home" className="scroll-top" aria-label="Back to top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
