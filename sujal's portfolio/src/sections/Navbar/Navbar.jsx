import { useState } from "react";
import "./Navbar.css";
import menu from "@/assets/menu-white.svg";
import close from "@/assets/close.svg";
import logo from "@/assets/logo.svg";
import tele from "@/assets/telephone.svg";

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#hero" className="nav-link" onClick={onClick}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link" onClick={onClick}>
          About Us
        </a>
      </li>
      <li className="nav-li">
        <a href="#services" className="nav-link" onClick={onClick}>
          Services
        </a>
      </li>
      <li className="nav-li">
        <a href="#project" className="nav-link" onClick={onClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a href="#blog" className="nav-link" onClick={onClick}>
          Blog
        </a>
      </li>
    </ul>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav-inner">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="desktop-nav">
          <Navigation />
        </div>

        <div>
          <button className="chat-btn">
            <img src={tele} alt="call button" className="tele-img" />
            <span>Let’s Talk</span>
          </button>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          <img src={open ? close : menu} alt="menu" />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu show">
          <Navigation onClick={() => setOpen(false)} />
          <button className="mobile-chat-btn">
            <img src={tele} alt="call button" className="tele-img" />
            <span>Let’s Talk</span>
          </button>
        </div>
      )}
    </header>
  );
}
