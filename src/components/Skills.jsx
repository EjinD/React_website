import React, { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Git', level: 70 },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="skills" className="mb-5">
      <h2 className="h4 fw-bold text-info mb-4">Навыки</h2>
      <div className="skills-list">
        {skills.map(s => (
          <div className="skill-item" key={s.name}>
            <div className="skill-title">{s.name}</div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{
                  width: visible ? `${s.level}%` : '0%',
                }}
              >
                <span className="skill-percent">{s.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
