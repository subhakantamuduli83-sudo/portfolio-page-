import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Full-Stack Developer</h1>
          <p>Building beautiful, performant, and scalable web applications using the MERN stack.</p>
          <Link to="/projects" className="btn btn-primary">
            View My Work <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="container">
        <h2>My Expertise</h2>
        <div className="projects-grid">
          <div className="card">
            <Globe size={40} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>Frontend Development</h3>
            <p>Creating dynamic and responsive user interfaces with React, Vite, and modern CSS.</p>
          </div>
          <div className="card">
            <Database size={40} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>Backend & Database</h3>
            <p>Designing robust RESTful APIs with Node.js, Express, and modeling data with MongoDB Atlas.</p>
          </div>
          <div className="card">
            <Code size={40} color="var(--accent-color)" style={{ marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '12px' }}>Full-Stack Integration</h3>
            <p>Seamlessly connecting frontends to scalable backends and deploying on Vercel and Render.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
