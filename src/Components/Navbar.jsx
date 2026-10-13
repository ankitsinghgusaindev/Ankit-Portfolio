import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(window.scrollY > 30);
      setProgress((window.scrollY / (h.scrollHeight - h.clientHeight)) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="logo">
          Ankit Singh Gusain<span>.</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
