import React from "react";

export default function Sectiontesti() {
  return (
    <main>
      <article>
        <section
          className="section testi text-center has-bg-image"
          style={{
            backgroundImage: "url('./assets/images/testimonial-bg.jpg')",
          }}
          aria-label="testimonials"
        >
          <div className="container">
            <div className="quote">”</div>
            <p className="headline-2 testi-text">
              I wanted to thank you for inviting me down for that amazing dinner
              the other night. The food was extraordinary.
            </p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <div className="profile">
              <img
                src="./assets/images/testi-avatar.jpg"
                width={100}
                height={100}
                loading="lazy"
                alt="Sam Jhonson"
                className="img"
              />
              <p className="label-2 profile-name">Sam Jhonson</p>
            </div>
          </div>
        </section>
      </article>{" "}
    </main>
  );
}
