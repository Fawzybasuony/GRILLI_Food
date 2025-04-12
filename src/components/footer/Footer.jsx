import React from "react";

export default function Footer() {
  const navLinks = ["Home", "Menus", "About Us", "Our Chefs", "Contact"];
  const socialLinks = ["Facebook", "Instagram", "Twitter", "Youtube", "Google Map"];

  return (
    <>
      <footer
        className="footer section has-bg-image text-center"
        style={{ backgroundImage: 'url("./assets/images/footer-bg.jpg")' }}
      >
        <div className="container">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              <a href="#" className="logo">
                <img
                  src="./assets/images/logo.svg"
                  width={160}
                  height={50}
                  loading="lazy"
                  alt="grilli home"
                />
              </a>
              <address className="body-4">
                Restaurant St, Delicious City, London 9578, UK
              </address>
              <a href="mailto:booking@grilli.com" className="body-4 contact-link">
                booking@grilli.com
              </a>
              <a href="tel:+88123123456" className="body-4 contact-link">
                Booking Request : +88-123-123456
              </a>
              <p className="body-4">Open : 09:00 am - 01:00 pm</p>
              <div className="wrapper">
                <div className="separator" />
                <div className="separator" />
                <div className="separator" />
              </div>
              <p className="title-1">Get News & Offers</p>
              <p className="label-1">
                Subscribe us & Get <span className="span">25% Off.</span>
              </p>
              <form action="" className="input-wrapper">
                <div className="icon-wrapper">
                  <ion-icon name="mail-outline" aria-hidden="true" />
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Your email"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Subscribe</span>
                  <span className="text text-2" aria-hidden="true">Subscribe</span>
                </button>
              </form>
            </div>

            <ul className="footer-list">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="label-2 footer-link hover-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="footer-list">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="label-2 footer-link hover-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © 2025 Grilli. All Rights Reserved | Crafted by{" "}
              <a
                href="https://github.com/codewithsadee"
                target="_blank"
                className="link"
              >
                codewithsadee
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  );
}
