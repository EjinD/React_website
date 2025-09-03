import React, { useEffect, useState } from 'react';
import { FaRocket, FaFileAlt } from 'react-icons/fa';
import '../styles.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="mb-5">
      <div className="row align-items-stretch">
        <div className={`col-lg-6 fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="hero-card h-100 d-flex flex-column justify-content-between">
            <div>
              <h1 className="display-5 fw-bold text-info mb-3">
                Привет! <span className="text-white">Я — Frontend‑разработчик</span>
              </h1>
              <p className="text mb-4 fs-5">
                Создаю современные, адаптивные и удобные интерфейсы на <strong>HTML</strong>, <strong>CSS</strong>, 
                <strong>JavaScript</strong> и <strong>React</strong>. Люблю чистый код, внимание к деталям и постоянное развитие.
              </p>
      <div className="d-flex gap-3 flex-wrap">
        <a
           href="#projects"
           className="btn hero-btn-accent btn-lg d-flex align-items-center gap-2 hero-btn-text"
        >
           <FaRocket /> Мои проекты
       </a>
          <a
           href="#resume"
           className="btn hero-btn-outline btn-lg d-flex align-items-center gap-2 hero-btn-text"
         >
       <FaFileAlt /> Резюме
         </a>
          </div>
            </div>
            <div className="mt-4 text small">
              Ключевые навыки: HTML • CSS • JavaScript • React • Bootstrap • Git
            </div>
          </div>
        </div>

        <div className={`col-lg-6 text-center mt-4 mt-lg-0 scale-in ${isVisible ? 'visible' : ''}`}>
          <div className="hero-avatar-wrapper h-100 d-flex flex-column justify-content-center align-items-center">
            <img src="/avatar-placeholder.svg" alt="avatar" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
