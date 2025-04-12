import React from "react";

export default function Features() {
  const features = [
    {
      img: "./assets/images/features-icon-1.png",
      alt: "Hygienic Food",
      title: "Hygienic Food",
      text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      img: "./assets/images/features-icon-2.png",
      alt: "Fresh Environment",
      title: "Fresh Environment",
      text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      img: "./assets/images/features-icon-3.png",
      alt: "Skilled Chefs",
      title: "Skilled Chefs",
      text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      img: "./assets/images/features-icon-4.png",
      alt: "Event & Party",
      title: "Event & Party",
      text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
  ];

  return (
    <main>
      <article>
        <section id="ourChefs" className="section features text-center" aria-label="features">
          <div className="container">
            <p className="section-subtitle label-2">Why Choose Us</p>
            <h2 className="headline-1 section-title">Our Strength</h2>

            <ul className="grid-list">
              {features.map((feature, i) => (
                <li className="feature-item" key={i}>
                  <div className="feature-card">
                    <div className="card-icon">
                      <img    
                        src={feature.img}
                        width="100"
                        height="80"
                        loading="lazy"
                        alt={feature.alt}
                      />
                    </div>
                    <h3 className="title-2 card-title">{feature.title}</h3>
                    <p className="label-1 card-text">{feature.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <img
              src="./assets/images/shape-7.png"
              width="208"
              height="178"
              loading="lazy"
              alt="shape"
              className="shape shape-1"
            />
            <img
              src="./assets/images/shape-8.png"
              width="120"
              height="115"
              loading="lazy"
              alt="shape"
              className="shape shape-2"
            />
          </div>
        </section>
      </article>
    </main>
  );
}
