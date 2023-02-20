import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { About, Contact, Projects, Skills, Welcome } from "../../Organisms";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.brandLogo}>
          A N D R E A
        </Link>
        <div className={styles.menu}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
