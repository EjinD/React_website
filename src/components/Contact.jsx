import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaCodepen,
  FaFacebookSquare,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contacts" className="mb-5">
      <h2 className="h4 fw-bold mb-4">Контакты</h2>
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-4 rounded-3 text-white h-100"style={{ background: "#d8d8d8ff" }}>
            <div className="fs-5 fw-bold mb-3 text-center" style={{ color: "#000000ff" }}>Find me through
            </div>
             <div className="d-flex justify-content-around fs-3 mb-4">
              <a
                href="https://www.linkedin.com/in/maaazhar/"
                target="_blank"
                rel="noreferrer"
                className="text-danger"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Maaazhar"
                target="_blank"
                rel="noreferrer"
                className="text-danger"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://codepen.io/maaazhar"
                target="_blank"
                rel="noreferrer"
                className="text-danger"
              >
                <FaCodepen />
              </a>
              <a
                href="https://www.facebook.com/MAAAZHAAAR/"
                target="_blank"
                rel="noreferrer"
                className="text-danger"
              >
                <FaFacebookSquare />
              </a>
            </div>

            {/* Контакты */}
            <div className="mt-3">
              <div className="d-flex align-items-start mb-3">
                <FaUser className="me-2 text-danger" />
                <div>
                  <div className="fw-bold">Full Name</div>
                  <div>Данил Егин</div>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <FaPhoneAlt className="me-2 text-danger" />
                <div>
                  <div className="fw-bold">Mobile</div>
                  <div>
                    <a
                      href="tel:+79991234567"
                      className="text-white text-decoration-none"
                    >
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <FaEnvelope className="me-2 text-danger" />
                <div>
                  <div className="fw-bold">Email</div>
                  <div>
                    <a
                      href="mailto:danil.egin.bk@gmail.com"
                      className="text-white text-decoration-none"
                    >
                      danil.egin.bk@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <FaMapMarkedAlt className="me-2 text-danger" />
                <div>
                  <div className="fw-bold">Address</div>
                  <div>Хабаровск, Россия</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Правая колонка — форма */}
        <div className="col-md-6">
          <div
            className="p-4 bg-white rounded-3 h-100"
            style={{ boxShadow: "0 6px 30px rgba(15,23,42,0.06)" }}
          >
            <div className="fs-5 fw-bold mb-3">Напишите мне</div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Телефон"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  placeholder="Сообщение"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Отправить
              </button>
              {sent && (
                <div className="alert alert-success mt-3 p-2">
                  Сообщение отправлено!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
