import React from 'react'

const skills = [
  {name:'HTML/CSS', level:90},
  {name:'JavaScript', level:80},
  {name:'React', level:75},
  {name:'Bootstrap', level:85},
  {name:'Git', level:70},
]

export default function Skills(){
  return (
    <section id="skills" className="mb-5">
      <h2 className="h4 fw-bold">Навыки</h2>
      <div className="row g-3 mt-2">
        {skills.map(s=>(
          <div className="col-md-6" key={s.name}>
            <div className="d-flex justify-content-between">
              <div>{s.name}</div>
              <div className="text-muted small">{s.level}%</div>
            </div>
            <div className="progress" style={{height:10}}>
              <div className="progress-bar" role="progressbar" style={{width: s.level + '%'}} aria-valuenow={s.level} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
