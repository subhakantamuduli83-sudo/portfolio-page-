import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="glass">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Port<span>folio</span>.
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
