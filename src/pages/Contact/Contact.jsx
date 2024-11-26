import React from "react";
import QR1 from "../../assets/qrcode_b.jpg";
import QR from "../../assets/qrcode_lexus.jpg";
import AU from "../../assets/Contact.png";

export default function Contact() {
  return (
    <div>
      <div className="main-header">
        <img src={AU} alt="Background image" className="main-image" />
        <div className="main-overlay"></div>
        <div className="main-text" aria-label="About Us Section">
          <h1>О нас</h1>
        </div>
      </div>
      <div className="About-main">
        <div className="Creator purple-bg">
          <img src={QR} alt="Support contact" className="Creator-Image" />
          <div className="Creator-text">
            Служба поддержки:
            <a href="mailto:shablyaanton00@gmail.com" style={{ color: "white" }}>
              shablyaanton00@gmail.com
            </a>
          </div>
        </div>
        <div className="Creator white-bg">
          <img src={QR1} alt="Collaboration contact" className="Creator-Image" />
          <div className="Creator-text">
            Сотрудничество/Реклама:
            <a href="mailto:pogodinbogdan30@gmail.com">
              pogodinbogdan30@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
