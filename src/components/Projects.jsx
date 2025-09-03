import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
const projects = [
  {
    title: 'App1',
    description: 'Placeholder',
    link: '#',
  },
  {
    title: 'App2',
    description: 'Placeholder',
    link: '#',
  },
  {
    title: 'App3',
    description: 'Placeholder',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-5">
      <h2 className="h4 fw-bold text-info">Проекты</h2>
      <div className="row g-4 mt-2">
        {projects.map(p => (
          <div className="col-md-4" key={p.title}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <a href={p.link} className="btn btn-outline-info btn-sm">
                  Смотреть
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

