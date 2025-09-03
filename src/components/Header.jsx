import React from 'react';

export default function Header() {
  return (
    <header className="header-dark border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-3">
          <div>
            <div className="fw-bold text-white">Егин Даниил</div>
            <div className="text-info small">Junior Frontend Developer</div>
          </div>
        </div>

        <nav className="d-none d-md-flex align-items-center gap-3">
          <a href="#projects" className="header-link">Проекты</a>
          <a href="#skills" className="header-link">Навыки</a>
          <a href="#contacts" className="header-link">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
