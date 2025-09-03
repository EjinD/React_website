import React from 'react'

export default function Header(){
  return (
    <header className="bg-white border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-3">
          <div>
            <div className="fw-bold">Егин Даниил</div>
            <div className="text-muted small">Junior Frontend Developer</div>
          </div>
        </div>
        <nav className="d-none d-md-flex align-items-center gap-3">
          <a href="#projects" className="text-decoration-none text-muted">Проекты</a>
          <a href="#skills" className="text-decoration-none text-muted">Навыки</a>
          <a href="#contacts" className="btn btn-outline-primary btn-sm">Контакты</a>
        </nav>
      </div>
    </header>
  )
}
