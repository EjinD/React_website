import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function About() {
  const fullText = `Я начинающий фронтенд‑разработчик, создаю современные веб‑приложения.
Стараюсь, чтобы интерфейсы были красивыми, удобными и быстрыми.
Использую HTML, CSS, JavaScript и React, уделяя внимание адаптивности,
производительности и доступности. Люблю оптимизировать код и улучшать
пользовательский опыт. Каждый проект — шаг в развитии моего мастерства.`;

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="about" className="py-5 text-light">
      <div className="container">
        <h5 className="text-info fw-bold mb-2">Привет!</h5>
        <h2 className="text-info fw-semibold mb-4">
           Я Егин Даниил — создаю удобные и современные веб‑приложения
        </h2>
        <p className="lead typewriter">
          {text}
          <span className="cursor"></span>
        </p>
      </div>
    </section>
  );
}
