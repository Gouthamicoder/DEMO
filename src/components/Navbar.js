import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { GiSparkles } from "react-icons/gi";
import { FaCode, FaGraduationCap, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "./logo.svg";     // adjust path if needed
import "./navbar.css";                        // component‑scoped styles

export default function Navbar() {
  /* split nav items into top row vs bottom row */
  const topLinks = [
    { text: "Tutorials", icon: <IoIosArrowDown /> },
    { text: "Exercises", icon: <IoIosArrowDown /> },
    { text: "Certificates", icon: <IoIosArrowDown /> },
    { text: "Services", icon: <IoIosArrowDown /> },
  ];

  const quickIcons = [
    { icon: <GiSparkles />, label: "Plus" },
    { icon: <FaCode />, label: "Spaces" },
    { icon: <FaGraduationCap />, label: "For Teachers" },
    { icon: <FaShoppingCart />, label: "Get Certified" },
    { icon: <FaUserCircle />, label: "" },
  ];

  /* single‑word shortcuts row */
  const subjects = [
    "HTML", "CSS", "JAVASCRIPT", "SQL", "PYTHON", "JAVA", "PHP", "HOW TO",
    "W3.CSS", "C", "C++", "C#", "BOOTSTRAP", "REACT", "MYSQL", "JQUERY",
    "EXCEL", "XML", "DJANGO", "NUMPY",
  ];

  return (
    <header className="navbar">
      {/* ---------- Top Row ---------- */}
      <div className="nav-top">
        <div className="nav-left">
          <img src={logo} className="logo" alt="logo" />
          {topLinks.map(({ text, icon }) => (
            <span key={text} className="nav-link">
              {text} {icon}
            </span>
          ))}
        </div>

        {/* search */}
        <div className="nav-search">
          <input placeholder="Search…" />
          <FiSearch className="search-icon" />
        </div>

        <div className="nav-right">
          {quickIcons.map(({ icon, label }, i) => (
            <span key={i} className="quick-link">
              {icon} {label && <span className="q-label">{label}</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Bottom Row ---------- */}
      <nav className="nav-bottom">
        {subjects.map((s) => (
          <span key={s} className="subject">
            {s}
          </span>
        ))}
      </nav>
    </header>
  );
}