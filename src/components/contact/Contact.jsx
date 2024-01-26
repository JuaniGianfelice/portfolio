import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  const [t, i18n] = useTranslation("global");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kulub4al1",
        "template_erlzy4t",
        form.current,
        "z7D9but14mgThDIxN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">


      <div className="contactForm">

        <h1>{t("contact.h2")}</h1>

        <form ref={form} onSubmit={sendEmail}>

          <div class="row">
            <div class="col">
              <label>{t("contact.name")}</label>
              <input type="text" class="form-control" placeholder={t("contact.name")} aria-label="Name" name="user_name" />
            </div>

            <div class="col">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="Email" aria-label="Email" name="user_email" />
            </div>
          </div>

          <div class="msg mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">{t("contact.message")}</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder={t("contact.message")}/>
          </div>

          <input className="btn btn-primary btn-lg" type="submit" value={t("contact.button")} />
        </form>

      </div>

    </div>
  );
}
