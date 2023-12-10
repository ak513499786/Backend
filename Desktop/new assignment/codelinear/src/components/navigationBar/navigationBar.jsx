import React, { useRef, useState } from "react";
import { gsap } from "gsap";

import logo from "../../images/Vector.svg";
import "./navigationBar.css";

export default function NavigationBar() {
  const slide = useRef(null);
  const line = useRef(null);
  const detail = useRef(null);
  const [animationType, setAnimationType] = useState("rotate");

  const handleToggle = () => {
    setAnimationType((prevType) =>
      prevType === "rotate" ? "rotateback" : "rotate"
    );
  };

  const performAnimation = () => {
    if (animationType === "rotate") {
      gsap.to(slide.current, { rotation: 90, gap: "0px", x: 13, y: 12 });
      gsap.to(detail.current, { opacity: 1, x: -550 });
      gsap.to(line.current, { opacity: 0 });
    } else if (animationType === "rotateback") {
      gsap.to(slide.current, { rotation: 0, gap: "15.01px", x: 0, y: 0 });
      gsap.to(line.current, { opacity: 1 });
      gsap.to(detail.current, { opacity: 0, x: 0 });
    }
  };

  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <div onClick={performAnimation} className="animate">
        <div ref={slide} className="nav-menu" onClick={handleToggle}>
          <div className="line"></div>
          <div className="line" ref={line}></div>
        </div>
      </div>
      <nav className="nav-bar">
        <ul className="detail" ref={detail}>
          <li>about us</li>
          <li>services</li>
          <li>work</li>
          <li>Let's Talk</li>
        </ul>
      </nav>
    </header>
  );
}
