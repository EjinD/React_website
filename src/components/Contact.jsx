import React from 'react';
import { useState } from "react";
import { FaGithubSquare, FaTelegramPlane, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const InfoItem = ({ icon: Icon, label, children }) => (
    <div className="d-flex align-items-start mb-3">
      <Icon className="icon-accent" />
      <div>
        <div className="fw-bold">{label}</div>
        {children}
      </div>
    </div>
  );

  return (
    <section id="contacts" className="mb-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card-dark h-100">
            <div className="fs-5 fw-bold mb-4 text-center text-info">Мои контакты</div>
            <div className="d-flex justify-content-center gap-4 fs-1 mb-1">
              <a href="https://github.com/EjinD" target="_blank" rel="noreferrer" className="text-info"><FaGithubSquare /></a>
              <a href="https://t.me/EjinD2" target="_blank" rel="noreferrer" className="text-info"><FaTelegramPlane /></a>
            </div>
            <InfoItem icon={FaUser} label="Имя">Даниил Егин</InfoItem>
            <InfoItem icon={FaPhoneAlt} label="Телефон">
              <a href="tel:+79243102274" className="text-white text-decoration-none">+7 (924) 310-22-74</a>
            </InfoItem>
            <InfoItem icon={FaEnvelope} label="Email">
              <a href="mailto:danil.egin.bk@gmail.com" className="text-white text-decoration-none">danil.egin.bk@gmail.com</a>
            </InfoItem>
            <InfoItem icon={FaMapMarkedAlt} label="Address">Хабаровск, Россия</InfoItem>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-dark h-100">
            <div className="fs-5 fw-bold mb-3 text-info text-center">Напишите мне</div>
            <form onSubmit={handleSubmit}>
              {["Ваше имя", "Телефон", "Email"].map((ph, i) => (
                <div className="mb-3" key={i}>
                  <input
                    type={i === 1 ? "tel" : i === 2 ? "email" : "text"}
                    name={i === 0 ? "name" : i === 1 ? "mobile" : "email"}
                    className="form-control input-dark"
                    placeholder={ph}
                    required
                  />
                </div>
              ))}
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  className="form-control input-dark"
                  placeholder="Сообщение"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-accent w-100">
                Отправить
              </button>
              {sent && <div className="alert alert-success mt-3 p-2">Сообщение отправлено!</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
