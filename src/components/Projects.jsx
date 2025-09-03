import React from 'react'

const projects = [
  {title:'RawCreateName1', desc:'desc...', tech:'React • Bootstrap', link:'#'},
  {title:'RawCreateName2', desc:'desc...', tech:'HTML • CSS • Bootstrap', link:'#'},
 /* {title:'RawCreateName3', desc:'desc...', tech:'React', link:'#'}
 Да да я еще не придумал как всё красиво оформить*/
]

export default function Projects(){
  return (
    <section id="projects" className="mb-5">
      <h2 className="h4 fw-bold">Проекты</h2>
      <div className="row mt-3">
        {projects.map(p=>(
          <div className="col-md-4 mb-3" key={p.title}>
            <div className="card project-card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted">{p.desc}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <div className="text-muted small">{p.tech}</div>
                  <a href={p.link} className="btn btn-sm btn-outline-primary">Смотреть</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
