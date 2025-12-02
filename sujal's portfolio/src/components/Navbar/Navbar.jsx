import { useState } from "react";
import "./Navbar.css";
import tele from "@/assets/telephone.svg";

function Navigation({ onLinkClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="nav-link" onClick={onLinkClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link" onClick={onLinkClick}>
          About Us
        </a>
      </li>
      <li className="nav-li">
        <a href="#services" className="nav-link" onClick={onLinkClick}>
          Services
        </a>
      </li>
      <li className="nav-li">
        <a href="#roject" className="nav-link" onClick={onLinkClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a href="#blog" className="nav-link" onClick={onLinkClick}>
          Blog
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-container">
      <nav className="navbar-inner">
        <div className="logo">f</div>
        <Navigation />
        <div>
          <button className="nav-chat-btn">
            <img src={tele} alt="" className="tele-img" />
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Mobile menu
      {isOpen && (
        <nav className="mobile-nav">
          <Navigation onLinkClick={() => setIsOpen(false)} />
        </nav>
      )} */}
    </header>
  );
};

export default Navbar;
