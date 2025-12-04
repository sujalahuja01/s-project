import React from "react";
import "./Contact.css";
import pinIcon from "@/assets/pin.svg";
import mailIcon from "@/assets/mail.svg";
import phoneIcon from "@/assets/phone.svg";
import globeIcon from "@/assets/globe.svg";
import facebook from "@/assets/fb.svg";
import insta from "@/assets/insta.svg";
import xicon from "@/assets/x.svg";
import dribbble from "@/assets/dribble.svg";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <aside className="contact-left">
          <h2 className="contact-title">
            Contact <span>Us</span>
          </h2>

          <p className="contact-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="contact-list">
            <li className="contact-item">
              <img src={pinIcon} alt="" />
              <div>
                <div className="contact-meta">Address</div>
                <div className="contact-value">
                  Royal Ln. Mesa, New Jersey 45463
                </div>
              </div>
            </li>

            <li className="contact-item">
              <img src={mailIcon} alt="" />
              <div>
                <div className="contact-meta">Email</div>
                <div className="contact-value">Myportfy1234@gmail.com</div>
              </div>
            </li>

            <li className="contact-item">
              <img src={phoneIcon} alt="" />
              <div>
                <div className="contact-meta">Phone Number</div>
                <div className="contact-value">+12345 67890</div>
              </div>
            </li>

            <li className="contact-item">
              <img src={globeIcon} alt="" />
              <div>
                <div className="contact-meta">Website</div>
                <div className="contact-value">www.myportfy.com</div>
              </div>
            </li>
          </ul>

          <div className="contact-share">
            <div className="contact-share-title">Share Social Media</div>

            <div className="contact-socials">
              <a>
                <img src={facebook} alt="facebook" />
              </a>
              <a>
                <img src={insta} alt="instagram" />
              </a>
              <a>
                <img src={xicon} alt="x" />
              </a>
              <a>
                <img src={dribbble} alt="dribbble" />
              </a>
            </div>
          </div>
        </aside>

        <main className="contact-right">
          <form className="contact-form">
            <div className="contact-form-head">
              <h3>Add Details</h3>
            </div>

            <label className="contact-field">
              <span className="contact-field-label">Name*</span>
              <input type="text" placeholder="Name" />
            </label>

            <label className="contact-field">
              <span className="contact-field-label">Email Address*</span>
              <input type="email" placeholder="Email" />
            </label>

            <label className="contact-field">
              <span className="contact-field-label">Phone Number*</span>
              <input type="tel" placeholder="Phone" />
            </label>

            <label className="contact-field">
              <span className="contact-field-label">Enter Comment*</span>
              <textarea
                placeholder="What Would You Like To Discuss?"
                rows="5"
              />
            </label>

            <div className="contact-actions">
              <button className="contact-submit-btn">Submit</button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}
