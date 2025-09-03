import React from 'react'

export default function Footer(){
  return (
    <footer className="py-4 mt-5 border-top bg-white">
      <div className="container d-flex justify-content-between small text-muted">
        <div>© {new Date().getFullYear()} Егин Даниил</div>
        <div>Сделано с React</div>
      </div>
    </footer>
  )
}
