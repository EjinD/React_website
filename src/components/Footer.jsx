import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 mt-5 border-top footer-dark">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-white">
        <div className="mb-2 mb-md-0">
          © {new Date().getFullYear()} Егин Даниил
        </div>
        <div className="text-info fw-bold">
          Сделано с React
        </div>
      </div>
    </footer>
  );
}
