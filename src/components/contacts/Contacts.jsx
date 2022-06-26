import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>glennbjorn@u.nus.edu</h5>
            <a href="mailto:glennbjorn@u.nus.edu" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@bijorn</h5>
            <a href="https://telegram.me/bijorn" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+65 9767 1619</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6597671619"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
