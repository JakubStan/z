import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhhirni",
        "template_lv85qtr",
        form.current,
        "XAzIHLQOl_ZLj8bJG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-bg" id="contact">
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <h2>OFF ROAD ZAKOPANE</h2>
          <p className="sub-header">POZOSTAŃMY W KONTAKCIE</p>
          <div className="col">
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Imię"
              required
            />
            <input
              type="text"
              id="surname"
              name="user_surname"
              placeholder="Nazwisko"
              required
            />
          </div>

          <div className="col">
            <input
              type="tel"
              name="user_phone"
              id="photonumber"
              placeholder="Numer telefonu"
              required
            />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="E mail"
              required
            />
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Wiadomość"
            required
          />

          <button type="submit">WYŚLIJ</button>
        </form>
      </div>
      <div className="gradient"></div>
    </div>
  );
};

export default Contact;
