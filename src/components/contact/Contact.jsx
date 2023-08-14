import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { useTranslation} from "react-i18next";

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
      <div className="left">
        <img src="/assets/profile2.png" alt="" />
      </div>

      <div className="right">
        <div className="contactForm">
          <h2>{t("contact.h2")}</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>{t("contact.name")}</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>{t("contact.message")}</label>
            <textarea name="message" />
            <input
              className="button"
              type="submit"
              value={t("contact.button")}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
