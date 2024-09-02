import React, { useState, useEffect } from "react";
import "./NavBar.css"; // Import any necessary CSS

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      // User is scrolling up
      setShowNavBar(true);
    } else {
      // User is scrolling down
      setShowNavBar(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${showNavBar ? "visible" : "hidden"}`}>
      {/* Your NavBar content here */}
      <h1>Navbar</h1>
    </div>
  );
};

export default NavBar;
