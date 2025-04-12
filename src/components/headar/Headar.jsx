import { useState } from "react";
 
export default function Headar() {
  const [shownav, setshownav] = useState(false);

  return (
    <>
      {/* 
    - /TOP BAR
  */}
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true" />
            </div>
            <span className="span">
              Restaurant St, Delicious City, cairo 9578
            </span>
          </address>
          <div className="separator" />
          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true" />
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>
          <a href="tel:+" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true" />
            </div>
            <span className="span">+01456789012</span>
          </a>
          <div className="separator" />
          <a href="mailto:" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true" />
            </div>
            <span className="span">xxxx@gmail.com</span>
          </a>
        </div>
      </div>
      {/* 
    - /HEADER
  */}

      <header className="header" data-header="">
        <div className="container">
          <a href="/" className="logo">
            <img
              src="./assets/images/logo.svg"
              width={160}
              height={50}
              alt="Grilli - Home"
            />
          </a>

          <nav className={`navbar ${shownav ? "showw" : ""}`} data-navbar="">
            <button
              onClick={() => setshownav(false)}
              className="close-btn"
              aria-label="close menu"
              data-nav-toggler=""
            >
              <ion-icon name="close-outline" aria-hidden="true" />
            </button>
            <a href="/" className="logo">
              <img
                src="./assets/images/logo.svg"
                width={160}
                height={50}
                alt="Grilli - Home"
              />
            </a>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/home" className="navbar-link hover-underline active">
                  <div className="separator" />
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#menu" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Menus</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#ourChefs" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Our Chefs</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#Contact" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Contact</span>
                </a>
              </li>
            </ul>

            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
              <a
                href="mailto:booking@grilli.com"
                className="body-4 sidebar-link"
              >
                booking@grilli.com
              </a>
              <div className="separator" />
              <p className="contact-label">Booking Request</p>
              <a
                href="tel:+88123123456"
                className="body-1 contact-number hover-underline"
              >
                +88-123-123456
              </a>
            </div>
          </nav>

          <a href="/" className="btn btn-secondary">
            <span className="text text-1">Find A Table</span>
            <span className="text text-2" aria-hidden="true">
              Find A Table
            </span>
          </a>
          <button
            onClick={() => setshownav(true)}
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler=""
          >
            <span className="line line-1" />
            <span className="line line-2" />
            <span className="line line-3" />
          </button>

          <div
            className={`overlay ${shownav ? "active" : ""}`}
            onClick={() => setshownav(false)}
          ></div>
        </div>
      </header>
    </>
  );
}
