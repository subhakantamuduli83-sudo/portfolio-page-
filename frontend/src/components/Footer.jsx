import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
          <a href="#" className="btn btn-outline" style={{ padding: '8px', borderRadius: '50%' }}>
            <Github size={20} />
          </a>
          <a href="#" className="btn btn-outline" style={{ padding: '8px', borderRadius: '50%' }}>
            <Linkedin size={20} />
          </a>
          <a href="#" className="btn btn-outline" style={{ padding: '8px', borderRadius: '50%' }}>
            <Mail size={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio. Built with MERN Stack.</p>
      </div>
    </footer>
  );
};

export default Footer;
