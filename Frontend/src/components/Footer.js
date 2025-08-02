import React from "react";
import { FaGithub } from "react-icons/fa"; // Add FaUserHeart

const Footer = () => (
  <footer
    style={{
      background: "#2e7d32",
      color: "#fff",
      padding: "30px 0 15px 0",
      textAlign: "center",
      marginTop: "40px",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}
  >
    {/* { <div style={{ marginBottom: "10px", fontSize: "1.15em", fontWeight: "bold", letterSpacing: "1px" }}>
      ECORAIZ - The Smart Planting <span style={{ fontSize: "0.9em", fontWeight: "normal" }}>(Tree Planting NGO)</span>
    </div> } */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginBottom: "10px"
      }}
    >
      <a
        href="https://github.com/SuryaNarayananDev/ECORAIZ-The_Smart_Planting"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 14px",
          borderRadius: "5px",
          background: "rgba(255,255,255,0.08)",
          transition: "background 0.2s"
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#388e3c")}
        onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        <FaGithub style={{ marginRight: "8px", fontSize: "1.2em" }} />
        Github
      </a>
      <a
        href="https://open-hearted.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 14px",
          borderRadius: "5px",
          background: "rgba(255,255,255,0.08)",
          transition: "background 0.2s"
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#388e3c")}
        onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        <span style={{ marginRight: "8px", fontSize: "1.2em" }}>🧑‍💻</span>
        Contributors
      </a>
    </div>
    <div style={{ fontSize: "0.95em", opacity: 0.85 }}>
      &copy; {new Date().getFullYear()} ECORAIZ. All rights reserved.
    </div>
  </footer>
);

export default Footer;