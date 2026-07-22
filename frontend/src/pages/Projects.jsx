import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import { ExternalLink, Loader2 } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <Loader2 className="animate-spin" style={{ animation: 'spin 2s linear infinite' }} size={40} />
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin { animation: spin 1s linear infinite; }
        `}</style>
      </div>
    );
  }

  // Dummy data just in case DB is empty or fails to connect
  const displayProjects = projects.length > 0 ? projects : [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce site with user authentication, product management, and stripe payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      _id: '2',
      title: 'Social Media App',
      description: 'Real-time social media application featuring live chat, post sharing, and likes functionality.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <h2>Featured Projects</h2>
      {error && projects.length === 0 && <p style={{ textAlign: 'center', color: '#ef4444', marginBottom: '24px' }}>{error} Showing sample projects instead.</p>}
      
      <div className="projects-grid">
        {displayProjects.map(project => (
          <div className="card" key={project._id}>
            <div className="project-img-container">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="project-img" />
              ) : (
                <div style={{ color: 'var(--text-secondary)' }}>No Image</div>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p style={{ fontSize: '0.95rem' }}>{project.description}</p>
            
            <div className="tech-stack">
              {project.technologies?.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '8px 16px' }}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
