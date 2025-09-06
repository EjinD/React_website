import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function About() {
  const fullText = `Фронтенд-разработчик, создаю современные и удобные веб-приложения.
Работаю с HTML, CSS, JavaScript и React, уделяю внимание адаптивности, производительности и доступности.
Оптимизирую код и повышаю качество интерфейсов, чтобы пользователи получали быстрый и комфортный опыт.
Считаю, что сильный продукт начинается с продуманного интерфейса, и стремлюсь к тому, чтобы каждая деталь работала на результат.`;

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
