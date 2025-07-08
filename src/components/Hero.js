import React from "react";
import { FiSearch } from "react-icons/fi";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Learn to Code</h1>
      <h2>With the world's largest web developer site.</h2>

      {/* search box */}
      <div className="hero-search">
        <input placeholder="Search our tutorials, e.g. HTML" />
        <button>
          <FiSearch />
        </button>
      </div>

      <a href="#!" className="begin-link">
        Not Sure Where To Begin?
      </a>
    </section>
  );
}