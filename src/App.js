import "./styles.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Animation easing
    });
  }, []);
  return (
    <div className="Card" data-aos="fade-up">
      <img
        data-aos="fade-up"
        src="https://i.postimg.cc/43h2T64Q/sahil-profile-photo.png"
        alt="sahil image"
      />
      <h2 data-aos="fade-up">Sahil Kumar</h2>
      <h4 data-aos="fade-right">
        Full Stack Developer from India with a specialization in React.js for
        frontend development and Java Spring Boot for backend solutions. His
        expertise extends to PostgreSQL and MySQL for efficient database
        management, ensuring
      </h4>
      <div data-aos="fade-up">
        <h4 data-aos="fade-right">Skills</h4>
        <div>
          <button>Html</button>
          <button>Css</button>

          <button>Js</button>
          <button>React</button>

          <button>Java</button>
          <button>Spring Boot</button>

          <button>MySQL</button>
        </div>
      </div>
    </div>
  );
}
