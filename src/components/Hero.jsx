import React from 'react'

export default function Hero(){
  return (
    <section className="mb-5">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="hero-card">
            <h1 className="display-6 fw-bold">Привет — я frontend-разработчик</h1>
            <p className="text-muted mb-4">Делаю аккуратные интерфейсы на HTML, CSS, JavaScript и React. Быстро решаю задачи и стремлюсь изучать новое.</p>
            <div className="d-flex gap-2">
              <a href="#projects" className="btn btn-primary btn-lg">Мои проекты</a>
              <a href="#contacts" className="btn btn-outline-secondary btn-lg">Связаться</a>
            </div>
            <div className="mt-3 text-muted small">Ключевые навыки: HTML • CSS • JavaScript • React • Bootstrap • Git</div>
          </div>
        </div>
        <div className="col-lg-5 text-center mt-4 mt-lg-0">
          <div className="p-4 bg-white rounded-3" style={{boxShadow:'0 6px 30px rgba(15,23,42,0.06)'}}>
            <img src="/avatar-placeholder.svg" alt="avatar" style={{width:180,height:180,objectFit:'cover',borderRadius:12}}/>
            <div className="mt-3">Нажми на проект, чтобы посмотреть демо</div>
          </div>
        </div>
      </div>
    </section>
  )
}
