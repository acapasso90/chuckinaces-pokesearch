import React, { useEffect, useState } from "react";
import Spoink from "./spoink.gif"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return function cleanup() {
      window.removeEventListener("scroll", toggleVisibility);
  }
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
     <button className="topButton"> <i className="fas fa-chevron-up"></i> TOP           <img src={Spoink} alt="Spoink" className="spoink"/></button> 
        </div>}
    </div>
  );
}