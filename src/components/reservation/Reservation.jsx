import React from "react";

export default function Reservation() {
  const persons = [
    "1 Person",
    "2 Person",
    "3 Person",
    "4 Person",
    "5 Person",
    "6 Person",
    "7 Person",
  ];

  const times = [
    "08:00 am",
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 am",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
    "10:00 pm",
  ];

  return (
    <main>
      <article>
        <section className="reservation">
          <div className="container">
            <div className="form reservation-form bg-black-10">
              <form action="" className="form-left">
                <h2 className="headline-1 text-center">Online Reservation</h2>
                <p className="form-text text-center">
                  Booking request{" "}
                  <a href="tel:+88123123456" className="link">
                    +88-123-123456
                  </a>{" "}
                  or fill out the order form
                </p>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    className="input-field"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>

                <div className="input-wrapper">
                  <div className="icon-wrapper">
                    <ion-icon
                      name="person-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <select name="person" className="input-field">
                      {persons.map((person, i) => (
                        <option
                          key={i}
                          value={person.toLowerCase().replace(" ", "-")}
                        >
                          {person}
                        </option>
                      ))}
                    </select>
                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                  </div>

                  <div className="icon-wrapper">
                    <ion-icon
                      name="calendar-clear-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <input
                      type="date"
                      name="reservation-date"
                      className="input-field"
                    />
                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                  </div>

                  <div className="icon-wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <select name="time" className="input-field">
                      {times.map((time, i) => (
                        <option key={i} value={time.replace(" ", "")}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  autoComplete="off"
                  className="input-field"
                ></textarea>

                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Book A Table</span>
                  <span className="text text-2" aria-hidden="true">
                    Book A Table
                  </span>
                </button>
              </form>

              <div
                id="Contact"
                className="form-right text-center"
                style={{
                  backgroundImage: "url('./assets/images/form-pattern.png')",
                }}
              >
                <h2 className="headline-1 text-center">Contact Us</h2>
                <p className="contact-label">Booking Request</p>
                <a
                  href="tel:+88123123456"
                  className="body-1 contact-number hover-underline"
                >
                  +88-123-123456
                </a>
                <div className="separator"></div>
                <p className="contact-label">Location</p>
                <address className="body-4">
                  Restaurant St, Delicious City, <br />
                  London 9578, UK
                </address>
                <p className="contact-label">Lunch Time</p>
                <p className="body-4">
                  Monday to Sunday <br />
                  11.00 am - 2.30 pm
                </p>
                <p className="contact-label">Dinner Time</p>
                <p className="body-4">
                  Monday to Sunday <br />
                  05.00 pm - 10.00 pm
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
