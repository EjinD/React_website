import React, { useState } from "react";
import {
  FaGithubSquare, FaTelegramPlane, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt
} from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const cardStyle = { background: "#0f172a", boxShadow: "0 6px 30px rgba(15,23,42,0.4)", color: "#fff" };
  const iconStyle = "me-3 text-info fs-4";

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const InfoItem = ({ icon: Icon, label, children }) => (
    <div className="d-flex align-items-start mb-3">
      <Icon className={iconStyle} />
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
          <div className="p-4 rounded-4 h-100" style={cardStyle}>
            <div className="fs-5 fw-bold mb-4 text-center text-info">Мои контакты</div>
            <div className="d-flex justify-content-center gap-4 fs-1 mb-1">
              <a href="https://github.com/EjinD" target="_blank" rel="noreferrer" className="text-info"><FaGithubSquare /></a>
              <a href="https://t.me/EjinD2" target="_blank" rel="noreferrer" className="text-info"><FaTelegramPlane /></a>
            </div>
            <div className="mt-" >
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
        </div>

        <div className="col-md-6">
          <div className="p-4 rounded-3 h-100" style={cardStyle}>
            <div className="fs-5 fw-bold mb-3 text-info text-center">Напишите мне</div>
            <form onSubmit={handleSubmit}>
              {["Ваше имя", "Телефон", "Email"].map((ph, i) => (
                <div className="mb-3" key={i}>
                  <input
                    type={i === 1 ? "tel" : i === 2 ? "email" : "text"}
                    name={i === 0 ? "name" : i === 1 ? "mobile" : "email"}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder={ph}
                    required
                  />
                </div>
              ))}
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Сообщение"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn w-100 fw-bold" style={{ backgroundColor: "#0dcaf0", color: "#000" }}>
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
